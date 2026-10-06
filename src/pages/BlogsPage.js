import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Header from '../Header';
import { useLanguage } from '../i18n/LanguageContext';
import '../home.css';
import './blogsPage.css';

const BlogsPage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="container blogs-container">
        <div className="box">
          <div className="box_content blogs-content">
            <Link to="/" className="blogs-back">
              {t.backToHome}
            </Link>
            <h1>{t.blogsTitle}</h1>

            <div className="blogs-layout">
              <nav className="blogs-sidebar">
                <NavLink
                  to="/blogs/stefania"
                  className={({ isActive }) => `blogs-sidebar-link ${isActive ? 'active' : ''}`}
                >
                  {t.blogsNavStefania}
                </NavLink>
                <NavLink
                  to="/blogs/diario-di-farfagrazia"
                  className={({ isActive }) => `blogs-sidebar-link ${isActive ? 'active' : ''}`}
                >
                  {t.blogsNavDiarioFarfaGrazia}
                </NavLink>
              </nav>

              <div className="blogs-main">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
