export default function About() {
  return (
    <main>
      <h2>About Me</h2>
      <p>
        I am Evgenii Bogomazov-Pusser, an entrepreneur, innovator, and musician
        (composer, multi-instrumentalist, arranger, singer, and bandleader), as
        well as a poet and reformer. My journey has been marked by a passion for
        creativity and a commitment to excellence in all my endeavors.
      </p>

      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://open.spotify.com/artist/0XrKSOu1F2F49AAlt3Qtzk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Spotify</button>
        </a>
        <a
          href="https://music.apple.com/ru/artist/%D0%BA%D0%BB%D1%83%D0%B1-%D0%BA%D0%B0%D0%B2%D0%B0%D0%BB%D0%B5%D1%80%D0%B0-%D0%B3%D0%BB%D1%8E%D0%BA%D0%B0/1128579520"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Apple Music</button>
        </a>
        <a
          href="https://cavaliergluckclub.bandcamp.com/album/1989"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Bandcamp</button>
        </a>
        <a
          href="https://www.youtube.com/channel/UC6Mn4JbeWs1zL-mmZlc3rVg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>YouTube</button>
        </a>
      </div>
    </main>
  );
}
