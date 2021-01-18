import { Container } from '@material-ui/core';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import DriversSearchFilters from 'shared/components/drivers-search/Filters';
import DriversSearchList from 'shared/components/drivers-search/List';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hello drivers</title>
      </Head>
      <Container>
        <DriversSearchFilters />
        <DriversSearchList />
      </Container>
    </>
  );
};

export default Home;
