import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import ProjectsList from '../../components/ProjectsList';

const ProgettiPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <h2>{t.progettiTitle}</h2>
      <ProjectsList projects={t.progettiList} variant="extended" />
    </>
  );
};

export default ProgettiPage;
