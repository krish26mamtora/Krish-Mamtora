
import React, { useRef } from 'react';
import './Experience.css';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const experienceData = [
  {
    id: 1,
    company: 'Marwadi University',
    position: 'B.Tech ICT Student (Information and Communication Technology)',
    period: '2022 – Present',
    description: 'Pursuing a Bachelor of Technology in ICT at Marwadi University, with active exploration in web development, machine learning, and data science.',
    achievements: [
      'Gained hands-on experience with programming, algorithms, and project development.',
      'Built academic and personal projects to apply classroom learning in real-world scenarios.'
    ]
  }
,  
  {
    id: 2,
    company: 'BizzYatra',
    position: 'PHP Intern',
    period: 'Summer 2024',
    description: 'Completed a summer internship focused on backend web development using PHP. Gained exposure to collaborative development practices, code optimization, and working in a professional environment.',
    achievements: [
      'Contributed to a real-time chat system using PHP and WebSockets, improving live communication features.',
      'Improved skills in debugging, version control, and understanding project workflows.'
    ]
  }
  ,
  {
    id: 3,
    company: 'Shree J.N.V Vidhyalaya',
    position: '12th Grade Completion',
    period: '2022',
    description: 'Completed 12th grade with a focus on Physics, Chemistry, and Mathematics (PCM).',
    achievements: [
      'Achieved 86% in the final board exams (PCM).'
    ]
  },
  {
    id: 4,
    company: 'Shree J.N.V Vidhyalaya',
    position: '10th Grade Completion',
    period: '2020',
    description: 'Completed 10th grade with a solid academic foundation.',
    achievements: [
      'Achieved 72% in the final board exams.'
    ]
  }
];

const Experience = () => {
  const experienceRef = useRef(null);
  const isVisible = useIntersectionObserver(experienceRef, { threshold: 0.1 });
  
  return (
    <section id="experience" className="experience" ref={experienceRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in active' : 'fade-in'}`}>My Experience</h2>
        
        <div className="timeline">
          {experienceData.map((experience, index) => (
            <div 
              key={experience.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${isVisible ? 'fade-in active' : 'fade-in'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-content">
                <div className="timeline-date">{experience.period}</div>
                <h3 className="timeline-title">{experience.position}</h3>
                <h4 className="timeline-company">{experience.company}</h4>
                <p className="timeline-description">{experience.description}</p>
                
                <h5 className="achievements-title">Key Achievements</h5>
                <ul className="achievements-list">
                  {experience.achievements.map((achievement, i) => (
                    <li 
                      key={i} 
                      className="achievement-item"
                      style={{ animationDelay: `${i * 0.1 + 0.3}s` }}
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;