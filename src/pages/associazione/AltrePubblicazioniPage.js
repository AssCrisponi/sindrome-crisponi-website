import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import ImageGallery from '../../components/ImageGallery';
import { resolveManifestImages } from '../../utils/resolveManifestImages';
import { altrePubblicazioniManifest } from '../../data/altrePubblicazioniManifest';

const altrePubblicazioniModules = require.context('../../features/associazione/assets/altre-pubblicazioni/', false, /\.(png|jpe?g|gif|svg|pdf)$/);
const activeFiles = resolveManifestImages(altrePubblicazioniModules, altrePubblicazioniManifest);

const generalFiles = activeFiles.filter((file) => file.section !== 'tesiDiLaurea');
const tesiDiLaureaFiles = activeFiles.filter((file) => file.section === 'tesiDiLaurea');

const AltrePubblicazioniPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <h2>{t.altrePubblicazioniTitle}</h2>
      <p>{t.altrePubblicazioniIntro}</p>

      {activeFiles.length === 0 ? (
        <p>{t.altrePubblicazioniPlaceholder}</p>
      ) : (
        <>
          {generalFiles.length > 0 && <ImageGallery images={generalFiles} />}

          {tesiDiLaureaFiles.length > 0 && (
            <>
              <h3>{t.altrePubblicazioniTesiDiLaureaTitle}</h3>
              <ImageGallery images={tesiDiLaureaFiles} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default AltrePubblicazioniPage;
