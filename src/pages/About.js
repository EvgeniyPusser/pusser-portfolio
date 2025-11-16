import React from "react";
import bgImage from "../assets/backGroundGluck.jpg";

export default function About() {
  return (
    <main
      className="about-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.12), rgba(0,0,0,.12)), url(${bgImage})`,
      }}
    >
      <div className="about-overlay">
        <div className="about-grid">
          <div>
            <h1 className="about-title">Evgenii Bogomazov-Pusser</h1>
            <p className="about-description">
              Entrepreneur, innovator, and musician (composer,
              multi-instrumentalist, arranger, singer, bandleader); also a poet
              and reformer. Passion for creativity and a commitment to
              excellence in every endeavor.
            </p>
          </div>

          <div className="about-buttons">
            <a
              href="https://open.spotify.com/artist/0XrKSOu1F2F49AAlt3Qtzk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-blue">Spotify</button>
            </a>

            <a
              href="https://music.apple.com/ru/artist/%D0%BA%D0%BB%D1%83%D0%B1-%D0%BA%D0%B0%D0%B2%D0%B0%D0%BB%D0%B5%D1%80%D0%B0-%D0%B3%D0%BB%D1%8E%D0%BA%D0%B0/1128579520"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-blue">Apple Music</button>
            </a>

            <a
              href="https://cavaliergluckclub.bandcamp.com/album/1989"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-blue">Bandcamp</button>
            </a>

            <a
              href="https://www.youtube.com/channel/UC6Mn4JbeWs1zL-mmZlc3rVg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-blue">YouTube</button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}