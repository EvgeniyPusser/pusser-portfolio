import bgImage from "../assets/backGroundGluck.jpg";

export default function About() {
  const btnStyle = {
    padding: "0.7rem 1.1rem",
    borderRadius: 12,
    border: "1px solid #7cb6ff",
    background: "#2b8eff",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 8px 24px rgba(43,142,255,.35)",
    transition: "transform .15s ease, box-shadow .15s ease",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end", // ↓ весь контент у нижней кромки
        backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "2rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 960,
          margin: "0 auto",
          color: "#fff",
          textShadow: "0 2px 6px rgba(0,0,0,.9)",
          lineHeight: 1.6,
          paddingBottom: "1rem", // небольшой отступ от низа
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "0.5rem" }}>About Me</h2>
        <p style={{ margin: 0 }}>
          I am Evgenii Bogomazov-Pusser, an entrepreneur, innovator, and
          musician (composer, multi-instrumentalist, arranger, singer, and
          bandleader), as well as a poet and reformer. My journey has been
          marked by a passion for creativity and a commitment to excellence in
          all my endeavors.
        </p>

        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".75rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://open.spotify.com/artist/0XrKSOu1F2F49AAlt3Qtzk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={btnStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 28px rgba(43,142,255,.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(43,142,255,.35)";
              }}
            >
              Spotify
            </button>
          </a>

          <a
            href="https://music.apple.com/ru/artist/%D0%BA%D0%BB%D1%83%D0%B1-%D0%BA%D0%B0%D0%B2%D0%B0%D0%BB%D0%B5%D1%80%D0%B0-%D0%B3%D0%BB%D1%8E%D0%BA%D0%B0/1128579520"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={btnStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 28px rgba(43,142,255,.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(43,142,255,.35)";
              }}
            >
              Apple Music
            </button>
          </a>

          <a
            href="https://cavaliergluckclub.bandcamp.com/album/1989"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={btnStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 28px rgba(43,142,255,.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(43,142,255,.35)";
              }}
            >
              Bandcamp
            </button>
          </a>

          <a
            href="https://www.youtube.com/channel/UC6Mn4JbeWs1zL-mmZlc3rVg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={btnStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 28px rgba(43,142,255,.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(43,142,255,.35)";
              }}
            >
              YouTube
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
