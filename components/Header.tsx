import React from 'react';
import Logo from '../public/img/logo.svg';
import Rus from '../public/img/RUS.svg';
import Down from '../public/img/Down.svg';
import Eng from '../public/img/Eng.svg';
import styles from '../styles/Header.module.scss';

export const Header = () => {
  const [lang, setLang] = React.useState<number>(1);

  const changeLange = () => {
    if(lang == 1){
      setLang(2)
    } else {
      setLang(1);
    }
  };
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={Logo} alt="" />

      <div className={styles.language} onClick={changeLange}>{
        lang == 1 ? <img src={Rus} alt="" /> : <img src={Eng} alt="" />
      } <img className={styles.down} src={Down} alt="" />
      </div>
    </div>
  );
};
