import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
      <nav className="custom-navbar">
        <div className="custom-navbar-header">
          <NavLink to="/" onClick={closeMenu}>
            <img
                src="/images/geegees_logo_white.png"
                alt="Gee-Gees Tennis Logo"
                className="logo"
            />
          </NavLink>
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
            <div className="custom-nav-menu">
              <NavLink to="/" onClick={closeMenu}>HOME</NavLink>
              <NavLink to="/varsity" onClick={closeMenu}>VARSITY TEAM</NavLink>
              <NavLink to="/recreational" onClick={closeMenu}>RECREATIONAL TEAM</NavLink>
              <NavLink to="/coaches" onClick={closeMenu}>COACHES</NavLink>
              <NavLink to="/exec" onClick={closeMenu}>EXECUTIVE TEAM</NavLink>
              <NavLink to="/documents" onClick={closeMenu}>CLUB POLICY</NavLink>
              <NavLink to="/sponsors" onClick={closeMenu}>SPONSORS</NavLink>
              <NavLink to="/outreach" onClick={closeMenu}>OUTREACH</NavLink>
              <NavLink to="/faq" onClick={closeMenu}>FAQ</NavLink>
            </div>
        )}
      </nav>
  );
};

export default Navbar;