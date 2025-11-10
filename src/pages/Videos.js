export default function Videos() {
  return (
    <main>
      <h2>My Videos</h2>
      
      <section>
        <p>Check out my latest music videos and performances:</p>
        
        <div style={{
          textAlign: "center",
          margin: "2rem 0"
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
        </div>
      </section>
    </main>
  );
}