import React from 'react';

import PersonalInfo from '../PersonalInfo/index';
import YourNeedsSection from '../YourNeeds/index';

interface Props {
    currentSlide: number
}

const DriversRegistrationCurrentSlide = ({currentSlide}: Props ): React.ReactElement => {
        //Intention of this component: import the components for 
        //Personal Info Page, etc., then insert into corresponding switch case
        switch(currentSlide) {
            case 1:
                return <PersonalInfo />; 
            case 2:
                return <YourNeedsSection />; //holdover until registration components are made, see case 1
            case 3:
                return <div>Pre-Screen Requirements</div>; //holdover until registration components are made, see case 1
            case 4:
                return <div>Agreement</div>; //holdover until registration components are made, see case 1
            case 5:
                return <div>Review</div>; //holdover until registration components are made, see case 1
            default:
                return <PersonalInfo />;
        }
}

export default DriversRegistrationCurrentSlide;