import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import ImageGallery from '../../components/ImageGallery';
import { resolveManifestImages } from '../../utils/resolveManifestImages';
import { immaginiManifest } from '../../data/immaginiManifest';

const imageModules = require.context('../../img_page/', false, /\.(png|jpe?g|gif|svg)$/);
const activeImages = resolveManifestImages(imageModules, immaginiManifest);

const ImmaginiPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <h2>{t.immaginiTitle}</h2>
      <ImageGallery images={activeImages} emptyMessage={t.immaginiPlaceholder} />
    </>
  );
};

export default ImmaginiPage;
