
import React, { useRef } from 'react';
import './Experience.css';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const experienceData = [
  {
    id: 1,
    company: 'Marwadi University',
    position: 'ICT - Information and Communication Technology Student',
    period: '2022 - Present',
    description: 'Currently pursuing a degree in Information and Communication Technology (ICT) at Marwadi University, with 2 years of coursework completed and in the 6th semester.',
    achievements: [
      'Completed core courses in programming, algorithms, and data structures.',
      'Gained hands-on experience with various technologies and projects.'
    ]
  },
  {
    id: 2,
    company: 'BizzYatra',
    position: 'PHP Intern',
    period: 'Summer 2024',
    description: 'Completed a PHP development internship to enhance web development skills.',
    achievements: [
      'Developed web applications using PHP and MySQL.',
      'Learned and applied basic backend development techniques.'
    ]
  },
  {
    id: 3,
    company: 'Shree J.N.V Vidhyalaya',
    position: '12th Grade Completion (PCM)',
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