import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import {Container} from '@material-ui/core'
import ApplicationList from '../../../shared/components/driver-applications/ApplicationList'


const Applications: NextPage = () => {
    return (
        <>
            <Head>
                <title>Voluteer Toronto Applications</title>
            </Head>
            <Container>
                <ApplicationList />
            </Container>
        </>
    )
}

export default Applications