import React from 'react';
import './LoadingAnimation.css';

const LoadingAnimation = () => {
  return (
    <div className="load loader-overlay">
      <div className="loader"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default LoadingAnimation;
