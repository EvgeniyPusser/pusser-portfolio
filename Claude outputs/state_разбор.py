# state.py С КОММЕНТАРИЯМИ
# Код тот же, что в src/traffic_engine/features/state.py.
# Длинные пояснения в тройных кавычках убраны, вместо них короткие комментарии.
#
# Что делает файл целиком:
#   для каждого момента выезда собирает то, что было известно ЗАРАНЕЕ.
#   это признаки. по ним модель потом угадывает минуты поездки.
#
# Кто вызывает (pipeline.py):
#   строка 223  features = build_features(speed, postmiles)
#   строка 224  design   = forecast_matrix(features, horizon_minutes=60)
#
# Что приходит на вход:
#   speed      таблица скоростей из шага 3: строка = момент (шаг 5 минут),
#              столбец = станция в порядке движения (12 штук)
#   postmiles  где стоит каждая станция на дороге, в милях (12 чисел)
#
# Пример чисел в комментариях: 3 станции, 2 участка.
#   участок A→B = 2 мили, участок B→C = 3 мили
#            A    B    C
#   07:00   60   30   50
#   07:05   50   20   45


from __future__ import annotations

import numpy as np
import pandas as pd

# берутся из соседних файлов программы
from traffic_engine.features.trips import segment_lengths   # длины участков между станциями
from traffic_engine.models.baseline import is_off_day       # выходной/праздник: да/нет


# ====================================================================
# ЧАСТЬ 1. ЗАРАНЕЕ ВПИСАННЫЕ ЧИСЛА
# ====================================================================

SLOT_MINUTES = 5                               # шаг таблицы скоростей: 5 минут
DEFAULT_LAGS = (0, 5, 10, 15, 20, 25, 30)      # на сколько минут назад смотреть

MIN_SPEED_MPH = 5.0     # скорость ниже 5 заменяется на 5. иначе деление на ~0 даст бесконечное время
MAX_SPEED_MPH = 90.0    # скорость выше 90 заменяется на 90. выше на фривее не бывает, это ошибка датчика

# календарные признаки. они известны заранее на любой срок,
# поэтому в ШАГЕ 6 их НЕ сдвигают назад
CALENDAR_COLUMNS = (
    "hour",
    "minute_of_day",
    "tod_sin",
    "tod_cos",
    "day_of_week",
    "is_off_day",
)


# ====================================================================
# ЧАСТЬ 2. ФУНКЦИИ
# ====================================================================


# ШАГ 3.  вызывается из corridor_state (ШАГ 2)
# получает: таблицу скоростей
# возвращает: для каждой строки одно число — сколько минут заняла бы поездка,
#             если взять скорости всех станций В ОДИН И ТОТ ЖЕ МОМЕНТ
#
# отличие от virtual_trips (шаг 3 программы): там скорость на станции берётся
# на момент, когда машина туда доехала, то есть из будущего. признак из будущего
# брать нельзя. здесь всё из одного момента, поэтому к моменту выезда это уже известно.
def snapshot_travel_time(
    speed: pd.DataFrame,
    postmiles: np.ndarray | list[float],
    *,
    min_speed: float = MIN_SPEED_MPH,
    max_speed: float = MAX_SPEED_MPH,
) -> pd.Series:
    seg = segment_lengths(postmiles)               # длины участков: [2, 3]
    # проверка: станций должно быть на 1 больше, чем участков. 3 станции — 2 участка
    if speed.shape[1] != len(seg) + 1:
        raise ValueError(f"станций {speed.shape[1]}, постмилей {len(postmiles)} — не сходится")
    # to_numpy: таблица → просто массив чисел
    # clip: всё, что ниже 5, сделать 5; всё, что выше 90, сделать 90
    v = np.clip(speed.to_numpy(dtype=float), min_speed, max_speed)
    # v[:, :-1]   все строки, все столбцы кроме последнего: скорости A и B.
    #             у последней станции C участка после неё нет.
    # seg / v     длина / скорость для каждого участка:
    #             07:00 → [2/60, 3/30] = [0.033, 0.1] часа
    # .sum(axis=1) сложить по строке: 0.133 часа
    # * 60.0      в минуты: 8 минут
    minutes = (seg / v[:, :-1]).sum(axis=1) * 60.0
    # обратно в таблицу, с теми же метками времени, имя столбца tt_snapshot
    return pd.Series(minutes, index=speed.index, name="tt_snapshot")


# ШАГ 1.  вызывается из build_features
# получает: метки времени (07:00, 07:05, ...)
# возвращает: таблицу календарных признаков
def calendar_features(index: pd.DatetimeIndex, *, holidays=None) -> pd.DataFrame:
    # номер минуты в сутках: 07:05 → 7*60 + 5 = 425
    minute_of_day = index.hour * 60 + index.minute
    # минута → угол. сутки = полный круг. 2*pi это 360 градусов в радианах
    # 425 / 1440 * 360° = 106°
    angle = 2 * np.pi * minute_of_day / (24 * 60)
    return pd.DataFrame(
        {
            "hour": index.hour.to_numpy(),             # час: 7
            "minute_of_day": minute_of_day.to_numpy(), # 425
            "tod_sin": np.sin(angle),                  # синус угла
            "tod_cos": np.cos(angle),                  # косинус угла
            "day_of_week": index.dayofweek.to_numpy(), # 0 = понедельник ... 6 = воскресенье
            # суббота/воскресенье или праздник из списка → 1, иначе 0
            "is_off_day": is_off_day(index, holidays).astype(int),
        },
        index=index,
    )


