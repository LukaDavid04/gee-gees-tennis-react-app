import React, { useState, useEffect, useRef, useCallback } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import './Carousel.css';
=======
import './Carousel.css'; // Optional: Custom CSS for styling
>>>>>>> 0d42a22 (changes to the main page)
=======
import './Carousel.css';
>>>>>>> 809056f (these are all the complete changes to the HOME)

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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  const intervalRef = useRef(null); // Reference for storing the interval ID
=======
  const intervalRef = useRef(null);
>>>>>>> 809056f (these are all the complete changes to the HOME)

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
<<<<<<< HEAD
    startAutoSlide(); // Reset the auto-slide timer when the user clicks an indicator
>>>>>>> 0d42a22 (changes to the main page)
=======
    startAutoSlide();
>>>>>>> 809056f (these are all the complete changes to the HOME)
  };

  return (
    <div className="carousel-container">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 809056f (these are all the complete changes to the HOME)
      <div className="carousel-track-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index}`} className="carousel-image" />
          ))}
        </div>
<<<<<<< HEAD
      </div>

=======
      {/* Carousel Image */}
      <div className="carousel">
        <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      </div>

      {/* Arrows to change slides */}
>>>>>>> 0d42a22 (changes to the main page)
=======
      </div>

>>>>>>> 809056f (these are all the complete changes to the HOME)
      <button className="arrow left" onClick={prevSlide} aria-label="Previous slide">
        &lt;
      </button>
      <button className="arrow right" onClick={nextSlide} aria-label="Next slide">
        &gt;
      </button>

<<<<<<< HEAD
<<<<<<< HEAD
=======
      {/* Indicators */}
>>>>>>> 0d42a22 (changes to the main page)
=======
>>>>>>> 809056f (these are all the complete changes to the HOME)
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
<<<<<<< HEAD
<<<<<<< HEAD
=======
            aria-label={`Go to slide ${index + 1}`}
>>>>>>> 0d42a22 (changes to the main page)
=======
>>>>>>> 809056f (these are all the complete changes to the HOME)
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;