import './home.css';
import { useLanguage } from './i18n/LanguageContext';

export default function Content() {
  const { t } = useLanguage();

  return (
    <div className="box_content">
      <PostTitle title={t.postTitle} />
      <PostBody description={t.postDescription} />
    </div>
  );
}

function PostTitle({ title }) {
    return <h1>{title}</h1>
  }

  function PostBody({ description }) {
    return (
      <article>
        <p>{description}</p>
      </article>
    );
  }
