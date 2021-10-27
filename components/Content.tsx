import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styles from '../styles/Content.module.scss';
import MyLoader from './MainLoader';
import Image from 'next/image';

interface ContentProps {
  posts: Array<any>;
  language: Number;
}

const Content: React.FC<ContentProps> = ({ posts, language }) => {
  const router = useRouter();
  const [postElements, setPostElements] = React.useState(posts);
  const [isLoading, setIsLoading] = React.useState(false);

  const [lang, setLang] = React.useState('rus')

  const changeLang = () => {
    language == 1 ? setLang('rus') : setLang('eng');
  }

  const changeNews = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=9&language_id=${language}`,
    );
    setPostElements(data['news']);
    setIsLoading(false);
  };

  React.useEffect(() => {
    changeNews();
    changeLang();
  }, [language]);

  return (
    <div className={styles.content}>
      <h1>Новости и события</h1>

      <div className={styles.news}>
        {isLoading
          ? Array(12).fill(<MyLoader />)
          : postElements.map((item, index) => {
              return (
                <div
                  onClick={() => router.push('/post/' + item.id + lang)}
                  className={styles.new}
                  key={item.id}>
                  <img src={item.image_small} alt="" />
                  <span className={styles.data}>{item.creation_date}</span>
                  <p className={styles.title}>{item.title}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Content;
