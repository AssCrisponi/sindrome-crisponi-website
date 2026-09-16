import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

const EventiPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <h2>{t.eventiTitle}</h2>
      <p>{t.eventiPlaceholder}</p>
    </>
  );
};

export default EventiPage;
