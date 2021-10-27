import React from 'react';
import Head from 'next/head';

import { Main } from '../components/Main';

export const getStaticProps = async () => {
  const res = await fetch(
    'https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=9&language_id=1',
  );
  const data = await res.json();

  return {
    props: {
      posts: data.news,
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
      <Main posts={posts} />
    </>
  );
};

export default Index;
