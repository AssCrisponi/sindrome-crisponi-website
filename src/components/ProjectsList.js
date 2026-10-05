import React from 'react';
import ProjectCard from './ProjectCard';
import './projectCard.css';

const ProjectsList = ({ projects, variant = 'short' }) => (
  <div className={`projects-list projects-list-${variant}`}>
    {projects.map((project, index) => (
      <ProjectCard key={index} variant={variant} {...project} />
    ))}
  </div>
);

export default ProjectsList;
