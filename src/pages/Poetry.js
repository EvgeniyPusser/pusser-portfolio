export default function Poetry() {
  return (
    <main>
      <h2>✍️ Poetry & Collages / Стихи</h2>

      <section>
        <p>Мои стихи и поэтические размышления:</p>

        <div className="social-links-container">
          <a
            href="https://www.instagram.com/pusserevgeniypoetry/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-instagram social-link-button">
              📖 Instagram
            </button>
          </a>

          <a
            href="https://stihi.ru/avtor/pusser88"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-stihi social-link-button">
              📝 Stihi.ru
            </button>
          </a>
        </div>

        <div className="social-description">
          <p>
            Здесь вы найдёте мои стихи, поэтические эксперименты и размышления о
            жизни, искусстве и человеческой природе.
          </p>
        </div>
      </section>
    </main>
  );
}