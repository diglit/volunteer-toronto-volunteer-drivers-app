import React from 'react';

import PersonalInfo from '../PersonalInfo/index'
import PreScreenRequirements from '../PreScreenRequirements/index';

import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../../redux/index'
import { PreScreen, setPreScreen } from '../../../redux/driverRegistration';

interface Props {
    currentSlide: number
}


const DriversRegistrationCurrentSlide = ({ currentSlide }: Props): React.ReactElement => {
    /* redux store */
    const dispatch = useDispatch()
    const driversRegistration = useSelector((state: RootState) => state.driversRegistration)
    const savePreScreen = (data: PreScreen) => {
        console.log("Submitting..");
        console.log(data);
        // console.log('errors', errors);
        const newState = { ...driversRegistration.preScreen, ...data }
        dispatch(setPreScreen(newState))
    };

    //Intention of this component: import the components for 
    //Personal Info Page, etc., then insert into corresponding switch case
    switch (currentSlide) {
        case 1:
            return <PersonalInfo />;
        case 2:
            return <div>Your Needs</div>; //holdover until registration components are made, see case 1
        case 3:
            return <PreScreenRequirements onSubmit={savePreScreen} defaultValues={driversRegistration.preScreen}/>;
        case 4:
            return <div>Agreement</div>; //holdover until registration components are made, see case 1
        case 5:
            return <div>Review</div>; //holdover until registration components are made, see case 1
        default:
            return <PersonalInfo />;
    }
}

export default DriversRegistrationCurrentSlide;