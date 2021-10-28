/* eslint-disable @next/next/no-img-element */
import React from 'react';
import classes from '../styles/Header.module.scss';
import ContentContainer from '../containers/ContentContainer';
import Image from 'next/image';

interface IMainProps {
  posts: Array<any>;
  lang: Number;
  useActiveMenu: Function;
  activeMenu: Boolean;
  changeLanguage: Function;
}

const Main: React.FC<IMainProps> = ({ posts, lang, useActiveMenu, activeMenu, changeLanguage }) => {
  return (
    <>
      <div className={classes.header}>
        <img className={classes.logo} src="/logo.svg" alt="Логотип ИТМО" />
        <div className={classes.language}>
          {lang == 1 ? (
            <Image src="/RUS.svg" width={24} height={24} alt="Русский" />
          ) : (
            <Image src="/ENG.svg" width={24} height={24} alt="Английский" />
          )}{' '}
          <img
            className={classes.down}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            onClick={() => useActiveMenu()}
            src="/Down.svg"
            alt="Кнопка всплывающего меню"
          />
          {activeMenu ? (
            <div className={classes.vipadashkaActive}>
              <p onClick={(e) => changeLanguage(e)}>Eng</p>
              <p onClick={(e) => changeLanguage(e)}>Rus</p>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <ContentContainer posts={posts} language={lang} />
    </>
  );
};

export default Main;
