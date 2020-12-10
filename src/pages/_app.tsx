import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import GlobalStyle from 'shared/styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />

      <GlobalStyle />
    </>
  );
};

export default App;
