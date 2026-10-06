import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Header from '../Header';
import { useLanguage } from '../i18n/LanguageContext';
import '../home.css';
import './sindromePage.css';

const SindromePage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="container sindrome-container">
        <div className="box">
          <div className="box_content sindrome-content">
            <Link to="/" className="sindrome-back">
              {t.backToHome}
            </Link>
            <h1>{t.sindromeTitle}</h1>

            <div className="sindrome-layout">
              <nav className="sindrome-sidebar">
                <NavLink
                  to="/sindrome/la-scoperta-della-sindrome"
                  className={({ isActive }) => `sindrome-sidebar-link ${isActive ? 'active' : ''}`}
                >
                  {t.sindromeScopertaButton}
                </NavLink>
                <NavLink
                  to="/sindrome/giangiorgio-crisponi"
                  className={({ isActive }) => `sindrome-sidebar-link ${isActive ? 'active' : ''}`}
                >
                  {t.sindromeGiangiorgioCrisponiButton}
                </NavLink>
                <NavLink
                  to="/sindrome/laura-crisponi"
                  className={({ isActive }) => `sindrome-sidebar-link ${isActive ? 'active' : ''}`}
                >
                  {t.sindromeLauraCrisponiButton}
                </NavLink>
                <NavLink
                  to="/sindrome/giuseppe-zampino"
                  className={({ isActive }) => `sindrome-sidebar-link ${isActive ? 'active' : ''}`}
                >
                  {t.sindromeGiuseppeZampinoButton}
                </NavLink>
                <NavLink
                  to="/sindrome/diagnosi-e-gestione"
                  className={({ isActive }) => `sindrome-sidebar-link ${isActive ? 'active' : ''}`}
                >
                  {t.sindromeDiagnosiButton}
                </NavLink>
                <NavLink
                  to="/sindrome/scuola"
                  className={({ isActive }) => `sindrome-sidebar-link ${isActive ? 'active' : ''}`}
                >
                  {t.sindromeScuolaButton}
                </NavLink>
                <NavLink
                  to="/sindrome/lavoro"
                  className={({ isActive }) => `sindrome-sidebar-link ${isActive ? 'active' : ''}`}
                >
                  {t.sindromeLavoroButton}
                </NavLink>
                <NavLink
                  to="/sindrome/centri-riferimento-contatti"
                  className={({ isActive }) => `sindrome-sidebar-link ${isActive ? 'active' : ''}`}
                >
                  {t.sindromeCentriRiferimentoButton}
                </NavLink>
              </nav>

              <div className="sindrome-main">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SindromePage;
