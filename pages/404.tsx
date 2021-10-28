import React from 'react';
import Link from 'next/link';

const ErorrPage = () => {
  return (
    <div>
      <h1>Ошибка</h1>
      <p>
        Вернуться
        <Link href={'/'}>
          <a> назад</a>
        </Link>
      </p>
    </div>
  );
};

export default ErorrPage;
