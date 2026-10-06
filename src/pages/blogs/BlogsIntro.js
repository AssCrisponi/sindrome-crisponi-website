import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

const BlogsIntro = () => {
  const { t } = useLanguage();

  return <p>{t.blogsPlaceholder}</p>;
};

export default BlogsIntro;
