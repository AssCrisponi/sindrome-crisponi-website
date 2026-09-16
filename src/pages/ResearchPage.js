import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import { useLanguage } from '../i18n/LanguageContext';
import { researchCategories } from '../data/researchPapers';
import './researchPage.css';

const CATEGORY_LABEL_KEY = {
  foundational: 'categoryFoundational',
  clinical: 'categoryClinical',
  recent: 'categoryRecent',
  databases: 'categoryDatabases',
};

const ResearchPage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="research-page">
        <Link to="/" className="research-back">
          {t.backToHome}
        </Link>
        <h1>{t.researchTitle}</h1>
        <p className="research-intro">{t.researchIntro}</p>

        {researchCategories.map(category => (
          <section key={category.id} className="research-category">
            <h2>{t[CATEGORY_LABEL_KEY[category.id]]}</h2>
            <ul className="research-list">
              {category.papers.map(paper => (
                <li key={paper.url} className="research-item">
                  <a href={paper.url} target="_blank" rel="noopener noreferrer">
                    {paper.title}
                  </a>
                  <div className="research-meta">
                    {[paper.authors, paper.year, paper.journal].filter(Boolean).join(' · ')}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ResearchPage;
