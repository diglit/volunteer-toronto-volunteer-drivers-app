import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'shared/redux';

import GlobalStyle from 'shared/styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

      <GlobalStyle />
    </>
  );
};

export default App;
