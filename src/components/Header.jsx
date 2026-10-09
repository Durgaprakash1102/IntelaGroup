import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/Header.css";
import intelaLogo from "../images/intela-group-logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? "hidden" : "";
      return next;
    });
  };

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) closeMenu();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Home", path: "/", end: true },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Industries", path: "/industries" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="ig-header" ref={headerRef}>
      <div className="ig-header-inner">
        {/* Logo */}
        <Link
          to="/"
          className="ig-brand"
          onClick={closeMenu}
          aria-label="Intela Group LLC - Home"
        >
          <img
            src={intelaLogo}
            alt="Intela Group LLC"
            className="ig-logo"
            width="170"
            height="80"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop + Mobile Navigation */}
        <nav
          id="ig-navigation"
          className={`ig-navigation ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <div className="ig-nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `ig-nav-link ${isActive ? "active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile CTA */}
          <Link
            to="/contact"
            className="ig-mobile-cta"
            onClick={closeMenu}
          >
            Get in Touch
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link to="/contact" className="ig-cta" onClick={closeMenu}>
          <span>Get in Touch</span>
          <i className="fa-solid fa-arrow-right" />
        </Link>

        {/* Hamburger */}
        <button
          type="button"
          className={`ig-menu-button ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="ig-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile backdrop */}
      <div
        className={`ig-backdrop ${menuOpen ? "visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </header>
  );
}

export default Header;