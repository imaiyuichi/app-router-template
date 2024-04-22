'use client';

import { useState } from 'react';
import { ITEMS_PER_PAGE } from '@/variables';

const testJson = [
  {
    title: 'title1',
  },
  {
    title: 'title2',
  },
  {
    title: 'title3',
  },
  {
    title: 'title4',
  },
  {
    title: 'title5',
  },
  {
    title: 'title6',
  },
  {
    title: 'title7',
  },
  {
    title: 'title8',
  },
  {
    title: 'title9',
  },
  {
    title: 'title10',
  },
];

const ReadMore = () => {
  const [page, setPage] = useState(1); // ページ数の状態を管理

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1); // ページ数を1増やす
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedData = testJson.slice(0, endIndex);

  return (
    <section>
      <div className="bg-gray-200">
        {displayedData.map((data, index) => (
          <div key={index}>
            <h2>{data.title}</h2>
          </div>
        ))}
      </div>
      {testJson.length > endIndex && ( // まだ表示されていないデータがある場合にボタンを表示
        <button
          onClick={handleClick}
          className="bg-gray-600 p-[10px] text-white"
        >
          もっと見る
        </button>
      )}
    </section>
  );
};

export default ReadMore;
