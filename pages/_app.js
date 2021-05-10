import Head from 'next/head';

import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shoe customizer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
