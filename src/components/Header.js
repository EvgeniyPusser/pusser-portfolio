import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Evgenii Bogomazov-Pusser</h1>
      <nav>
        <Link to="/">Home</Link> |
        <span className="section-header">Я:</span>
        <Link to="/education">Education</Link> | 
        <Link to="/support">Support</Link> |
        <span className="section-header">Музыка:</span>
        <Link to="/about">Music</Link> |
        <span className="section-header">Проекты:</span>
        <Link to="/manifest">Manifest</Link> | 
        <Link to="/autogenic">Autogenic</Link> | 
        <Link to="/blockchain">Blockchain</Link> | 
        <Link to="/developer">Developer</Link> | 
        <Link to="/reconstruction">Reconstruction</Link>
      </nav>
    </header>
  );
}
