import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="text-center text-white" style={{ backgroundColor: '#ebe9e9' }}>
      <div className="container pt-3">
        <h6 className="connect-heading">Connect with us!</h6>
        <section className="social-icons">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1 social-media-icon"
            href="https://www.instagram.com/geegeestennis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1 social-media-icon"
            href="https://www.tiktok.com/@geegeestennis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-tiktok"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1 social-media-icon"
            href="mailto:universityofottawatennis@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </section>
      </div>
      <div className="footer-bottom">
        <img src="images/geegees_logo_white.png" width="40" height="35" alt="" />
        University of Ottawa Tennis Club
      </div>
    </footer>
  );
}
export default Footer;
