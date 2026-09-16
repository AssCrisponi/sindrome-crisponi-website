import React from 'react';
import './NavBar.css';
import './components/button.css';
import NavButton from './components/NavButton';
import logo_scontornato from '../src/out/logo_scontornato.png';
import { useLanguage } from './i18n/LanguageContext';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
    const { language, setLanguage, t } = useLanguage();
    const navigate = useNavigate();

    const handleClickAssociazione = () => {
        navigate('/associazione');
      };
    const handleClickSindrome = () => {
        navigate('/sindrome');
      };
    const handleClickRicerca = () => {
        navigate('/ricerca');
      };
    const handleClickChiSiamo = () => {
        navigate('/chi-siamo');
      };

  return (
    <>
    <nav className="navbar">
    <div>
    <img src={logo_scontornato} className="navbar-logo" alt="logo" />
    </div>
    <NavButton  onClick={handleClickAssociazione} className='lable-button'>
       {t.navLabel}
    </NavButton>
    <div >
    <NavButton  onClick={handleClickSindrome} className='rounded-button'>
        {t.navSindrome}
    </NavButton>
    </div>
    <div>
    <NavButton onClick={handleClickRicerca} className='rounded-button'>
        {t.navRicerca}
    </NavButton>
    </div>
    <div>
    <NavButton onClick={handleClickChiSiamo} className='rounded-button'>
        {t.navChiSiamo}
    </NavButton>
    </div>
    <div className="lang-switch">
        <button
            type="button"
            className={`lang-flag ${language === 'it' ? 'active' : ''}`}
            onClick={() => setLanguage('it')}
            aria-label="Italiano"
            title="Italiano"
        >
            🇮🇹
        </button>
        <button
            type="button"
            className={`lang-flag ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
            aria-label="English"
            title="English"
        >
            🇬🇧
        </button>
    </div>
    </nav>
    </>

  );
};

export default NavBar;
