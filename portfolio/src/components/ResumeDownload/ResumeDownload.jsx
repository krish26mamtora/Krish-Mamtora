import React from 'react';
import './ResumeDownload.css';

const ResumeDownload = () => {
  const handleDownload = () => {
    const downloadBtn = document.getElementById('download-btn');
    downloadBtn.textContent = 'Downloading...';
    downloadBtn.disabled = true;

    const link = document.createElement('a');
    link.href = '/resume.pdf'; 
    link.download = 'resume.pdf';
    link.click();

    setTimeout(() => {
      downloadBtn.textContent = 'Downloaded!';
      setTimeout(() => {
        downloadBtn.textContent = 'Download Resume';
        downloadBtn.disabled = false;
      }, 1500);
    }, 1000);
  };

  return (
    <section className="resume">
      <div className="container">
        <div className="resume-container">
          <div className="resume-content">
            <h3>Download My Resume</h3>
            <p>
              Get a comprehensive overview of my skills, experience, and projects in a downloadable PDF format.
            </p>
            <button 
              id="download-btn"
              className="btn btn-primary download-btn" 
              onClick={handleDownload}
            >
              Download Resume
            </button>
          </div>
          
          <div className="resume-preview">
            <div className="resume-paper">
              <div className="resume-header">
                <h4>Krish Mamtora</h4>
                <p>Frontend Developer / Full Stack Enthusiast</p>
              </div>
              
              <div className="resume-section">
                <h5>Experience</h5>
                <div className="resume-line"></div>
              </div>
              
              <div className="resume-section">
                <h5>Skills</h5>
                <div className="resume-line"></div>
              </div>
              
              <div className="resume-section">
                <h5>Education</h5>
                <div className="resume-line"></div>
              </div>
              
              <div className="resume-section">
                <h5>Projects</h5>
                <div className="resume-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownload;
