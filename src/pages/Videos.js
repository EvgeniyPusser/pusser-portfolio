export default function Videos() {
  return (
    <main>
      <h2>My Videos</h2>
      
      <section>
        <p>Check out my latest music videos and performances:</p>
        
        <div style={{
          textAlign: "center",
          margin: "2rem 0",
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          <a
            href="https://www.youtube.com/@evgeniypusser4562/videos"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "1rem 2rem",
              background: "#ff0000",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: "bold",
              boxShadow: "0 4px 12px rgba(255,0,0,0.3)"
            }}
          >
            🎥 Watch on YouTube →
          </a>

          <a
            href="https://www.facebook.com/share/p/1A372WBq2k/?mibextid=oFDknk"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "1rem 2rem",
              background: "#1877f2",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: "bold",
              boxShadow: "0 4px 12px rgba(24,119,242,0.25)"
            }}
          >
            👍 Share on Facebook →
          </a>
        </div>
      </section>
    </main>
  );
}