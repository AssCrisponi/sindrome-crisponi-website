import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import '../../components/button.css';

const EventiPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <h2>{t.eventiTitle}</h2>
      <p>{t.eventiPlaceholder}</p>
      <Link to="/associazione/immagini" className="rounded-button">
        {t.eventiImmaginiButton}
      </Link>
    </>
  );
};

export default EventiPage;
