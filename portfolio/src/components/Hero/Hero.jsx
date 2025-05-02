
import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const phrases = [
    "Full-Stack Web Developer",
    "Quick Learner & Adapter",
    "Problem Solver"
  ];
    const currentPhraseIndex = useRef(0);
  const currentLetterIndex = useRef(0);
  const isDeleting = useRef(false);
  const canvasRef = useRef(null);
  const profileRef = useRef(null);
  
  // Typewriter effect
  useEffect(() => {
    const typeSpeed = isDeleting.current ? 50 : 100;
    
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex.current];
      
      if (isDeleting.current) {
        setTypedText(currentPhrase.substring(0, currentLetterIndex.current - 1));
        currentLetterIndex.current -= 1;
        
        if (currentLetterIndex.current === 0) {
          isDeleting.current = false;
          currentPhraseIndex.current = (currentPhraseIndex.current + 1) % phrases.length;
        }
      } else {
        setTypedText(currentPhrase.substring(0, currentLetterIndex.current + 1));
        currentLetterIndex.current += 1;
        
        if (currentLetterIndex.current === currentPhrase.length) {
          isDeleting.current = true;
          setTimeout(() => {}, 1500); // Pause at the end of the word
        }
      }
    };
    
    const typeInterval = setTimeout(type, typeSpeed);
    return () => clearTimeout(typeInterval);
  }, [typedText]);

  // Particles background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(window.innerWidth / 10);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, 0.5)`
        });
      }
    };
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Connect particles that are close
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(150, 150, 150, ${0.2 - distance / 500})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
        
        // Update particle position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Boundary check
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      }
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawParticles();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Profile image magnetic effect
  useEffect(() => {
    const profileEl = profileRef.current;
    if (!profileEl) return;
    
    const handleMouseMove = (e) => {
      const { left, top, width, height } = profileEl.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      const centerX = width / 2;
      const centerY = height / 2;
      
      const moveX = (x - centerX) / 15;
      const moveY = (y - centerY) / 15;
      
      profileEl.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX / 10}deg)`;
    };
    
    const handleMouseLeave = () => {
      profileEl.style.transform = 'translate(0, 0) rotate(0deg)';
    };
    
    profileEl.addEventListener('mousemove', handleMouseMove);
    profileEl.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      profileEl.removeEventListener('mousemove', handleMouseMove);
      profileEl.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="particles-canvas"></canvas>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm <span className="accent-text">Krish Mamtora</span></h1>
          <div className="hero-subtitle">
            <span className="typewriter">{typedText}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-description">
          I 
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>
        
        <div className="hero-image-container">
          <div className="hero-image-wrapper" ref={profileRef}>
            <div className="profile-image">
              <img 
                src="../../../profileimg.jpeg" 
                alt="Krish Mamtora" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;