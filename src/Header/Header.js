import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="geegee-title">OTTAWA GEE-GEES TENNIS</div>
      <div className="language-options">
        <a href="./fr/indexFR.html">
          <img src="images/fr.png" width="25" height="25" alt="French Language" />
        </a>
        <a href="./index.html">
          <img src="images/en.png" width="25" height="25" alt="English Language" />
        </a>
      </div>
    </header>
  );
}

export default Header;