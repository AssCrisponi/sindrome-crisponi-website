import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import { useLanguage } from '../i18n/LanguageContext';
import '../home.css';
import './contattiPage.css';

const ContattiPage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="container contatti-container">
        <div className="box">
          <div className="box_content contatti-content">
            <Link to="/" className="contatti-back">
              {t.backToHome}
            </Link>
            <h1>{t.contattiTitle}</h1>

            <section className="contatti-section">
              <h2>{t.contattiAssociazioneTitle}</h2>
              <p>
                {t.contattiAssociazioneEmailLabel}:{' '}
                <a href={`mailto:${t.contattiAssociazioneEmail}`}>{t.contattiAssociazioneEmail}</a>
              </p>
            </section>

            <section className="contatti-section">
              <h2>{t.contattiMediciTitle}</h2>
              {t.contattiMediciList.length > 0 ? (
                t.contattiMediciList.map((medico, index) => (
                  <div key={index} className="contatti-medico-card">
                    <h3 className="contatti-medico-name">{medico.name}</h3>
                    {medico.role && <p className="contatti-medico-meta">{medico.role}</p>}
                    {medico.center && <p className="contatti-medico-meta">{medico.center}</p>}
                    {medico.email && (
                      <p className="contatti-medico-meta">
                        <a href={`mailto:${medico.email}`}>{medico.email}</a>
                      </p>
                    )}
                    {medico.phone && <p className="contatti-medico-meta">{medico.phone}</p>}
                  </div>
                ))
              ) : (
                <p>{t.contattiMediciPlaceholder}</p>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContattiPage;
