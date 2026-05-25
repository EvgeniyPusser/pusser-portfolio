import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
  const [openGroup, setOpenGroup] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpenGroup(null);
    setIsNavOpen(false);
  }, [location.pathname]);

  const closeNav = () => {
    setOpenGroup(null);
    setIsNavOpen(false);
  };

  return (
    <header className={`site-header${isNavOpen ? " nav-open" : " nav-closed"}`}>
      <div className="site-header-top">
        <Link to="/" className="site-brand" onClick={closeNav}>
          Evgenii Bogomazov-Pusser
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsNavOpen((current) => !current)}
        >
          Menu
        </button>
      </div>

      <nav className="site-nav" aria-label="Main navigation">
        <Link to="/" onClick={closeNav}>
          Home
        </Link>
        {navGroups.map((group) => (
          <div
            className={`nav-section${openGroup === group.label ? " is-open" : ""}`}
            key={group.label}
          >
            <button
              type="button"
              className="section-title"
              aria-expanded={openGroup === group.label}
              onClick={() =>
                setOpenGroup((current) =>
                  current === group.label ? null : group.label
                )
              }
            >
              {group.label}
            </button>
            <div className="nav-dropdown">
              {group.links.map((link) => (
                <Link key={link.to} to={link.to} onClick={closeNav}>
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
