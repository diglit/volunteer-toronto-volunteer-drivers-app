import React from 'react';

import PersonalInfo from '../PersonalInfo/index';
import YourNeedsSection from '../YourNeeds/index';
import PreScreenRequirements from '../PreScreenRequirements/index';

import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../../redux/index'
import { Agreement, setAgreement, PreScreen, setPreScreen, PersonalInfoFormInput } from '../../../redux/driversRegistration'
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

    const savePersonalInfo = (data: PersonalInfoFormInput)=>{
        // TODO: implement save PersonalInfo Form data
        console.log(data)
    }

    //Intention of this component: import the components for 
    //Personal Info Page, etc., then insert into corresponding switch case
    switch (currentSlide) {
        case 1:
            return <PersonalInfo onSubmit = {savePersonalInfo}/>;
        case 2:
            return <YourNeedsSection />;
        case 3:
            return <PreScreenRequirements onSubmit={savePreScreen} />;
        case 4:
            return <AgreementSection onSubmit={saveAgreement}/>; //holdover until registration components are made, see case 1
        case 5:
            return <div>Review</div>; //holdover until registration components are made, see case 1
        default:
            return <PersonalInfo onSubmit={savePersonalInfo}/>;
    }
}

export default DriversRegistrationCurrentSlide;