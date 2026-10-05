import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import { useLanguage } from '../i18n/LanguageContext';
import ChiSiamoContent from './ChiSiamoContent';
import '../home.css';
import './chiSiamoPage.css';

const ChiSiamoPage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="container chisiamo-container">
        <div className="box">
          <div className="box_content chisiamo-content">
            <Link to="/" className="chisiamo-back">
              {t.backToHome}
            </Link>
            <ChiSiamoContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiSiamoPage;
