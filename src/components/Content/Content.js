import React from 'react';
import './Content.css';

function Content() {
  return (
    <div className="content-container">
      <h3 className="text-center mt-5">About Us</h3>
      <p>
        The University of Ottawa Tennis Club (UOTC) is the bilingual tennis club of the University of Ottawa. We are open to all current students of the University of Ottawa.
      </p>
      <p>
        Never picked up a tennis racket before? No problem! The UOTC is composed of three divisions tailored to different players' tennis levels...
      </p>
      <blockquote className="blockquote">
        <p className="mb-0">“Our mission is to promote the sport of tennis by getting people to pick up a tennis racket and learn to play the sport we love...”</p>
        <footer className="blockquote-footer">
          <cite>UOTC Executives</cite>
        </footer>
      </blockquote>

      <h3 className="text-center"><br />About the University of Ottawa</h3>
      <div className="uo-container">
        <div className="text-container">
          <p>The University of Ottawa is the largest bilingual (English-French) university in the world...</p>
        </div>
        <div className="iframe-container mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%" height="200" frameborder="0" allowfullscreen=""
            aria-hidden="false" tabindex="0" title="University of Ottawa Location"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Content;
