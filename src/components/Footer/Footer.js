import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="text-center text-white" style={{ backgroundColor: '#ebe9e9' }}>
      <div className="container pt-3">
        <h6 style={{ color: '#4E0B12' }}>Connect with us!</h6>
        <section className="mb-3">
          <a className="btn btn-link btn-floating btn-lg text-dark m-1 social-media-icon" href="https://www.instagram.com/geegeestennis/">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="btn btn-link btn-floating btn-lg text-dark m-1 social-media-icon" href="https://www.tiktok.com/@geegeestennis">
            <i className="fab fa-tiktok"></i>
          </a>
          <a className="btn btn-link btn-floating btn-lg text-dark m-1 social-media-icon" href="mailto:universityofottawatennis@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </section>
      </div>
      <div className="d-flex align-items-center justify-content-center p-3" style={{ backgroundColor: '#4E0B12' }}>
        <img className="mr-2" src="images/geegees_logo_white.png" width="35" height="30" alt="" />
        University of Ottawa Tennis Club
      </div>
    </footer>
  );
}

export default Footer;
