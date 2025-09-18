import bgImage from "../assets/backGroundGluck.jpg";

export default function About() {
  const btnStyle: React.CSSProperties = {
    padding: "0.6rem 1rem",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.45)",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    backdropFilter: "blur(2px)",
  };

  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "2rem",
      }}
    >
      {/* полупрозрачная подложка, чтобы текст не терялся */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)", // при желании усилить до 0.6
        }}
      />

      {/* контент поверх подложки */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 960,
          margin: "0 auto",
          color: "#fff",
          textShadow: "0 2px 6px rgba(0,0,0,0.95)",
          lineHeight: 1.6,
          // лёгкая «подложка» под текст (можно убрать)
          background: "rgba(0,0,0,0.15)",
          borderRadius: 16,
          padding: "1.5rem",
          backdropFilter: "blur(2px)",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "0.75rem" }}>About Me</h2>

        <p style={{ margin: 0 }}>
          I am Evgenii Bogomazov-Pusser, an entrepreneur, innovator, and
          musician (composer, multi-instrumentalist, arranger, singer, and
          bandleader), as well as a poet and reformer. My journey has been
          marked by a passion for creativity and a commitment to excellence in
          all my endeavors.
        </p>

        <div
          style={{
            marginTop: "1.25rem",
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://open.spotify.com/artist/0XrKSOu1F2F49AAlt3Qtzk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={btnStyle}>Spotify</button>
          </a>
          <a
            href="https://music.apple.com/ru/artist/%D0%BA%D0%BB%D1%83%D0%B1-%D0%BA%D0%B0%D0%B2%D0%B0%D0%BB%D0%B5%D1%80%D0%B0-%D0%B3%D0%BB%D1%8E%D0%BA%D0%B0/1128579520"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={btnStyle}>Apple Music</button>
          </a>
          <a
            href="https://cavaliergluckclub.bandcamp.com/album/1989"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={btnStyle}>Bandcamp</button>
          </a>
          <a
            href="https://www.youtube.com/channel/UC6Mn4JbeWs1zL-mmZlc3rVg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={btnStyle}>YouTube</button>
          </a>
        </div>
      </div>
    </main>
  );
}
