import React from 'react';
import {PersonalInfoFormInput} from '../../../redux/driverRegistration'

interface PersonalInfoPropTypes {
    onSubmit: (data:PersonalInfoFormInput)=>void
}

const PersonalInfo = (props:PersonalInfoPropTypes): React.ReactElement => {
    return (
        <div>First Name</div>
    )
}

export default PersonalInfo;