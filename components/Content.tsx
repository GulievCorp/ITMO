import axios from 'axios';
import React from 'react';
import styles from '../styles/Content.module.scss';

const Content: React.FC = () => {
  const [posts, setPosts] = React.useState<any>([]);

  const getNews = async () => {
    const { data } = await axios.get(
      'https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=10&language_id=1',
    );
    console.log(data['news']);
    setPosts(data['news']);
  };

  React.useEffect(() => {
    getNews();
  }, []);

  return (
    <div className={styles.content}>
      <h1>Новости и события</h1>

      <div className={styles.news}>
        {posts.map((item) => {
          return (
            <div className={styles.new} key={item.id}>
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
