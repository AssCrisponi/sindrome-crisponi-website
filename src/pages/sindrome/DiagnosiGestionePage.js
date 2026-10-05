import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

const DiagnosiGestionePage = () => {
  const { t } = useLanguage();

  return (
    <>
      <h2>{t.diagnosiGestioneTitle}</h2>
      {t.diagnosiGestioneParagraphs.map((paragraph, index) => (
        <article key={index}>
          <p>{paragraph}</p>
        </article>
      ))}
    </>
  );
};

export default DiagnosiGestionePage;
