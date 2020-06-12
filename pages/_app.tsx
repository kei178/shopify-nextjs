import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { AppProps } from 'next/app';

// polaris
import translations from '@shopify/polaris/locales/ja.json';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/styles.css';

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Shopify Demo</title>
          <meta charSet="utf-8" />
        </Head>
        <AppProvider i18n={translations}>
          <Component {...pageProps} />
        </AppProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
