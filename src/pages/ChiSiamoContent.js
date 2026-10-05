import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import ProjectsList from '../components/ProjectsList';
import './chiSiamoPage.css';

const ChiSiamoContent = () => {
  const { t } = useLanguage();

  return (
    <>
      <h1>{t.chiSiamoTitle}</h1>
      {t.chiSiamoIntroParagraphs.map((paragraph, index) => (
        <article key={index}>
          <p>{paragraph}</p>
        </article>
      ))}

      <h2>{t.chiSiamoProjectsTitle}</h2>
      <ProjectsList projects={t.progettiList} variant="short" />

      <h2>{t.chiSiamoFacciamoPuntoTitle}</h2>
      {t.chiSiamoFacciamoPuntoParagraphs.map((paragraph, index) => (
        <article key={index}>
          <p>{paragraph}</p>
        </article>
      ))}
    </>
  );
};

export default ChiSiamoContent;
