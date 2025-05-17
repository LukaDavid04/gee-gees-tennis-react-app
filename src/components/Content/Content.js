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
        Never picked up a tennis racket before? Worried you’re not good enough to join? No problem! The UOTC is composed of three divisions tailored to different players’ tennis levels; Division 1, Division 2, and Division 3. We hold semester-based tryouts for new students where our dedicated coaching staff will observe your tennis game and determine which division best suits your level of play.
      </p>
      <blockquote className="blockquote">
        <p className="mb-0">
          “Our mission is to promote the sport of tennis by getting people to pick up a tennis racket and learn to play the sport we love. With a thriving and passionate tennis community, we are committed to supporting students in their journey to discover and embrace the game of tennis.”
        </p>
        <footer className="blockquote-footer">
          <cite>- UOTC Executives</cite>
        </footer>
      </blockquote>

      <p className="content-container extra-text">
        We value greatly the rich diversity within our team, as the tennis community attracts individuals from a wide range of cultural and personal backgrounds. This fosters a lively and inclusive environment that enhances the experience for all. Moreover, we celebrate the bilingual nature of our school, ensuring that anyone who speaks French is warmly welcomed within our club.
      </p>
      
      <h3 className="text-center"><br />About the University of Ottawa</h3>
      <div className="uo-container">
        <div className="text-container">
          <p>The University of Ottawa is the largest bilingual (English-French) university in the world. Located at the heart of Canada’s capital, we have ready access to the great institutions of our country.</p>
          <p>Our advances in social sciences, health, engineering, science and the humanities make uOttawa a unique place to learn, grow and excel.</p>
        </div>
        <div className="iframe-container mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11201.26887632515!2d-75.6831329!3d45.4231064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x188a59c3622fdbae!2sUniversity%20of%20Ottawa!5e0!3m2!1sen!2sca!4v1593811364278!5m2!1sen!2sca"
            width="100%"
            height="200"
            frameBorder="0"
            className="iframe"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="University of Ottawa Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Content;
