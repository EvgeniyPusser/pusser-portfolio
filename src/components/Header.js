import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Evgenii Bogomazov-Pusser</h1>
      <nav>
        <Link to="/">Home</Link> |<Link to="/about">About</Link> |
        <Link to="/projects">Projects</Link> |
        <Link to="/education">Education</Link> |
        <Link to="/support">Support</Link>
      </nav>
    </header>
  );
}
