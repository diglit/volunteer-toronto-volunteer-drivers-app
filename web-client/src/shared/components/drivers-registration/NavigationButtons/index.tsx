import React from 'react';

interface Props {
    currentSlide: number,
    numberOfSlides: number,
    nextSlide(event: React.ChangeEvent): void,
    prevSlide(event: React.ChangeEvent): void,
}

const NavigationButtons = ({currentSlide, numberOfSlides, nextSlide, prevSlide}: Props) => {
    return (
        <></>
    )
}

export default NavigationButtons;