// src/components/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    { title: 'Project 1', description: 'A React-based project contact-manager' },
    { title: 'Project 2', description: 'A React-based project todo-list check' },
    { title: 'Project 3', description: 'A React-based personal portfolio' },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
