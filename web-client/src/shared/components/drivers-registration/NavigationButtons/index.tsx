import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'; 

interface Props {
    currentSlide: number,
    numberOfSlides: number,
    nextSlide(event: React.MouseEvent): void,
    prevSlide(event: React.MouseEvent): void,
}

const NavigationButtons = ({currentSlide, numberOfSlides, nextSlide, prevSlide}: Props) => {

    return (
        <>
            <ButtonGroup size="large">
                {currentSlide > 1 ?
                <Button
                color="secondary"
                variant="contained"
                onClick={prevSlide}
                >Previous
                </Button>
                :<></> }

                {currentSlide < numberOfSlides ? 
                <Button
                color="primary"
                variant="contained"
                onClick={nextSlide}
                >Next
                </Button>
                : <></> }

                {currentSlide === numberOfSlides ?
                <Button

                >Submit</Button>
                :<></> }

                



            </ButtonGroup>
        </>
    )
}

export default NavigationButtons;