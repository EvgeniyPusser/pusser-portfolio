import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Evgenii Bogomazov-Pusser</h1>
      <nav>
        <Link to="/">Home</Link> |<Link to="/about">About</Link> |
        <Link to="/education">Education</Link> |
        <Link to="/support">Support</Link> |
        <Link to="/developer">Developer</Link> |
        <Link to="/blockchain">Blockchain</Link> |
        <Link to="/reconstruction">Reconstruction</Link> |
        <Link to="/manifest">Manifest</Link> |
        <Link to="/autogenic">Autogenic</Link>
      </nav>
    </header>
  );
}
