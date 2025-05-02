import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Scroll spy functionality
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.pageYOffset;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (
          scrollPosition >= sectionTop && 
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <span className="logo-text">Krish Mamtora</span>
        </div>
        
        <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className={activeSection === 'home' ? 'active' : ''}>
              <a href="#home" onClick={() => handleNavClick('home')}>Home</a>
            </li>
            <li className={activeSection === 'projects' ? 'active' : ''}>
              <a href="#projects" onClick={() => handleNavClick('projects')}>Projects</a>
            </li>
            <li className={activeSection === 'experience' ? 'active' : ''}>
              <a href="#experience" onClick={() => handleNavClick('experience')}>Experience</a>
            </li>
            <li className={activeSection === 'skills' ? 'active' : ''}>
              <a href="#skills" onClick={() => handleNavClick('skills')}>Skills</a>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <a href="#contact" onClick={() => handleNavClick('contact')}>Contact</a>
            </li>
          </ul>
          
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;