# ШАГ 2.  вызывается из build_features
# получает: таблицу скоростей
# возвращает: таблицу признаков состояния дороги
def corridor_state(
    speed: pd.DataFrame,
    postmiles: np.ndarray | list[float],
    *,
    lags: tuple[int, ...] = DEFAULT_LAGS,
) -> pd.DataFrame:
    # проверка: каждый лаг должен делиться на 5. лаг 7 минут невозможен, строки идут через 5
    if any(k % SLOT_MINUTES for k in lags):
        raise ValueError(f"лаги должны быть кратны {SLOT_MINUTES} минутам")

    tt = snapshot_travel_time(speed, postmiles)    # → ШАГ 3. одно число на строку: 07:00 → 8 мин
    v = speed.to_numpy(dtype=float)                # скорости как массив чисел

    out = pd.DataFrame(index=speed.index)          # пустая таблица с теми же метками времени

    # для каждого лага 0, 5, 10 ... 30 создаётся столбец tt_lag0, tt_lag5 ... tt_lag30
    # shift(n) сдвигает столбец на n строк вниз. в строке 07:30 окажется значение из 07:00.
    # k // 5: 15 минут → 3 строки
    # итог: tt_lag15 в строке 07:30 = время поездки по скоростям 07:15
    for k in lags:
        out[f"tt_lag{k}"] = tt.shift(k // SLOT_MINUTES)

    # пробка растёт или рассасывается: сейчас минус 15 минут назад
    # +2 → стало на 2 минуты дольше, пробка растёт
    # −2 → рассасывается
    if 0 in lags and 15 in lags:
        out["tt_trend"] = out["tt_lag0"] - out["tt_lag15"]

    # axis=1 значит «по строке», то есть по станциям в один момент
    # nanmin: самая низкая скорость среди станций, пустые клетки пропустить. 07:00 → 30
    out["speed_min"] = np.nanmin(v, axis=1)
    # nanmean: средняя скорость по станциям. 07:00 → (60 + 30 + 50) / 3 = 46.7
    out["speed_mean"] = np.nanmean(v, axis=1)
    return out


# ГЛАВНАЯ ФУНКЦИЯ ШАГА 4. вызывается из pipeline.py, строка 223
# возвращает: одну таблицу, строка = момент, столбцы = все признаки
def build_features(
    speed: pd.DataFrame,
    postmiles: np.ndarray | list[float],
    *,
    lags: tuple[int, ...] = DEFAULT_LAGS,
    holidays=None,
) -> pd.DataFrame:
    cal = calendar_features(speed.index, holidays=holidays)   # → ШАГ 1. 6 столбцов
    state = corridor_state(speed, postmiles, lags=lags)       # → ШАГ 2. 10 столбцов
    # concat axis=1: поставить две таблицы рядом, слева календарь, справа состояние
    # строки с пустыми клетками здесь НЕ удаляются. это делает pipeline.py (dropna)
    return pd.concat([cal, state], axis=1)


# ШАГ 5.  вызывается из pipeline.py, строка 224, с horizon_minutes = 60
# получает: таблицу признаков из build_features
# возвращает: ту же таблицу, но признаки дороги сдвинуты на 60 минут назад
#
# зачем: вопрос «я выезжаю в 08:00, решаю в 07:00». в 07:00 скорости 08:00 ещё
# не измерены. поэтому в строку 08:00 кладутся скорости 07:00.
# календарь не сдвигается: что 08:00 — вторник, известно заранее.
def forecast_matrix(
    features: pd.DataFrame,
    *,
    horizon_minutes: int,
    calendar_columns: tuple[str, ...] = CALENDAR_COLUMNS,
) -> pd.DataFrame:
    # горизонт не может быть отрицательным и должен делиться на 5
    if horizon_minutes < 0 or horizon_minutes % SLOT_MINUTES:
        raise ValueError(f"горизонт должен быть неотрицательным и кратным {SLOT_MINUTES} минутам")
    # известные заранее столбцы: календарные, которые есть в таблице
    known = [c for c in calendar_columns if c in features.columns]
    # все остальные: признаки дороги
    state = [c for c in features.columns if c not in known]
    # сдвиг признаков дороги на 60 // 5 = 12 строк вниз.
    # в строке 08:00 окажутся значения из строки 07:00
    shifted = features[state].shift(horizon_minutes // SLOT_MINUTES)
    # поставить рядом: календарь без сдвига + дорога со сдвигом
    return pd.concat([features[known], shifted], axis=1)
