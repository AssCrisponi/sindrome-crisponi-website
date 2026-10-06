import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

const LavoroPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <h2>{t.lavoroTitle}</h2>
      <p>{t.lavoroPlaceholder}</p>
    </>
  );
};

export default LavoroPage;
