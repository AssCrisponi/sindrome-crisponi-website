import React, { useState } from 'react';
import Lightbox from './Lightbox';
import './imageGallery.css';

const ImageGallery = ({ images, emptyMessage }) => {
  const [expandedImage, setExpandedImage] = useState(null);

  if (!images || images.length === 0) {
    return <p>{emptyMessage}</p>;
  }

  return (
    <>
      <div className="image-gallery">
        {images.map((image, index) => {
          if (image.kind === 'pdf') {
            return (
              <a
                key={index}
                href={image.src}
                target="_blank"
                rel="noopener noreferrer"
                className="image-gallery-pdf"
                aria-label={image.alt || 'PDF'}
              >
                <span className="image-gallery-pdf-icon" aria-hidden="true">📄</span>
              </a>
            );
          }

          if (image.pdf) {
            return (
              <a
                key={index}
                href={image.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="image-gallery-thumb"
                aria-label={image.alt || 'PDF'}
              >
                <img src={image.src} alt={image.alt || ''} loading="lazy" />
              </a>
            );
          }

          return (
            <button
              key={index}
              type="button"
              className="image-gallery-thumb"
              onClick={() => setExpandedImage(image)}
            >
              <img src={image.src} alt={image.alt || ''} loading="lazy" />
            </button>
          );
        })}
      </div>

      {expandedImage && (
        <Lightbox
          src={expandedImage.src}
          alt={expandedImage.alt || ''}
          onClose={() => setExpandedImage(null)}
        />
      )}
    </>
  );
};

export default ImageGallery;
