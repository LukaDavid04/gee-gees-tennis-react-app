import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Carousel.css'; // Optional: Custom CSS for styling

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

  const intervalRef = useRef(null); // Reference for storing the interval ID

  // Memoize the startAutoSlide function to prevent the warning
  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear existing interval before starting a new one
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Set interval to 3 seconds
  }, [images.length]);

  // Set up auto-sliding on mount and reset on unmount
  useEffect(() => {
    startAutoSlide(); // Start the auto-slide when the component mounts

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Clean up interval on unmount
      }
    };
  }, [startAutoSlide]);

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    startAutoSlide(); // Reset the auto-slide timer when the user clicks
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    startAutoSlide(); // Reset the auto-slide timer when the user clicks
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
    startAutoSlide(); // Reset the auto-slide timer when the user clicks an indicator
  };

  return (
    <div className="carousel-container">
      {/* Carousel Image */}
      <div className="carousel">
        <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      </div>

      {/* Arrows to change slides */}
      <button className="arrow left" onClick={prevSlide} aria-label="Previous slide">
        &lt;
      </button>
      <button className="arrow right" onClick={nextSlide} aria-label="Next slide">
        &gt;
      </button>

      {/* Indicators */}
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;