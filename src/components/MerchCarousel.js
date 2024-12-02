import React, { useState } from 'react';

const MerchCardCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null; // No images to display
  }

  const totalImages = images.length;

  // navigation control logic for carousel
  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div className="carousel">
      {/* Image Container */}
      <div className=" h-full flex items-center justify-center relative">
        <img
          src={images[currentIndex]}/>
      </div>

      {/* Navigation Controls styles */}
      <button
        onClick={goToPreviousImage}
        className=" carousel-controls absolute left-0 transform bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 focus:outline-none"
        style={{ marginLeft: '10px' }}
      >
        &#9664; {/* Left arrow symbol */}
      </button>
      <button
        onClick={goToNextImage}
        className=" carousel-controls absolute right-0 transform bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 focus:outline-none"
        style={{ marginRight: '10px' }}
      >
        &#9654; {/* Right arrow symbol */}
      </button>

      {/* Dots index Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-900' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MerchCardCarousel;
