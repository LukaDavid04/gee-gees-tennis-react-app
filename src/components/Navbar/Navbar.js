import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        {/* Replace text with logo image */}
        <img
          src="/images/geegees_logo_white.png"
          alt="Gee-Gees Tennis Logo"
          className="logo"
        />
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
          <a href="#home">HOME</a>
          <a href="#varsity-team">VARSITY TEAM</a>
          <a href="#recreational-team">RECREATIONAL TEAM</a>
          <a href="#coaches">COACHES</a>
          <a href="#executive-team">EXECUTIVE TEAM</a>
          <a href="#club-policy">CLUB POLICY</a>
          <a href="#sponsors">SPONSORS</a>
          <a href="#outreach">OUTREACH</a>
          <a href="#faq">FAQ</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;