import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

const CentriRiferimentoPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <h2>{t.centriRiferimentoTitle}</h2>
      <p>{t.centriRiferimentoPlaceholder}</p>
    </>
  );
};

export default CentriRiferimentoPage;
