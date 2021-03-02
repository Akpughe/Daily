import React from 'react';
import Link from 'next/link';
import { baseUrl } from '../utils';

const Card = ({ article }) => {
  return (
    <Link key={article.Title} href={`/article/${article.id}`}>
      <a className="flex flex-col overflow-hidden mt-6 border shadow-xl bg-white">
        <img
          className="block w-full flex-1"
          src={`${baseUrl}${article.image.url}`}
          alt={article.Title}
        />
        <div className="py-4 px-5">
          <span className="bg-blue-300 py-1 px-2 text-blue-900 hover:bg-blue-500 hover:text-white uppercase font-semibold">
            devotional
          </span>
          <h2 className="text-black font-semibold text-2xl mt-5 mb-3 ">
            {article.Title}
          </h2>
          <div className="h-0.5 w-14 mt-1 mb-1 bg-gray-400"></div>
          <small className="font-semibold">{article.Date}</small>
        </div>
      </a>
    </Link>
  );
};

export default Card;
