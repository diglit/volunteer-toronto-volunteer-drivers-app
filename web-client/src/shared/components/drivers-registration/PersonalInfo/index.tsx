import React from 'react';
import {PersonalInfoFormInput} from '../../../redux/driversRegistration'

interface PersonalInfoPropTypes {
    onSubmit: (data:PersonalInfoFormInput)=>void
}

const PersonalInfo = (props:PersonalInfoPropTypes): React.ReactElement => {
    // to silent linter warning
    console.log(props)
    return (
        <div>First Name</div>
    )
}

export default PersonalInfo;