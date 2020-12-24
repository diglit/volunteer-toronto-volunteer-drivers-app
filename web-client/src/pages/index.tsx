import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import Card from 'shared/components/Card';
import Code from 'shared/components/Code';
import Container from 'shared/components/Container';
import Description from 'shared/components/Description';
import Footer from 'shared/components/Footer';
import Grid from 'shared/components/Grid';
import Logo from 'shared/components/Logo';
import Main from 'shared/components/Main';
import Title from 'shared/components/Title';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lightly Opinionated Next App Starter</title>
      </Head>

      <Container>
        <Main>
          <Title>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </Title>

          <Description>
            Get started by editing <Code>pages/index.js</Code>
          </Description>

          <Grid>
            <Card href="https://nextjs.org/docs">
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </Card>

            <Card href="https://nextjs.org/learn">
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </Card>

            <Card href="https://github.com/vercel/next.js/tree/master/examples">
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </Card>

            <Card href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </Card>
          </Grid>
        </Main>

        <Footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <Logo src="/vercel.svg" alt="Vercel Logo" />
          </a>
        </Footer>
      </Container>
    </>
  );
};

export default Home;
