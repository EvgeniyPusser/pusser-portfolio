import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Evgenii Bogomazov-Pusser</h1>
      <nav>
        <Link to="/">Home</Link> |
        <div className="nav-section">
          <span className="section-title">Personal</span>
          <div className="nav-dropdown">
            <Link to="/education">Education</Link>
            <Link to="/support">Support</Link>
          </div>
        </div>{" "}
        |
        <div className="nav-section">
          <span className="section-title">Music and Art</span>
          <div className="nav-dropdown">
            <Link to="/about">Portfolio</Link>
            <Link to="/videos">Videos</Link>
            <Link to="/poetry">Poetry & Collages</Link>
          </div>
        </div>{" "}
        | |
        <div className="nav-section">
          <span className="section-title">Projects</span>
          <div className="nav-dropdown">
            <Link to="/manifest">Manifest</Link>
            <Link to="/autogenic">Autogenic</Link>
            <Link to="/blockchain">Blockchain</Link>
            <Link to="/developer">Developer</Link>
            <Link to="/reconstruction">Reconstruction</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
