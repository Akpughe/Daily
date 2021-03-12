import '../styles/globals.css';
import '../styles/tailwind.css';
import App from 'next/app';
import Head from 'next/head';
import absoluteUrl from "next-absolute-url";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Daily Devotional" />
        <title>Devotional</title>
        <link rel="shortcut icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}




export default MyApp;
