import React from 'react';
import Layout from '../../components/layout';
import { baseUrl, fetchQuery } from '../../utils';
import Link from 'next/link';

const Article = ({ article }) => {
  return (
    <Layout>
      <div className="pt-6 mx-auto container">
        <Link href="/">
          <a className="bg-black text-white font-semibold px-2 py-2">&larr; Back to home</a>
        </Link>
      </div>
      <section className="flex flex-col md:flex-col md:space-x-6 py-10">
        <div className="w-full flex justify-center md:w-auto">
          <img
            className="rounded-lg w-full sm:w-80"
            src={`${baseUrl}${article.image.url}`}
            alt={article.Title}
          />
        </div>
        <div className="w-full md:flex-1 flex flex-col mt-6 md:mt-0 mx-auto container text-center sm:px-12 lg:px-28 max-w-full">
          <div className="flex-1  ">
            <h2 className="text-black text-4xl mt-8 font-bold">
              {article.Title}{' '}
            </h2>
            <p className="text-black text-justify text-lg mt-5 px-8 ">
              {article.Content}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const article = await fetchQuery('articles', `${params.slug}`);
  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const articles = await fetchQuery('articles');
  const paths = articles.map((article) => {
    return {
      params: { slug: String(article.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export default Article;
