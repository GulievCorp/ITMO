import axios from 'axios';
import React from 'react';
import { useRouter } from 'next/dist/client/router';
import styles from '../../styles/Post.module.scss';
import MyLoader from '../../components/PostLoader';

const PostPage = () => {
  const router = useRouter();
  const [post, setPost] = React.useState([]);
  const [isLoading, setisLoading] = React.useState<Boolean>(false);

  let pathname = window ? window.location.pathname.replace(/[\D]+/g, '') : '';
  let language = window ? window.location.pathname.substr(12, 3) : '';
  let languageRequest = language == 'rus' ? 1 : 2;

  const getNews = async () => {
    setisLoading(true);
    const { data } = await axios.get(
      `https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=9&language_id=${languageRequest}`,
    );
    let result = data['news'].filter((obj) => {
      return obj.id == pathname;
    });
    setPost(result);
    setisLoading(false);
  };

  React.useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      {isLoading ? (
        <MyLoader />
      ) : (
        post.map((item) => {
          return (
            <div id="post" className={styles.post} key={item.id}>
              <img src={item.image_big} alt="" />
              <span>{item.date}</span>
              <h1>{item.title}</h1>
              <div className={styles.text} dangerouslySetInnerHTML={{ __html: item.lead }} />
            </div>
          );
        })
      )}
      <button className={styles.button} onClick={() => router.push('/')}>
        Назад
      </button>
    </div>
  );
};

export default PostPage;
