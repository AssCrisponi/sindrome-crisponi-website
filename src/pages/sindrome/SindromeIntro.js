import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

const SindromeIntro = () => {
  const { t } = useLanguage();

  return (
    <>
      {t.sindromeParagraphs.map((paragraph, index) => (
        <article key={index}>
          <p>{paragraph}</p>
        </article>
      ))}
      <h2>{t.sindromeEpidemiologyTitle}</h2>
      {t.sindromeEpidemiologyParagraphs.map((paragraph, index) => (
        <article key={index}>
          <p>{paragraph}</p>
        </article>
      ))}
      <p className="sindrome-updated">{t.sindromeUpdated}</p>
    </>
  );
};

export default SindromeIntro;
