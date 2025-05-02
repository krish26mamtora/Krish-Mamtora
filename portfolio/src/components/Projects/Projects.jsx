
import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const projectsData = [
  {
    id: 1,
    title: 'Real-Time Chatting Platform',
    description: 'A PHP-based real-time chatting and social media platform with WebSockets, user authentication, friend system, and live feed.',
    image: 'https://images.unsplash.com/photo-1624953587684-56f3b3b0e3a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80', // Replace with your own image if needed
    tags: ['PHP', 'WebSockets', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    demoUrl: '#', // Replace with actual demo link
    repoUrl: '#', // Replace with actual GitHub repo
    fullDescription: 'This real-time chatting and social media platform is built using PHP and WebSockets to enable low-latency communication between users. It features secure user registration and login with email verification, a friend management system (including search and friend requests), and dynamic post creation with text and image uploads. Users can like and comment on posts in a real-time updated feed. The frontend is crafted with HTML, CSS, JavaScript, and Bootstrap, while PHP handles backend logic and WebSocket server communication.'
  }
,  
{
  id: 2,
  title: 'Student Strength Analysis System',
  description: 'A web and mobile-based system for analyzing student performance across academic, co-curricular, and extracurricular activities.',
  image: 'https-e10032774350?auto=format&fit=crop&w=1500&q=80',
  tags: ['MySQL', 'React', 'Flutter','Express.js', 'Node.js', 'Data Visualization'],
  demoUrl: '#',
  repoUrl: '#',
  fullDescription: 'This student analysis system evaluates student performance based on academic scores, co-curricular, and extracurricular activities. Academic metrics include ESE, IA, CSE, TW, Viva, and faculty feedback, while activity-based inputs include hackathons, internships, events, patents, and sports. Each component is weighted by the HOD to calculate overall strength. The platform supports role-based access for students, parents, faculty, class coordinators, and the HOD. Students and parents can track progress via a web or mobile'
}
  ,
  {
    id: 3,
    title: 'Complaint Management System (CMS)',
    description: 'A PHP-based web platform for streamlined complaint handling with real-time updates, admin oversight, and detailed reporting.',
    image: 'https://images.unsplash.com/photo-1605902711622-cfb43c44367f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80', // Replace with your own image if needed
    tags: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
    demoUrl: '#', // Replace with actual demo link
    repoUrl: '#', // Replace with actual GitHub repo
    fullDescription: 'The Complaint Management System (CMS) is a PHP-based platform designed to enhance complaint handling within organizations. It supports user-friendly complaint submissions, real-time status updates, and centralized admin control. Admins review and assign complaints to relevant managers who investigate and resolve the issues. Users receive timely updates, while admins can track performance through comprehensive reports. The system improves transparency, accountability, and user satisfaction by streamlining the entire complaint workflow. Built using PHP and JavaScript for the backend, with a MySQL database and a clean HTML/CSS frontend.'
  }
, 
{
  id: 4,
  title: 'Cricket Shot Classification',
  description: 'An ML project to classify cricket shots using short video clips and body landmark detection.',
  image: 'https://images.unsplash.com/photo-1602481943882-349918f77d8c?auto=format&fit=crop&w=1500&q=80',
  tags: ['Python', 'MediaPipe', 'Random Forest', 'ML', 'OpenCV'],
  demoUrl: '#',
  repoUrl: '#',
  fullDescription: 'This machine learning project classifies different cricket shots (e.g., pull, drive, sweep) using 1–2 second video clips of batsmen. MediaPipe is used to extract 3D body landmarks (x, y, z coordinates), which serve as input features. Various models were tested, including Logistic Regression, SVM, Decision Tree, KNN, and LSTM, with Random Forest achieving the highest accuracy. The system processes video frames, detects poses, and maps body movement patterns to specific shot types, enabling accurate and fast classification.'
}
,
{
  id: 5,
  title: 'Real Estate Broker CRM',
  description: 'A web-based CRM system for managing clients, properties, visit schedules, and rental management.',
  image: 'https://images.unsplash.com/photo-1530231760619-bd2d7de0f8d2?auto=format&fit=crop&w=1500&q=80',
  tags: ['Spring Boot', 'React', 'Java', 'Real Estate', 'CRM'],
  demoUrl: '#',
  repoUrl: '#',
  fullDescription: 'This web-based CRM system is designed for retail real estate brokers to manage client information, properties, visit schedules, and rental management. Built using Spring Boot for the backend and React for the frontend, the platform allows brokers to add and manage property listings, schedule visits, and handle rental agreements with integrated notification alerts. The system also supports user requirement matching, ensuring efficient client-property pairing. The CRM focuses on internal management without the need for client dashboards or reviews.'
}
,
{
  id: 6,
  title: 'Number System Conversion Application',
  description: 'A Java-based application for converting numbers between binary, octal, decimal, and hexadecimal number systems.',
  image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc5e5f?auto=format&fit=crop&w=1500&q=80',
  tags: ['Java', 'Swing', 'Number Systems', 'Conversion'],
  demoUrl: '#',
  repoUrl: '#',
  fullDescription: 'This Java-based application allows users to easily convert numbers between binary, octal, decimal, and hexadecimal systems. The platform offers an interactive user interface built with Java Swing, where users can select input and output number systems for seamless conversions. In addition to conversions, the app provides educational guidance on key concepts like radix, base, and step-by-step conversion methods. Ideal for both beginners and advanced learners, this tool helps users understand the underlying logic behind number system conversions.'
}

];

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const projectsRef = useRef(null);
  const isVisible = useIntersectionObserver(projectsRef, { threshold: 0.1 });
  
  // Get all unique tags
  const allTags = [...new Set(projectsData.flatMap(project => project.tags))];
  
  // Filter projects based on selected tags
  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter(project => 
        selectedTags.some(tag => project.tags.includes(tag))
      );
      setFilteredProjects(filtered);
    }
  }, [selectedTags]);
  
  // Toggle tag selection
  const handleTagClick = (tag) => {
    setSelectedTags(prev => {
      if (prev.includes(tag)) {
        return prev.filter(t => t !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };
  
  // Open project modal
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  // Close project modal
  const closeProjectModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeProjectModal();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in active' : 'fade-in'}`}>My Projects</h2>
        
        <div className={`project-tags ${isVisible ? 'fade-in active' : 'fade-in'}`}>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`tag-button ${selectedTags.includes(tag) ? 'active' : ''}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${isVisible ? 'fade-in active' : 'fade-in'}`} 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button 
                    className="view-project-button"
                    onClick={() => openProjectModal(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags-container">
                  {project.tags.map(tag => (
                    <span key={`${project.id}-${tag}`} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {isModalOpen && selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeProjectModal} 
        />
      )}
    </section>
  );
};

export default Projects;