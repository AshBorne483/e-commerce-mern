import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MainCard = ({ img = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const limitedImg = img.slice(0, 10);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === limitedImg.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  useEffect(() => {
    if (limitedImg.length > 1) {
      startAutoSlide();
    }
    return () => clearInterval(intervalRef.current);
  }, [limitedImg.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? limitedImg.length - 1 : currentIndex - 1
    );
    startAutoSlide();
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === limitedImg.length - 1 ? 0 : currentIndex + 1
    );
    startAutoSlide();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    startAutoSlide();
  };

  if (!limitedImg || limitedImg.length === 0) {
    return (
      <div
        className={`w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg`}
      >
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div className="relative flex gap-1 overflow-hidden">
      {/* Image Container */}
      <div className="relative h-[400px] w-[850px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {limitedImg.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              {image.url ? (
                <img
                  src={image.url}
                  alt={image.title || `Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
                  <span className="text-white text-lg font-semibold">
                    {image.title || `Image ${index + 1}`}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Image Title */}
        {limitedImg[currentIndex] && (
          <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
            {limitedImg[currentIndex].title}
          </div>
        )}

        {/* Navigation Arrows */}
        {limitedImg.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Indicators */}
        {limitedImg.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {limitedImg.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white bg-opacity-50 hover:bg-opacity-75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Image Counter */}
        {limitedImg.length > 1 && (
          <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
            {currentIndex + 1} / {limitedImg.length}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <div className="h-[198px] w-[452px] bg-blue-500"></div>
        <div className="h-[198px] w-[452px] bg-gray-500"></div>
      </div>
    </div>
  );
};

export default MainCard;
