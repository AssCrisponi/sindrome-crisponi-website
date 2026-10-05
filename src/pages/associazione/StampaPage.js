import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import ImageGallery from '../../components/ImageGallery';
import { resolveManifestImages } from '../../utils/resolveManifestImages';
import { stampaManifest } from '../../data/stampaManifest';

const stampaModules = require.context('../../img/stampa/', false, /\.(png|jpe?g|gif|svg|pdf)$/);
const activeFiles = resolveManifestImages(stampaModules, stampaManifest);

const StampaPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <h2>{t.stampaTitle}</h2>
      <ImageGallery images={activeFiles} emptyMessage={t.stampaPlaceholder} />
    </>
  );
};

export default StampaPage;
