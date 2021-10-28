import axios from 'axios';
import React from 'react';
import Head from 'next/head';

import { MainContainer } from '../containers/MainContainer';

export const getStaticProps = async () => {
  const { data } = await axios.get(
    `https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=9&language_id=1`,
  );

  return {
    props: {
      posts: data['news'],
    },
  };
};

interface PostItem {
  posts: Array<any>;
}

const Index: React.FC<PostItem> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Новости ИТМО</title>
      </Head>
      <MainContainer posts={posts} />
    </>
  );
};

export default Index;
