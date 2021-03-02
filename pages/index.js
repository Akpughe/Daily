import Head from 'next/head';
import Layout from '../components/layout';
import { fetchQuery } from '../utils';
import Card from '../components/card';

export default function Home({ articles }) {
  return (
    <>
      <Layout>
        <div className="bg-gray-100">
          <section className="mx-auto container grid grid-cols-1 sm:grid-cols-2 py-10 gap-1 sm:gap-6 lg:gap-10 items-stretch md:grid-cols-3 lg:grid-cols-4">
            {articles.map((article) => (
              <Card key={article.Title} article={article} />
            ))}
          </section>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const articles = await fetchQuery('articles');
  return {
    props: {
      articles,
    },
  };
}
