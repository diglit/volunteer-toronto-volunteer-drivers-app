import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import SignInPage from "../shared/components/SignInPage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <SignInPage />
    </>
  );
};

export default Home;