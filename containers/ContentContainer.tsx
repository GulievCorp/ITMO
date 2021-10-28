import axios from 'axios';
import React from 'react';
import Content from '../components/Content';

interface IContentContainer {
  posts: Array<any>;
  language: Number;
}

const ContentContainer: React.FC<IContentContainer> = ({ posts, language }) => {
  const [postElements, setPostElements] = React.useState(posts);
  const [isLoading, setIsLoading] = React.useState(false);

  const [lang, setLang] = React.useState('rus');

  const changeLang = () => {
    language == 1 ? setLang('rus') : setLang('eng');
  };

  const changeNews = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=9&language_id=${language}`,
    );
    setPostElements(data['news']);
    setIsLoading(false);
  };

  return (
    <Content
      isLoading={isLoading}
      lang={lang}
      posts={postElements}
      language={language}
      changeLang={changeLang}
      changeNews={changeNews}
    />
  );
};

export default ContentContainer;
