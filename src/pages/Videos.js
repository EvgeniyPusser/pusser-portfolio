export default function Videos() {
  return (
    <main>
      <h2>🎥 My Videos</h2>

      <section>
        <p>Check out my latest music videos and performances:</p>

        <div className="social-links-container">
          <a
            href="https://www.youtube.com/@evgeniypusser4562/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-youtube social-link-button">
              🎥 Watch on YouTube →
            </button>
          </a>

          <a
            href="https://www.facebook.com/share/p/1A372WBq2k/?mibextid=oFDknk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-facebook social-link-button">
              👍 Share on Facebook →
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}