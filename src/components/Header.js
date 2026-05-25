import { Link } from "react-router-dom";

const navGroups = [
  {
    label: "Personal",
    links: [
      { to: "/education", label: "Education" },
      { to: "/support", label: "Support" },
    ],
  },
  {
    label: "Music and Art",
    links: [
      { to: "/about", label: "Portfolio" },
      { to: "/videos", label: "Videos" },
      { to: "/poetry", label: "Poetry & Collages" },
    ],
  },
  {
    label: "Projects",
    links: [
      { to: "/manifest", label: "Manifest" },
      { to: "/autogenic", label: "Autogenic" },
      { to: "/blockchain", label: "Blockchain" },
      { to: "/developer", label: "Developer" },
      { to: "/reconstruction", label: "Reconstruction" },
    ],
  },
];

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-brand">
        Evgenii Bogomazov-Pusser
      </Link>

      <nav className="site-nav" aria-label="Main navigation">
        <Link to="/">Home</Link>
        {navGroups.map((group) => (
          <div className="nav-section" key={group.label}>
            <span className="section-title">{group.label}</span>
            <div className="nav-dropdown">
              {group.links.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </header>
  );
}
