import React from 'react';
import Content from '../components/Content';
import { Header } from '../components/Header';


const Index = () => {
  return (
    <>
      <Header />
      <Content />
      <style jsx>
        {`
          body {
            width: 2034;
            margin: auto;
          }
        `}
      </style>
    </>
  );
};

export default Index;
