import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import ArticlesList from '../../components/ArticlesList';

const AltrePubblicazioniPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <h2>{t.altrePubblicazioniTitle}</h2>
      {t.altrePubblicazioniArticles.length > 0 ? (
        <ArticlesList articles={t.altrePubblicazioniArticles} />
      ) : (
        <p>{t.altrePubblicazioniPlaceholder}</p>
      )}
    </>
  );
};

export default AltrePubblicazioniPage;
