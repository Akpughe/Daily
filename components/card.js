import React from 'react';
import Link from 'next/link';
import {baseUrl} from '../utils'

const Card = ({article}) => {
  return (
    <Link key={article.Title} href={`/article/${article.id}`}>
      <a className='flex flex-col overflow-hidden mt-6'>
				<img
					className='block w-full flex-1 rounded-lg'
					src={`${baseUrl}${article.image.url}`}
					alt={article.Title}
				/>
				<h2 className='text-red-500 mt-3 text-center justify-end text-lg'>
					{article.Title}
				</h2>
        <small>{article.Date}</small>
			</a>
    </Link>
  );
};

export default Card;
