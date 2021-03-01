import React from 'react';
import Layout from '../../components/layout';
import { baseUrl, fetchQuery } from '../../utils';
import Link from 'next/link';

const Article = ({ article }) => {
  return (
    <Layout>
      <div className="pt-6">
        <Link href="/">
          <a className="text-red-500">&larr; Back to home</a>
        </Link>
      </div>
      <section className="flex flex-col md:flex-row md:space-x-6 py-10">
        <div className="w-full md:w-auto">
          <img
            className="rounded-lg w-full sm:w-64"
            src={`${baseUrl}${article.image.url}`}
            alt={article.Title}
          />
        </div>
        <div className="w-full md:flex-1 flex flex-col mt-6 md:mt-0">
          <div className="flex-1">
            <h2 className="text-black text-2xl font-semibold">
              {article.Title}{' '}
            </h2>
            <p className="text-black text-lg mt-5">{article.Content}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};


export async function getStaticProps({ params }) {
  const article = await fetchQuery('articles', `${params.slug}`)
  return {
    props: {
      article
    }
  }
}

export async function getStaticPaths() {
  const articles = await fetchQuery('articles')
  const paths = articles.map((article) => {
    return {
      params: { slug: String(article.id) }
    }
  })
  return {
    paths,
    fallback: false
  }
}


export default Article;
