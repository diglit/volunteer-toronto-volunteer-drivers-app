import React from 'react';

interface Props {
    currentSlide: number
}

const DriversRegistrationCurrentSlide = ({currentSlide}: Props ) => {
        //Intention of this component: import the components for 
        //Personal Info Page, etc., then insert into corresponding switch case
        switch(currentSlide) {
            case 1:
                return null; //holdover until registration components are made
            case 2:
                return null;
            case 3:
                return null;
            case 4:
                return null;
            case 5:
                return null;
            default:
                return null;
        }
}

export default DriversRegistrationCurrentSlide;