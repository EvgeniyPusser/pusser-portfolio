import { NavLink } from "react-router-dom";

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
      { to: "/poetry", label: "Poetry" },
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
      <NavLink to="/" className="brand" aria-label="Home">
        <span className="brand-mark">EB</span>
        <span>
          <span className="brand-name">Evgenii Bogomazov-Pusser</span>
          <span className="brand-subtitle">Music, development, reform</span>
        </span>
      </NavLink>

      <nav className="site-nav" aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        {navGroups.map((group) => (
          <div className="nav-section" key={group.label}>
            <button className="section-title" type="button">
              {group.label}
            </button>
            <div className="nav-dropdown">
              {group.links.map((link) => (
                <NavLink key={link.to} to={link.to}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </header>
  );
}
