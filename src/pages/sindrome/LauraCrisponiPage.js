import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import Article from '../../components/Article';
import lauraCrisponiImage from '../../img_originals/laura_crisponi_irg_cnr_monserrato .JPG';
import premioDonnaScienzaImage from '../../img_originals/premio_donna_scienza_2024_laura-crisponi.jpg';
import './lauraCrisponiPage.css';

const LauraCrisponiPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <a
        href="https://festivalscienzacagliari.it/donna_di_scienza/laura-crisponi/"
        className="laura-crisponi-award-link"
      >
        <img
          src={premioDonnaScienzaImage}
          alt="Premio Donna di Scienza 2024 - Laura Crisponi"
          className="laura-crisponi-award-image"
          loading="lazy"
        />
      </a>
      <Article
        title={t.lauraCrisponiTitle}
        titleHref="https://irgb.cnr.it/people/laura-crisponi/"
        description={t.lauraCrisponiPlaceholder}
        image={{ src: lauraCrisponiImage, alt: 'La Dott.ssa Laura Crisponi, IRGB-CNR Monserrato' }}
      />
    </>
  );
};

export default LauraCrisponiPage;
