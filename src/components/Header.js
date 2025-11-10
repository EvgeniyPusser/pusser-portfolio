import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Evgenii Bogomazov-Pusser</h1>
      <nav>
        <Link to="/">Home</Link> |
        <div className="nav-section">
          <span className="section-title">Я</span>
          <div className="nav-dropdown">
            <Link to="/about">About</Link>
            <Link to="/education">Education</Link>
            <Link to="/manifest">Manifest</Link>
            <Link to="/autogenic">Autogenic</Link>
          </div>
        </div> |
        <div className="nav-section">
          <span className="section-title">Музыка</span>
          <div className="nav-dropdown">
            <Link to="/support">Support</Link>
          </div>
        </div> |
        <div className="nav-section">
          <span className="section-title">Проекты</span>
          <div className="nav-dropdown">
            <Link to="/developer">Developer</Link>
            <Link to="/blockchain">Blockchain</Link>
            <Link to="/reconstruction">Reconstruction</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
