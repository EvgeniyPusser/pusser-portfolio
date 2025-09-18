import React from "react";
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
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,.12), rgba(0,0,0,.12)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Нижняя “полка” */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          // Непрозрачная подложка без блюра → фон чёткий
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.72) 60%, rgba(0,0,0,0.85) 100%)",
          padding: "2rem 1.25rem",
        }}
      >
        <div
          className="aboutGrid"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.2fr .8fr",
            alignItems: "end",
            gap: "2rem",
            color: "#fff",
          }}
        >
          {/* Левый блок — текст, короче и крупнее для композиции */}
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "clamp(28px, 4vw, 40px)",
                lineHeight: 1.15,
                textShadow: "0 2px 6px rgba(0,0,0,.9)",
              }}
            >
              Evgenii Bogomazov-Pusser
            </h1>
            <p
              style={{
                margin: "0.75rem 0 0",
                fontSize: "clamp(15px, 2vw, 18px)",
                lineHeight: 1.6,
                maxWidth: 680,
                textShadow: "0 2px 6px rgba(0,0,0,.85)",
                opacity: 0.95,
              }}
            >
              Entrepreneur, innovator, and musician (composer,
              multi-instrumentalist, arranger, singer, bandleader); also a poet
              and reformer. Passion for creativity and a commitment to
              excellence in every endeavor.
            </p>
          </div>

          {/* Правый блок — голубые кнопки */}
          <div
            style={{
              justifySelf: "end",
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
      </div>

      {/* Небольшой CSS для адаптива */}
      <style>{`
        @media (max-width: 860px) {
          .aboutGrid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .aboutGrid > div:last-child { justify-self: start; }
        }
      `}</style>
    </main>
  );
}
