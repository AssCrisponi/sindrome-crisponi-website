import React, { useState } from 'react';
import './article.css';

const Article = ({ title, titleHref, image, description, pdf }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const visual = image && (
    <img src={image.src} alt={image.alt || title} className="article-card-image" loading="lazy" />
  );

  const closeLightbox = () => {
    setIsExpanded(false);
    setIsZoomed(false);
  };

  return (
    <article className="article-card">
      <h3 className="article-card-title">
        {titleHref ? (
          <a href={titleHref} className="article-card-title-link">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      {visual && (
        <button
          type="button"
          className="article-card-image-link"
          onClick={() => setIsExpanded(true)}
          aria-label={title}
        >
          {visual}
        </button>
      )}
      <div className="article-card-body">
        {description && <p className="article-card-description">{description}</p>}
        {pdf && !image && (
          <a href={pdf.src} target="_blank" rel="noopener noreferrer" className="article-card-pdf-link">
            {pdf.label || 'PDF'}
          </a>
        )}
      </div>

      {isExpanded && (
        <div className="article-lightbox" onClick={closeLightbox}>
          <img
            src={image.src}
            alt={image.alt || title}
            className={`article-lightbox-image ${isZoomed ? 'zoomed' : ''}`}
            loading="lazy"
            onClick={(event) => {
              event.stopPropagation();
              setIsZoomed((zoomed) => !zoomed);
            }}
          />
        </div>
      )}
    </article>
  );
};

export default Article;
