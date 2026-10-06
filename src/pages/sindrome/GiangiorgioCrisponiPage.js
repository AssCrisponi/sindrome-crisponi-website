import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

const GiangiorgioCrisponiPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <h2>{t.giangiorgioCrisponiTitle}</h2>
      <p>{t.giangiorgioCrisponiPlaceholder}</p>
    </>
  );
};

export default GiangiorgioCrisponiPage;
