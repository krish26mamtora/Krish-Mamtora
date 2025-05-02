
import React, { useRef, useState } from 'react';
import './Skills.css';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver.jsx';
import { Card, CardContent } from '../ui/card.jsx';
import {
  Code, CodeSquare, Coffee, Database, FileCode,
  Figma, Github, GitBranch, Globe, BarChart,
  UsersRound, Clock, Brain, MessageSquare, Lightbulb,
  Users, Briefcase, Cloud, Package, SearchCheck
} from 'lucide-react';

const skillsData = {
  technical: [
    { name: 'C', icon: <Code size={20} /> },
    { name: 'C++', icon: <CodeSquare size={20} /> },
    { name: 'Java', icon: <Coffee size={20} /> },
    { name: 'Python', icon: <FileCode size={20} /> },
    { name: 'PHP', icon: <Globe size={20} /> },
    { name: 'HTML', icon: <Code size={20} /> },
    { name: 'CSS', icon: <FileCode size={20} /> },
    { name: 'JavaScript', icon: <FileCode size={20} /> },
    { name: 'SQL', icon: <Database size={20} /> },
   
    { name: 'React', icon: <Code size={20} /> },
    { name: 'Node.js', icon: <FileCode size={20} /> },
    { name: 'Express', icon: <Code size={20} /> },
    { name: 'MongoDB', icon: <Database size={20} /> },
    { name: 'Git', icon: <GitBranch size={20} /> }
  ],
  software: [
    { name: 'Tableau', icon: <BarChart size={20} /> },
    { name: 'RStudio', icon: <FileCode size={20} /> },
    { name: 'Multisim', icon: <CodeSquare size={20} /> },
    { name: 'MicrochipStudio', icon: <CodeSquare size={20} /> },
    { name: 'Deeds', icon: <FileCode size={20} /> },
    { name: 'GitHub', icon: <Github size={20} /> },
    { name: 'VS Code', icon: <Code size={20} /> },
    { name: 'Firebase', icon: <Database size={20} /> },
    { name: 'Postman', icon: <Code size={20} /> },
  ],
  soft: [
    { name: 'Problem-Solving', icon: <Brain size={20} /> },
    { name: 'Teamwork', icon: <UsersRound size={20} /> },
    { name: 'Adaptability', icon: <Lightbulb size={20} /> },
    { name: 'Time Management', icon: <Clock size={20} /> },
    { name: 'Work Ethic', icon: <Briefcase size={20} /> },
    { name: 'Critical Thinking', icon: <Brain size={20} /> },
    { name: 'Creativity', icon: <Lightbulb size={20} /> },
    { name: 'Attention to Detail', icon: <SearchCheck size={20} /> }
  ]
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const skillsRef = useRef(null);
  const isVisible = useIntersectionObserver(skillsRef, { threshold: 0.1 });

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const renderSkillsList = (skills) => {
    return (
      <div className="skills-list">
        {skills.map((skill, index) => (
          <Card
            key={skill.name}
            className={`skill-card ${isVisible ? 'fade-in active' : 'fade-in'}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <CardContent className="skill-card-content">
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in active' : 'fade-in'}`}>My Skills</h2>

        <div className={`skills-categories ${isVisible ? 'fade-in active' : 'fade-in'}`}>
          <button
            className={`category-button ${activeCategory === 'technical' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('technical')}
          >
            Programming Languages
          </button>
          <button
            className={`category-button ${activeCategory === 'software' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('software')}
          >
            Software & Tools
          </button>
          <button
            className={`category-button ${activeCategory === 'soft' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('soft')}
          >
            Soft Skills
          </button>
        </div>

        <div className="skills-content">
          <h3 className="skills-category-title">
            {activeCategory === 'technical' ? 'TECHNICAL SKILLS' :
              activeCategory === 'software' ? 'SOFTWARE & TOOLS' : 'SOFT SKILLS'}
          </h3>
          {renderSkillsList(skillsData[activeCategory])}
        </div>
      </div>
    </section>
  );
};

export default Skills;