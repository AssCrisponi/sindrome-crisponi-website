import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

const ImmaginiPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <h2>{t.immaginiTitle}</h2>
      <p>{t.immaginiPlaceholder}</p>
    </>
  );
};

export default ImmaginiPage;
