import { Container } from '@material-ui/core';
import { NextPage } from 'next';
import Head from 'next/head';
import React, {useState} from 'react';

import DriversRegistrationCurrentSlide from '../shared/components/drivers-registration/CurrentSlide';

const DriverRegistration: NextPage = () => {
    //The aim of this page is to facilitate a multipage "form"
    //For the navigation within registration, the "current slide" is saved in state
    //The next and previous buttons component will increment and decrement the current slide
    //Whether the user can navigate, next, previous, or submit, is determined by "current slide"
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
                {/* Navigation buttons component: conditional Previous/Next/Submit buttons*/}
            </Container>
        </>
    )
}

export default DriverRegistration;