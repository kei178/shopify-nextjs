import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { AppProps } from 'next/app';

// polaris
import translations from '@shopify/polaris/locales/ja.json';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/styles.css';

// shopify app-bridge-react
import { Provider } from '@shopify/app-bridge-react';
import Cookies from 'js-cookie';

// apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include',
  },
});

class MyApp extends App {
  render() {
    const { Component, pageProps }: AppProps = this.props;
    const { NEXT_PUBLIC_SHOPIFY_API_KEY } = process.env;
    const config = {
      apiKey: NEXT_PUBLIC_SHOPIFY_API_KEY,
      shopOrigin: Cookies.get('shopOrigin'),
      forceRedirect: true,
    };
    return (
      <React.Fragment>
        <Head>
          <title>Shopify Demo</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config={config}>
          <AppProvider i18n={translations}>
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </AppProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default MyApp;
