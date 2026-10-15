# station_5min.py С КОММЕНТАРИЯМИ
# Код тот же, что в src/traffic_engine/ingestion/station_5min.py.
# Длинные пояснения в тройных кавычках убраны, вместо них короткие комментарии.
#
# Как читать:
#   ШАГ 1, ШАГ 2 ... это порядок, в котором строки выполняются
#   при вызове load_station_5min("tiny.txt").
#   Пример чисел: файл tiny.txt, в строке 22 куска через запятую.
#
# Что делает файл целиком:
#   берёт файл PeMS (числа через запятую, без названий колонок),
#   даёт колонкам имена и возвращает таблицу.


from __future__ import annotations

from collections.abc import Iterable
from pathlib import Path

import pandas as pd      # чужая библиотека. из неё берутся read_csv, to_datetime, to_numeric


# ====================================================================
# ЧАСТЬ 1. ЗАРАНЕЕ ВПИСАННЫЕ ДАННЫЕ
# Эти строки выполняются один раз, когда файл загружается (import).
# Ничего не читают, ничего не считают из файла PeMS.
# Всё здесь вписано руками по описанию формата PeMS.
# ====================================================================

# 12 имён для первых 12 кусков строки. порядок важен: 1-е имя → 1-й кусок.
STATION_5MIN_BASE_COLUMNS: list[str] = [
    "timestamp",
    "station",
    "district",
    "freeway",
    "direction",
    "lane_type",
    "station_length",
    "samples",
    "pct_observed",
    "total_flow",
    "avg_occupancy",
    "avg_speed",
]

# 5 окончаний. из них потом склеиваются имена для кусков после 12-го:
# lane1_samples, lane1_flow, ... lane2_samples, ...
LANE_COLUMN_SUFFIXES: list[str] = [
    "samples",
    "flow",
    "avg_occ",
    "avg_speed",
    "observed",
]

_N_BASE = len(STATION_5MIN_BASE_COLUMNS)     # len считает слова в списке выше → 12
_N_PER_LANE = len(LANE_COLUMN_SUFFIXES)      # → 5

# шаблон, как записано время в файле: месяц/день/год часы:минуты:секунды
_TIMESTAMP_FORMAT = "%m/%d/%Y %H:%M:%S"

# какие колонки превратить из текста в числа (используется в ШАГЕ 8)
_NUMERIC_BASE_COLUMNS = [
    "station",
    "district",
    "freeway",
    "station_length",
    "samples",
    "pct_observed",
    "total_flow",
    "avg_occupancy",
    "avg_speed",
]


# своя ошибка. нужна, чтобы остановить программу с понятным сообщением
class PemsFormatError(ValueError):
    pass


# ====================================================================
# ЧАСТЬ 2. ФУНКЦИИ
# def ... только описывает функцию. выполняется она, когда её вызовут.
# ====================================================================


# ШАГ 3.  вызывается из build_column_names (ШАГ 4)
# получает: n_columns = 22 (из ШАГА 2)
# возвращает: число полос = 2
def infer_lane_count(n_columns: int) -> int:
    # проверка: кусков меньше 12 → это не файл PeMS → стоп с ошибкой
    if n_columns < _N_BASE:
        raise PemsFormatError(
            f"в файле {n_columns} колонок, а базовых полей одних только {_N_BASE}"
        )
    extra = n_columns - _N_BASE              # 22 - 12 = 10
    # % это остаток от деления. 10 % 5 = 0 → делится ровно → всё в порядке.
    # если остаток не 0 (например 21 кусок: 9 % 5 = 4) → стоп с ошибкой
    if extra % _N_PER_LANE != 0:
        raise PemsFormatError(
            f"{n_columns} колонок = {_N_BASE} базовых + {extra} лишних, "
            f"а {extra} не делится на {_N_PER_LANE} полей на полосу"
        )
    return extra // _N_PER_LANE              # // деление без остатка: 10 // 5 = 2


# ШАГ 4.  вызывается из load_station_5min
# получает: n_columns = 22
# возвращает: список из 22 имён
def build_column_names(n_columns: int) -> list[str]:
    n_lanes = infer_lane_count(n_columns)            # → ШАГ 3 → получили 2
    names = list(STATION_5MIN_BASE_COLUMNS)          # копия 12 имён из ЧАСТИ 1
    for lane in range(1, n_lanes + 1):               # lane = 1, потом lane = 2
        # к списку дописываются 5 имён: lane1_samples, lane1_flow, lane1_avg_occ,
        # lane1_avg_speed, lane1_observed. на втором круге то же с lane2_
        names.extend(f"lane{lane}_{suffix}" for suffix in LANE_COLUMN_SUFFIXES)
    return names                                     # 12 + 5 + 5 = 22 имени


