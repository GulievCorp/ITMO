import React from 'react';
import Main from '../components/Main';

interface IMainContainer {
  posts: Array<any>;
}

export const MainConteiner: React.FC<IMainContainer> = ({ posts }) => {
  const [lang, setLang] = React.useState<number>(1);
  const [activeMenu, setActiveMenu] = React.useState<boolean>(false);

  const useActiveMenu = () => {
      console.log('aaa');
    setActiveMenu(!activeMenu);
  };

  const changeLanguage = (e) => {
    setLang(e.target.innerHTML == 'Rus' ? 1 : 2);
  };
  return (
    <Main
      posts={posts}
      lang={lang}
      activeMenu={activeMenu}
      useActiveMenu={useActiveMenu}
      changeLanguage={changeLanguage}    />
  );
};
