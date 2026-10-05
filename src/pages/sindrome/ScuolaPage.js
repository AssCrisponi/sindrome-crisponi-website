import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

const ScuolaPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <h2>{t.scuolaTitle}</h2>
      <p>{t.scuolaPlaceholder}</p>
    </>
  );
};

export default ScuolaPage;
