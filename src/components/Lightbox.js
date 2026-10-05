import React from 'react';
import './lightbox.css';

const Lightbox = ({ src, alt, onClose }) => (
  <div className="lightbox" onClick={onClose}>
    <img src={src} alt={alt} className="lightbox-image" />
  </div>
);

export default Lightbox;
