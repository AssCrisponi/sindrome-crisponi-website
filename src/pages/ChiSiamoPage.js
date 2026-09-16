import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import { useLanguage } from '../i18n/LanguageContext';
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
            <h1>{t.chiSiamoTitle}</h1>
            {t.chiSiamoIntroParagraphs.map((paragraph, index) => (
              <article key={index}>
                <p>{paragraph}</p>
              </article>
            ))}

            <h2>{t.chiSiamoProjectsTitle}</h2>
            <ul className="chisiamo-projects">
              {t.chiSiamoProjects.map((project, index) => (
                <li key={index} className="chisiamo-project">
                  <span className="chisiamo-project-period">{project.period}</span>
                  <p>{project.description}</p>
                </li>
              ))}
            </ul>

            <h2>{t.chiSiamoFacciamoPuntoTitle}</h2>
            {t.chiSiamoFacciamoPuntoParagraphs.map((paragraph, index) => (
              <article key={index}>
                <p>{paragraph}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiSiamoPage;
