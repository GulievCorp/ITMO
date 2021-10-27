import React from 'react';
import Logo from '../public/img/logo.svg';
import Rus from '../public/img/RUS.svg';
import Down from '../public/img/Down.svg';
import Eng from '../public/img/Eng.svg';
import styles from '../styles/Header.module.scss';

import Content from './Content';

interface MainProps {
  posts: Array<any>;
}

export const Main: React.FC<MainProps> = ({ posts }) => {
  const [lang, setLang] = React.useState<number>(1);
  const [activeMenu, setActiveMenu] = React.useState<boolean>(false);

  const useActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };

  const changeLanguage = (e) => {
    if (e.target.innerHTML == 'Rus') {
      setLang(1);
    } else {
      setLang(2);
    }
  };

  return (
    <>
      <div className={styles.header}>
        <img className={styles.logo} src={Logo} alt="" />

        <div className={styles.language}>
          {lang == 1 ? <img src={Rus} alt="" /> : <img src={Eng} alt="" />}{' '}
          <img className={styles.down} onClick={useActiveMenu} src={Down} alt="" />
          {activeMenu ? (
            <div className={styles.vipadashkaActive}>
              <p onClick={changeLanguage}>Eng</p>
              <p onClick={changeLanguage}>Rus</p>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <Content posts={posts} language={lang} />
    </>
  );
};
