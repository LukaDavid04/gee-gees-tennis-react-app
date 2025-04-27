import React, { useState } from 'react';
import './Navbar.css';

<<<<<<< HEAD
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
=======
function Navbar() {
  const [isSubheaderVisible, setIsSubheaderVisible] = useState(false);

  const navigationBar = () => {
    setIsSubheaderVisible(!isSubheaderVisible);
>>>>>>> 0d42a22 (changes to the main page)
  };

  return (
    <nav className="navbar">
<<<<<<< HEAD
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
=======
      <a href="index.html" className="logo-text">
        <img src="images/geegees_logo_white.png" alt="Gee-Gees Logo" className="logo-img" />
      </a>

      <button 
        className="nav-icon" 
        onClick={navigationBar} 
        aria-label="Toggle navigation"
        aria-expanded={isSubheaderVisible ? 'true' : 'false'}
      >
        <i className="fa fa-bars"></i>
      </button>

      {/* Subheader (Navigation options) */}
      <div id="subheader" className={`nav-links ${isSubheaderVisible ? 'visible' : ''}`}>
        <a href="index.html" className="active">Home</a>
        <a href="varsity.html">Varsity Team</a>
        <a href="recreational.html">Recreational Team</a>
        <a href="coaches.html">Coaches</a>
        <a href="exec.html">Executive Team</a>
        <a href="documents.html">Club Policy</a>
        <a href="sponsors.html">Sponsors</a>
        <a href="outreach.html">Outreach</a>
        <a href="FAQ.html">FAQ</a>
      </div>
    </nav>
  );
}
>>>>>>> 0d42a22 (changes to the main page)

export default Navbar;