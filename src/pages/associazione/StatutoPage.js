import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

const StatutoPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <h2>{t.statutoTitle}</h2>
      <p>{t.statutoPlaceholder}</p>
    </>
  );
};

export default StatutoPage;
