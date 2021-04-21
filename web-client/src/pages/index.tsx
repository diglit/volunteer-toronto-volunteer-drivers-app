import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

interface RedirectType {
  redirect: {
    permanent: boolean
    destination: string
  }
}
interface Props {
  [name: string]: {
    user: null | string
  }
}


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lightly Opinionated Next App Starter</title>
      </Head>
      <h1>Lightly Opinionated Next App Starter</h1>
    </>
  );
};

//mock function to get user - to be defined later if the user is signed in - either based on jsw, cookies, session etc.
const getUser = ():null | string => {
  return null
}


export const getServerSideProps = async ():Promise<RedirectType | Props> => {
  const user = await getUser();

  if(!user) {
    return {
      redirect: {
        permanent: false,
        destination: '/signin'
      }
    }
  }
  
  return {
    props: {
      user
    }
  }
}

export default Home;
