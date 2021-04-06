import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Container } from '@material-ui/core'
import Head from 'next/head'
import ApplicationReview from '../../../shared/components/volunteer-toronto/driver-applications/ApplicationReview'

const Applications: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>Voluteer Toronto Applications</title>
      </Head>
      <Container>
        <ApplicationReview id={parseInt(id as string)} />
      </Container>
    </>
  )
}

export default Applications