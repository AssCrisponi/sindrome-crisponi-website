import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import Article from '../../components/Article';
import stefaniaLaureaImage from '../../img_originals/stefania_laurea_oltre_ostacolo_2025.jpeg';

const StefaniaPage = () => {
  const { t } = useLanguage();

  return (
    <Article
      title={t.stefaniaTitle}
      description={t.stefaniaDescription}
      image={{ src: stefaniaLaureaImage, alt: 'Stefania - Laurea, Oltre l\'Ostacolo 2025' }}
    />
  );
};

export default StefaniaPage;
