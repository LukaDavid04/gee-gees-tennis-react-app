import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'images/alex_sasha.png',
    'images/div1_home.png',
    'images/mayssa.png',
    'images/div2_3.png',
    'images/princeton.png',
    'images/OUA_2023team.png',
    'images/OUA_team.png',
  ];

  const intervalRef = useRef(null);

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  }, [images.length]);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [startAutoSlide]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    startAutoSlide();
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    startAutoSlide();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    startAutoSlide();
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${100 * images.length}%`,
          }}
        >
          {images.map((src, index) => (
            <div className="carousel-slide" key={index}>
              <img src={src} alt={`Slide ${index}`} className="carousel-image" />
            </div>
          ))}
        </div>
      </div>

      <button className="arrow left" onClick={prevSlide} aria-label="Previous slide">
        &lt;
      </button>
      <button className="arrow right" onClick={nextSlide} aria-label="Next slide">
        &gt;
      </button>

      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;