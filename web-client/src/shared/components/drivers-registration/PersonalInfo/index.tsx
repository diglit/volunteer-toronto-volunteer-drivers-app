import React from 'react';

import FormInput from './FormInput';


const PersonalInfo = (): React.ReactElement => {

    const languages = ["English", "French", "Tagalog",]

    return (
        <form>
            <FormInput
            id="firstName"
            fieldName="First Name"
            fieldAria = "first-name"
            type="string"
            />

            <FormInput
            id="lastName"
            fieldName="Last Name"
            fieldAria = "last-name"
            type="string"
            />

            <FormInput
            id="emailAddress"
            fieldName="Email Address"
            fieldAria = "email"
            type="string"
            />

            <FormInput
            id="phoneNumber"
            fieldName="Phone Number"
            fieldAria = "phone-number"
            type="number"
            />

        </form>
    )
}

export default PersonalInfo;