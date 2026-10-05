import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import ImageGallery from '../../components/ImageGallery';
import { resolveManifestImages } from '../../utils/resolveManifestImages';
import { altrePubblicazioniManifest } from '../../data/altrePubblicazioniManifest';

const altrePubblicazioniModules = require.context('../../img/altre_publicazioni/', false, /\.(png|jpe?g|gif|svg|pdf)$/);
const activeFiles = resolveManifestImages(altrePubblicazioniModules, altrePubblicazioniManifest);

const AltrePubblicazioniPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <h2>{t.altrePubblicazioniTitle}</h2>
      <p>{t.altrePubblicazioniIntro}</p>
      <ImageGallery images={activeFiles} emptyMessage={t.altrePubblicazioniPlaceholder} />
    </>
  );
};

export default AltrePubblicazioniPage;
