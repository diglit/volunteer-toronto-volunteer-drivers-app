import React from 'react';

import PersonalInfo from '../PersonalInfo/index'
import PreScreenRequirements from '../PreScreenRequirements/index';

import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../../redux/index'
import { Agreement, setAgreement, PreScreen, setPreScreen } from '../../../redux/driverRegistration';
import AgreementSection from '../Agreement';

interface Props {
    currentSlide: number
}


const DriversRegistrationCurrentSlide = ({ currentSlide }: Props): React.ReactElement => {
    /* redux store */
    const dispatch = useDispatch()
    const driversRegistration = useSelector((state: RootState) => state.driversRegistration)
    
    const savePreScreen = (data: PreScreen) => {
        const newState = { ...driversRegistration.preScreen, ...data }
        dispatch(setPreScreen(newState))
    };

    const saveAgreement = (data: Agreement) => {
        const newState = { ...driversRegistration.agreement, ...data }
        dispatch(setAgreement(newState))
    };

    //Intention of this component: import the components for 
    //Personal Info Page, etc., then insert into corresponding switch case
    switch (currentSlide) {
        case 1:
            return <PersonalInfo />;
        case 2:
            return <div>Your Needs</div>; //holdover until registration components are made, see case 1
        case 3:
            return <PreScreenRequirements onSubmit={savePreScreen} />;
        case 4:
            return <AgreementSection onSubmit={saveAgreement}/>; //holdover until registration components are made, see case 1
        case 5:
            return <div>Review</div>; //holdover until registration components are made, see case 1
        default:
            return <PersonalInfo />;
    }
}

export default DriversRegistrationCurrentSlide;