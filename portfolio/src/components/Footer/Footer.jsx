
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">Krish Mamtora</span>
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
            <a href="https://www.linkedin.com/in/krish-mamtora-455b97252/" target="_blank"  className="social-icon" aria-label="LinkedIn">
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/krish26mamtora"  target="_blank" className="social-icon" aria-label="GitHub">
              <span>GitHub</span>
            </a>
            <a href="https://medium.com/@krishmamtora26" target="_blank"  className="social-icon" aria-label="Twitter">
              <span>Medium</span>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Krish Mamtora. All rights reserved.</p>
          <p>Built with React and vanilla CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
