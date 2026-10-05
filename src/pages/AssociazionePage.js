import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Header from '../Header';
import { useLanguage } from '../i18n/LanguageContext';
import '../home.css';
import './associazionePage.css';

const AssociazionePage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="container associazione-container">
        <div className="box associazione-box">
          <div className="box_content associazione-content">
            <Link to="/" className="associazione-back">
              {t.backToHome}
            </Link>
            <h1>{t.associazioneTitle}</h1>

            <div className="associazione-layout">
              <nav className="associazione-sidebar">
                <NavLink
                  to="/associazione/statuto"
                  className={({ isActive }) => `associazione-sidebar-link ${isActive ? 'active' : ''}`}
                >
                  {t.associazioneNavStatuto}
                </NavLink>
                <NavLink
                  to="/associazione/eventi"
                  className={({ isActive }) => `associazione-sidebar-link ${isActive ? 'active' : ''}`}
                >
                  {t.associazioneNavEventi}
                </NavLink>
                <NavLink
                  to="/associazione/stampa"
                  className={({ isActive }) => `associazione-sidebar-link ${isActive ? 'active' : ''}`}
                >
                  {t.associazioneNavStampa}
                </NavLink>
                <NavLink
                  to="/associazione/progetti"
                  className={({ isActive }) => `associazione-sidebar-link ${isActive ? 'active' : ''}`}
                >
                  {t.associazioneNavProgetti}
                </NavLink>
                <NavLink
                  to="/associazione/altre-pubblicazioni"
                  className={({ isActive }) => `associazione-sidebar-link ${isActive ? 'active' : ''}`}
                >
                  {t.associazioneNavAltrePubblicazioni}
                </NavLink>
                <NavLink
                  to="/associazione/immagini"
                  className={({ isActive }) => `associazione-sidebar-link ${isActive ? 'active' : ''}`}
                >
                  {t.associazioneNavImmagini}
                </NavLink>
              </nav>

              <div className="associazione-main">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociazionePage;
