import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

const ScopertaSindromePage = () => {
  const { t } = useLanguage();

  return (
    <>
      <h2>{t.scopertaSindromeTitle}</h2>
      <p>{t.scopertaSindromePlaceholder}</p>
    </>
  );
};

export default ScopertaSindromePage;
