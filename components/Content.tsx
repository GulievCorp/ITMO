import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styles from '../styles/Content.module.scss';
import MyLoader from './MainLoader';

interface Lang {
  language: number;
}

const Content: React.FC<Lang> = ({ language }) => {
  const [posts, setPosts] = React.useState<any>([]);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  let langProps = language == 1 ? 'rus' : 'eng';

  const nextStranica = (a) => {
    router.push('/posts/' + a.id + langProps);
  };

  const router = useRouter();

  const getNews = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=9&language_id=${language}`,
    );
    setPosts(data['news']);
    setLoading(false);
  };

  React.useEffect(() => {
    getNews();
  }, [language]);

  React.useEffect(() => {
    getNews();
  }, []);

  return (
    <div className={styles.content}>
      <h1>Новости и события</h1>

      <div className={styles.news}>
        {posts.map((item, index) => {
          return isLoading ? (
            Array(12).fill(<MyLoader />)
          ) : (
            <div onClick={() => nextStranica(item)} className={styles.new} key={item.id}>
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
