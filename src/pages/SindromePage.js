import React from 'react';
import { Link } from 'react-router-dom';
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
            {t.sindromeParagraphs.map((paragraph, index) => (
              <article key={index}>
                <p>{paragraph}</p>
              </article>
            ))}
            <h2>{t.sindromeEpidemiologyTitle}</h2>
            {t.sindromeEpidemiologyParagraphs.map((paragraph, index) => (
              <article key={index}>
                <p>{paragraph}</p>
              </article>
            ))}
            <p className="sindrome-updated">{t.sindromeUpdated}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SindromePage;
