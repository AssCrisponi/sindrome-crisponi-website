import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import Article from '../../components/Article';
import diarioFarfaGraziaImage from '../../img_originals/diario_farfagrazia_2012.jpg';

const DiarioFarfaGraziaPage = () => {
  const { t } = useLanguage();

  return (
    <Article
      title={t.diarioFarfaGraziaTitle}
      description={t.diarioFarfaGraziaDescription}
      image={{ src: diarioFarfaGraziaImage, alt: 'Diario di FarfaGrazia, 2012' }}
    />
  );
};

export default DiarioFarfaGraziaPage;
