import { Container } from '@material-ui/core';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import DriversRegistrationCurrentSlide from '../shared/components/drivers-registration/CurrentSlide';

const DriverRegistration: NextPage = () => {

    return (
        <>
            <Head>
                <title>Register as volunteer driver</title>
            </Head>
            <Container>
                <DriversRegistrationCurrentSlide />
            </Container>
        </>
    )
}

export default DriverRegistration;