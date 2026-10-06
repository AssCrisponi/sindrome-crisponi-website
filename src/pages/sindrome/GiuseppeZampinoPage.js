import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

const GiuseppeZampinoPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <h2>{t.giuseppeZampinoTitle}</h2>
      <p>{t.giuseppeZampinoPlaceholder}</p>
    </>
  );
};

export default GiuseppeZampinoPage;
