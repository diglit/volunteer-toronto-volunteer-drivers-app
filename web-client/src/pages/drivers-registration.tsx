import { Container } from '@material-ui/core';
import { NextPage } from 'next';
import Head from 'next/head';
import React, {useState} from 'react';

import DriversRegistrationCurrentSlide from '../shared/components/drivers-registration/CurrentSlide';

const DriverRegistration: NextPage = () => {
    const [currentSlide,setCurrentSlide] = useState(1);
    const numberOfSlides = 5;

    const nextSlide = (event: React.ChangeEvent): void =>{
        event.stopPropagation();
        setCurrentSlide(currentSlide + 1);
    }

    const prevSlide = (event: React.ChangeEvent): void =>{
        event.stopPropagation();
        setCurrentSlide(currentSlide - 1);
    }


    return (
        <>
            <Head>
                <title>Register as volunteer driver</title>
            </Head>
            <Container>
                <DriversRegistrationCurrentSlide currentSlide={currentSlide} />
                {/* buttons below switch, currently on buttons */}
            </Container>
        </>
    )
}

export default DriverRegistration;