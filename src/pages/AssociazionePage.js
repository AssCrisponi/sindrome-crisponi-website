import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Header from '../Header';
import { useLanguage } from '../i18n/LanguageContext';
import '../home.css';
import './associazionePage.css';

const AssociazionePage = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <button
                type="button"
                className="associazione-menu-toggle"
                onClick={() => setIsMenuOpen((open) => !open)}
                aria-label={t.associazioneTitle}
                aria-expanded={isMenuOpen}
              >
                <span className="associazione-menu-toggle-bar" />
              </button>

              <nav className={`associazione-sidebar ${isMenuOpen ? 'open' : ''}`}>
                <NavLink
                  to="/associazione/statuto"
                  className={({ isActive }) => `associazione-sidebar-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.associazioneNavStatuto}
                </NavLink>
                <NavLink
                  to="/associazione/eventi"
                  className={({ isActive }) => `associazione-sidebar-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.associazioneNavEventi}
                </NavLink>
                <NavLink
                  to="/associazione/stampa"
                  className={({ isActive }) => `associazione-sidebar-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.associazioneNavStampa}
                </NavLink>
                <NavLink
                  to="/associazione/progetti"
                  className={({ isActive }) => `associazione-sidebar-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.associazioneNavProgetti}
                </NavLink>
                <NavLink
                  to="/associazione/altre-pubblicazioni"
                  className={({ isActive }) => `associazione-sidebar-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.associazioneNavAltrePubblicazioni}
                </NavLink>
                <NavLink
                  to="/associazione/immagini"
                  className={({ isActive }) => `associazione-sidebar-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
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
