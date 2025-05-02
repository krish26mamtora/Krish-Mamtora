
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">DevPortfolio</span>
          </div>
          
          <nav className="footer-nav">
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          
          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <span>LinkedIn</span>
            </a>
            <a href="#" className="social-icon" aria-label="GitHub">
              <span>GitHub</span>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <span>Twitter</span>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} John Doe. All rights reserved.</p>
          <p>Built with React and vanilla CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
