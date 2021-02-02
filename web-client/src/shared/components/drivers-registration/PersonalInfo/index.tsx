import React from 'react';

import FormInput from './FormInput';
import CheckboxFormInput from './CheckboxFormInput';


const PersonalInfo = (): React.ReactElement => {

    const languages = ["English", "French", "Tagalog", "Portuguese", "Spanish", "Chinese"]

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

            <CheckboxFormInput 
            options={languages}
            optionCategory="language"
            fieldName="Languages Spoken"
            />

        </form>
    )
}

export default PersonalInfo;