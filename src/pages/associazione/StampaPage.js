import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import ArticlesList from '../../components/ArticlesList';

const StampaPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <h2>{t.stampaTitle}</h2>
      {t.stampaArticles.length > 0 ? <ArticlesList articles={t.stampaArticles} /> : <p>{t.stampaPlaceholder}</p>}
    </>
  );
};

export default StampaPage;
