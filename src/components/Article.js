import React, { useState } from 'react';
import './article.css';

const Article = ({ title, image, description, pdf }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const visual = image && <img src={image.src} alt={image.alt || title} className="article-card-image" />;

  return (
    <article className="article-card">
      <h3 className="article-card-title">{title}</h3>
      {visual &&
        (pdf ? (
          <button
            type="button"
            className="article-card-image-link"
            onClick={() => setIsExpanded(true)}
            aria-label={pdf.label || title}
          >
            {visual}
          </button>
        ) : (
          visual
        ))}
      <div className="article-card-body">
        {description && <p className="article-card-description">{description}</p>}
        {pdf && !image && (
          <a href={pdf.src} target="_blank" rel="noopener noreferrer" className="article-card-pdf-link">
            {pdf.label || 'PDF'}
          </a>
        )}
      </div>

      {isExpanded && (
        <div className="article-lightbox" onClick={() => setIsExpanded(false)}>
          <img src={image.src} alt={image.alt || title} className="article-lightbox-image" />
        </div>
      )}
    </article>
  );
};

export default Article;
