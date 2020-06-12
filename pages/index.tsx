import Head from 'next/head';

const Home = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Shopify Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Hi there</h1>
      </div>
    </div>
  );
};

export default Home;
