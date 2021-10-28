import React from 'react';
import Down from '../public/Down.svg';
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
        <Image className={classes.logo} src="/logo.svg" width={161} height={33} />
        <div className={classes.language}>
          {lang == 1 ? (
            <Image src="/RUS.svg" width={24} height={24} alt="" />
          ) : (
            <Image src="/ENG.svg" width={24} height={24} alt="" />
          )}{' '}
          <img className={classes.down} onClick={() => useActiveMenu()} src={Down} alt="" />
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
