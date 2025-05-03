
import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const projectsData = [
  {
    id: 1,
    title: 'Real-Time Chatting Platform',
    description: 'A PHP-based real-time chatting and social media platform with WebSockets, user authentication, friend system, and live feed.',
    image: '/chat1.avif', 
    tags: ['PHP', 'WebSockets', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    demoUrl: '#', // Replace with actual demo link
    repoUrl: 'https://github.com/krish26mamtora/ChattingWebsite_PHP', // Replace with actual GitHub repo
    fullDescription: 'A chatting and social media platform built with PHP that lets users chat in real time. It uses WebSockets to ensure messages are delivered instantly. You can sign up with email, send friend requests, and create posts with text or images. There’s also a live feed where you can like, comment, and interact with other users posts.'
  }
,  
{
  id: 2,
  title: 'Student Strength Analysis System',
  description: 'A web and mobile-based system for analyzing student performance across academic, co-curricular, and extracurricular activities.',
  image: '/stu2.png',
  tags: ['MySQL', 'React', 'Flutter','Express.js', 'Node.js', 'Data Visualization'],
  demoUrl: '#',
  repoUrl: 'https://github.com/Harshdoshi1/HCD-project',
  fullDescription: 'This system helps track and evaluate student performance across academics, co-curricular, and extracurricular activities. Whether it’s your exam scores, participation in hackathons, sports, or even internships, everything is weighed by the Head of Department to give an overall score. Students, parents, faculty, and coordinators can access the platform via web or mobile to track progress and understand where improvements are needed.'
}
  ,
  {
    id: 3,
    title: 'Complaint Management System (CMS)',
    description: 'A PHP-based web platform for streamlined complaint handling with real-time updates, admin oversight, and detailed reporting.',
    image: '/comp1.jpg', // Replace with your own image if needed
    tags: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
    demoUrl: '#', // Replace with actual demo link
    repoUrl: 'https://github.com/krish26mamtora/CMS_PHP_PROJECT', // Replace with actual GitHub repo
    fullDescription: 'This web platform makes managing complaints super easy. Whether you’re submitting a complaint or tracking its status, the system keeps you in the loop with real-time updates. Admins can oversee and assign complaints, and managers can resolve them. The system is built with PHP and MySQL, so it’s efficient, and it helps make the whole complaint-handling process more transparent.'
  }
, 
{
  id: 4,
  title: 'Cricket Shot Classification',
  description: 'An ML project to classify cricket shots using short video clips and body landmark detection.',
  image: '/shot1.png',
  tags: ['Python', 'MediaPipe', 'Random Forest', 'ML'],
  demoUrl: '#',
  repoUrl: 'https://github.com/krish26mamtora/ML-Cricket-Shot-Classification',
  fullDescription: 'This project uses machine learning to classify different types of cricket shots, such as pull, drive, or sweep, using 2D images of the batsman. By analyzing the body movements in the images with MediaPipe, the system detects key body landmarks and maps those movements to specific shots. Various machine learning models were tested, and Random Forest provided the most accurate results for classifying the shots.'
}
,
// {
//   id: 5,
//   title: 'Real Estate Broker CRM',
//   description: 'A web-based CRM system for managing clients, properties, visit schedules, and rental management.',
//   image: 'https://images.unsplash.com/photo-1530231760619-bd2d7de0f8d2?auto=format&fit=crop&w=1500&q=80',
//   tags: ['Spring Boot', 'React', 'Java', 'Real Estate', 'CRM'],
//   demoUrl: '#',
//   repoUrl: '#',
//   fullDescription: 'This web-based CRM system is designed for retail real estate brokers to manage client information, properties, visit schedules, and rental management. Built using Spring Boot for the backend and React for the frontend, the platform allows brokers to add and manage property listings, schedule visits, and handle rental agreements with integrated notification alerts. The system also supports user requirement matching, ensuring efficient client-property pairing. The CRM focuses on internal management without the need for client dashboards or reviews.'
// }
,
{
  id: 5,
  title: 'Number System Conversion Application',
  description: 'A Java-based application for converting numbers between binary, octal, decimal, and hexadecimal number systems.',
  image: '/num2.jpeg',
  tags: ['Java', 'Swing', 'Number Systems', 'Conversion'],
  demoUrl: '#',
  repoUrl: 'https://github.com/krish26mamtora/Java-Number-System-Converter',
  fullDescription: 'This simple app lets you convert numbers between different number systems—binary, octal, decimal, and hexadecimal. Built with Java Swing, it provides an easy-to-use interface where you can select the system you’re working with and convert numbers seamlessly. Plus, it helps you understand the concepts behind number systems, making it a great learning tool for both beginners and advanced users.'
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