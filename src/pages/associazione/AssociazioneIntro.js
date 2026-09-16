import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

const AssociazioneIntro = () => {
  const { t } = useLanguage();

  return <p>{t.associazioneIntro}</p>;
};

export default AssociazioneIntro;
