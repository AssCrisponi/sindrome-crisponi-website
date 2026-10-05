import React, { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import ImageGallery from '../../components/ImageGallery';
import Lightbox from '../../components/Lightbox';
import { resolveManifestImages } from '../../utils/resolveManifestImages';
import { eventiManifest } from '../../data/eventiManifest';
import eventiMainImage from '../../eventi_page/eventi_image_main.jpg';

const imageModules = require.context('../../eventi_page/', false, /\.(png|jpe?g|gif|svg)$/);
const activeImages = resolveManifestImages(imageModules, eventiManifest);

const EventiPage = () => {
  const { t } = useLanguage();
  const [isMainImageExpanded, setIsMainImageExpanded] = useState(false);

  return (
    <>
      <h2>{t.eventiTitle}</h2>
      <p>{t.eventiPlaceholder}</p>
      <button
        type="button"
        className="eventi-main-image-link"
        onClick={() => setIsMainImageExpanded(true)}
        aria-label={t.eventiTitle}
      >
        <img src={eventiMainImage} alt={t.eventiTitle} className="eventi-main-image" />
      </button>
      {isMainImageExpanded && (
        <Lightbox
          src={eventiMainImage}
          alt={t.eventiTitle}
          onClose={() => setIsMainImageExpanded(false)}
        />
      )}
      <ImageGallery images={activeImages} emptyMessage={t.immaginiPlaceholder} />
    </>
  );
};

export default EventiPage;