# ШАГ 2.  вызывается из load_station_5min
# получает: путь к файлу
# возвращает: сколько кусков в первой строке = 22
def _peek_column_count(path: Path) -> int:
    # read_csv (из pandas) читает файл и режет строки по запятым.
    # header=None: в файле нет строки с названиями, первая строка это данные.
    # nrows=1: прочитать только одну строку.
    head = pd.read_csv(path, header=None, nrows=1)
    # shape это размер таблицы: (строк, колонок) = (1, 22). [1] берёт второе → 22
    return head.shape[1]


# ГЛАВНАЯ ФУНКЦИЯ. её вызывают снаружи (pipeline.py, try_it.py).
# получает: путь к файлу
# возвращает: таблицу с именами колонок
def load_station_5min(
    path: str | Path,
    *,
    keep_lanes: bool = False,    # оставить ли 10 колонок по полосам. по умолчанию нет
    localize: bool = True,       # пометить ли время часовым поясом Лос-Анджелеса
) -> pd.DataFrame:

    # ШАГ 1. путь из текста превращается в объект Path. если файла нет → стоп
    path = Path(path)
    if not path.exists():
        raise FileNotFoundError(path)

    # ШАГИ 2–4. сначала выполняется то, что в скобках:
    #   _peek_column_count(path)  → ШАГ 2 → 22
    #   build_column_names(22)    → ШАГ 4 (внутри ШАГ 3) → 22 имени
    names = build_column_names(_peek_column_count(path))

    # ШАГ 5. какие колонки оставить.
    # keep_lanes = False (по умолчанию) → usecols = 12 имён из ЧАСТИ 1
    # keep_lanes = True → usecols = None, то есть оставить все 22
    usecols: Iterable[str] | None = None if keep_lanes else STATION_5MIN_BASE_COLUMNS

    # ШАГ 6. чтение всего файла.
    # read_csv режет каждую строку по запятым на 22 куска
    # и раздаёт им 22 имени из names ПО ПОРЯДКУ: 1-е имя → 1-й кусок.
    # из 22 колонок оставляет только те, что в usecols.
    # dtype: две колонки (lane_type, direction) держать как текст
    df = pd.read_csv(
        path,
        header=None,
        names=names,
        usecols=usecols,
        dtype={"lane_type": "string", "direction": "string"},
    )

    # ШАГ 7. колонка timestamp была текстом "01/01/2026 07:00:00".
    # to_datetime (из pandas) превращает её во время по шаблону из ЧАСТИ 1
    df["timestamp"] = pd.to_datetime(df["timestamp"], format=_TIMESTAMP_FORMAT)

    # ШАГ 7а. если localize = True: к времени дописывается часовой пояс Лос-Анджелеса.
    # в файле пояс не записан. в дни перевода часов один час бывает дважды
    # или его нет вовсе. такие значения становятся NaT (пустое время)
    if localize:
        df["timestamp"] = df["timestamp"].dt.tz_localize(
            "America/Los_Angeles",
            ambiguous="NaT",
            nonexistent="NaT",
        )

    # ШАГ 8. по очереди для каждой колонки из списка _NUMERIC_BASE_COLUMNS:
    # to_numeric (из pandas) превращает текст в число.
    # errors="coerce": если не число (например пусто) → NaN, программа не падает
    for col in _NUMERIC_BASE_COLUMNS:
        df[col] = pd.to_numeric(df[col], errors="coerce")

    # ШАГ 9. готовая таблица уходит туда, откуда функцию вызвали
    return df


# ОТДЕЛЬНАЯ ФУНКЦИЯ. то же самое для папки с многими файлами.
# получает: папку
# возвращает: одну общую таблицу
def load_station_5min_dir(
    directory: str | Path,
    *,
    pattern: str = "*station_5min*.txt.gz",
    **kwargs,
) -> pd.DataFrame:
    directory = Path(directory)
    files = sorted(directory.glob(pattern))      # список файлов в папке, подходящих по имени
    if not files:                                # ни одного → стоп
        raise FileNotFoundError(f"в {directory} нет файлов по шаблону {pattern}")
    # для каждого файла вызвать load_station_5min → получается список таблиц
    frames = [load_station_5min(f, **kwargs) for f in files]
    # concat склеивает таблицы одну под другой в одну
    return pd.concat(frames, ignore_index=True)
