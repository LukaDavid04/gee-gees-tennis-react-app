import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="left-side">
          <img
            src="images/geegees_logo_white.png"
            alt="Gee-Gees Logo"
            className="logo-spacing"
            style={{ height: '70px' }}
          />
          <div className="left-text-content">
            <h4 className="fw-bold mb-3 footer-font">UNIVERSITY OF OTTAWA GEE-GEES TENNIS</h4>
            <p className="mb-0 fs-5">
              <i className="fas fa-location-dot location-icon"></i>
              801 King Edward Ave. Ottawa, ON K1N 6N5
            </p>
            <div className="mt-3">
              <a
                href="https://www.instagram.com/geegeestennis/"
                className="text-white logo-spacing-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.tiktok.com/@geegeestennis?_t=8fpthXUQJEc&_r=1"
                className="text-white logo-spacing-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a
                href="mailto:universityofottawatennis@gmail.com"
                className="text-white logo-spacing-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="right-side">
          <a href="https://en.usports.ca/landing/index" target="_blank" rel="noopener noreferrer">
            <img src="images/USports_Logo.png" alt="U Sports" style={{ height: '70px' }} />
          </a>
          <a href="https://oua.ca/landing/index" target="_blank" rel="noopener noreferrer">
            <img src="images/OUA_Logo.png" alt="OUA" style={{ height: '70px' }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
