import React from 'react';
import Article from './Article';
import './article.css';

const ArticlesList = ({ articles }) => (
  <div className="articles-list">
    {articles.map((article, index) => (
      <Article key={index} {...article} />
    ))}
  </div>
);

export default ArticlesList;
