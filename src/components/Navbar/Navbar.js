import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isSubheaderVisible, setIsSubheaderVisible] = useState(false);

  const navigationBar = () => {
    setIsSubheaderVisible(!isSubheaderVisible);
  };

  return (
    <nav className="navbar">
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

export default Navbar;