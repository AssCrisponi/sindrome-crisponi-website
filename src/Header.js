import React from 'react';
import NavBar from './NavBar';
import { useLanguage } from './i18n/LanguageContext';
import './siteBanner.css';

const Header = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="site-banner">{t.siteUpdateBanner}</div>
      <NavBar />
    </>
  );
};

export default Header;
