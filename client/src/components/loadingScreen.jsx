import React, { useState, useEffect } from "react";

const LoadingScreen = ({ isLoading, message, subMessage, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState("");

  // Simulate loading progress
  useEffect(() => {
    if (!isLoading) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          if (onComplete) {
            setTimeout(onComplete, 500);
          }
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, [isLoading, onComplete]);

  // Animate dots
  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(dotsInterval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern animate-pulse"></div>
      </div>

      <div className="text-center text-white relative z-10">
        {/* Logo/Brand Area */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            E-Commerce MERN App
          </h1>
        </div>

        {/* Loading Animation */}
        <div className="mb-6">
          <div className="relative w-64 h-2 bg-white bg-opacity-20 rounded-full mx-auto mb-4 overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute right-0 top-0 h-full w-8 bg-white bg-opacity-30 animate-pulse"></div>
            </div>
          </div>
          {/* Number Indicator */}
          <div className="text-sm text-blue-200 mb-2">
            {Math.round(Math.min(progress, 100))}%
          </div>
        </div>

        {/* Loading Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            {message}
            {dots}
          </h2>
          <p className="text-blue-200 text-sm max-w-md mx-auto">{subMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
