import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="geegee-title">OTTAWA GEE-GEES TENNIS</div>
      <div className="language-options">
        <Link to="/fr">
          <img src="/images/fr.png" width="25" height="25" alt="French Language" />
        </Link>
        <Link to="/">
          <img src="/images/en.png" width="25" height="25" alt="English Language" />
        </Link>
      </div>
    </header>
  );
}

export default Header;