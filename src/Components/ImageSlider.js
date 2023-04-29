import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [currentImageIndex, images.length]);

  const handleNextClick = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const handlePrevClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slider-nav">
        <button className="prev" onClick={handlePrevClick}>
          &#10094;
        </button>
        <button className="next" onClick={handleNextClick}>
          &#10095;
        </button>
      </div>
      <div className="slider-image">
        <img src={images[currentImageIndex]} alt="slider" />
      </div>
    </div>
  );
};

export default Slider;
