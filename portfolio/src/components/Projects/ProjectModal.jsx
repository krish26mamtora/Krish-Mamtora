
import React, { useRef, useEffect } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  
  // Click outside to close
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);
  
  // Handle tab trap for accessibility
  useEffect(() => {
    const modal = modalRef.current;
    
    if (!modal) return;
    
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };
    
    document.addEventListener('keydown', handleTabKey);
    firstElement.focus();
    
    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-container" ref={modalRef}>
        <button className="modal-close-button" onClick={onClose}>×</button>
        
        <div className="modal-content">
          <div className="modal-image-container">
            <img src={project.image} alt={project.title} className="modal-image" />
          </div>
          
          <div className="modal-info">
            <h3 className="modal-title">{project.title}</h3>
            
            <div className="modal-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="modal-tag">{tag}</span>
              ))}
            </div>
            
            <div className="modal-description">
              <p>{project.fullDescription}</p>
            </div>
            
            <div className="modal-links">
              <a href={project.demoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.repoUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
