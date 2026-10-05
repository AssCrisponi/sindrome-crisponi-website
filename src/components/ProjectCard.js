import React from 'react';
import './projectCard.css';

const ProjectCard = ({ title, description, images = [], variant = 'short' }) => {
  if (variant === 'extended') {
    return (
      <article className="project-card project-card-extended">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        {images.length > 0 && (
          <div className="project-card-images">
            {images.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt || title} className="project-card-image" />
            ))}
          </div>
        )}
      </article>
    );
  }

  return (
    <div className="project-card project-card-short">
      <span className="project-card-title">{title}</span>
      <p className="project-card-description">{description}</p>
    </div>
  );
};

export default ProjectCard;
