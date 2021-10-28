import React from 'react';
import classes from '../styles/Content.module.scss';
import MyLoader from './MainLoader';
import { useRouter } from 'next/dist/client/router';

interface IContentProps {
  posts: Array<any>;
  language: Number;
  isLoading: Boolean;
  lang: String;
  changeLang: Function;
  changeNews: Function;
}

const Content: React.FC<IContentProps> = ({
  posts,
  changeLang,
  changeNews,
  language,
  isLoading,
  lang,
}) => {
  const router = useRouter();

  React.useEffect(() => {
    changeNews();
    changeLang();
  }, [language]);
  return (
    <div className={classes.content}>
      <h1>Новости и события</h1>

      <div className={classes.news}>
        {isLoading
          ? Array(posts.length - 1).fill(<MyLoader />)
          : posts.map((item) => {
              return (
                <div
                  onClick={() => router.push('/post/' + item.id + lang)}
                  className={classes.new}
                  key={item.id}>
                  <img src={item.image_small} alt="" />
                  <span className={classes.data}>{item.creation_date}</span>
                  <p className={classes.title}>{item.title}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Content;
