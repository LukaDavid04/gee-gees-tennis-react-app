import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        {/* Make logo a link to homepage */}
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <img
            src="/images/geegees_logo_white.png"
            alt="Gee-Gees Tennis Logo"
            className="logo"
          />
        </Link>
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          &#9776;
        </button>
      </div>

      {isMenuOpen && (
        <div className="nav-menu">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link>
          <Link to="/varsity-team" onClick={() => setIsMenuOpen(false)}>VARSITY TEAM</Link>
          <Link to="/recreational-team" onClick={() => setIsMenuOpen(false)}>RECREATIONAL TEAM</Link>
          <Link to="/coaches" onClick={() => setIsMenuOpen(false)}>COACHES</Link>
          <Link to="/executive-team" onClick={() => setIsMenuOpen(false)}>EXECUTIVE TEAM</Link>
          <Link to="/club-policy" onClick={() => setIsMenuOpen(false)}>CLUB POLICY</Link>
          <Link to="/sponsors" onClick={() => setIsMenuOpen(false)}>SPONSORS</Link>
          <Link to="/outreach" onClick={() => setIsMenuOpen(false)}>OUTREACH</Link>
          <Link to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;