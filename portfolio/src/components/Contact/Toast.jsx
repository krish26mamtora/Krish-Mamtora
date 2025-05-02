
import React, { useEffect } from 'react';
import './Toast.css';

const Toast = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast ${type}`}>
      <div className="toast-content">
        <span className="toast-icon">
          {type === 'success' ? '✅' : '❌'}
        </span>
        <p className="toast-message">{message}</p>
      </div>
      <button className="toast-close" onClick={onClose}>×</button>
    </div>
  );
};

export default Toast;
