
import React, { useEffect, useRef } from 'react';
import './ProgressIndicator.css';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const ProgressIndicator = ({ value }) => {
  const progressRef = useRef(null);
  const isVisible = useIntersectionObserver(progressRef, { threshold: 0.1 });
  
  useEffect(() => {
    if (isVisible && progressRef.current) {
      progressRef.current.style.width = `${value}%`;
    }
  }, [isVisible, value]);

  return (
    <div className="progress-container">
      <div className="progress-track">
        <div 
          ref={progressRef}
          className="progress-bar"
          style={{ width: isVisible ? `${value}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressIndicator;