export default function Poetry() {
  return (
    <main>
      <h2>Poetry & Collages / Стихи</h2>

      <section>
        <p>Мои стихи и поэтические размышления:</p>

        <div
          style={{
            textAlign: "center",
            margin: "2rem 0",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://www.instagram.com/pusserevgeniypoetry/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "1rem 2rem",
              background:
                "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: "bold",
              boxShadow: "0 4px 12px rgba(188,24,136,0.3)",
            }}
          >
            📖 Instagram
          </a>

          <a
            href="https://stihi.ru/poems/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "1rem 2rem",
              background: "#4a90e2",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: "bold",
              boxShadow: "0 4px 12px rgba(74,144,226,0.3)",
            }}
          >
            📝 Stihi.ru
          </a>
        </div>

        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#666",
          }}
        >
          <p>
            Здесь вы найдёте мои стихи, поэтические эксперименты и размышления о
            жизни, искусстве и человеческой природе.
          </p>
        </div>
      </section>
    </main>
  );
}