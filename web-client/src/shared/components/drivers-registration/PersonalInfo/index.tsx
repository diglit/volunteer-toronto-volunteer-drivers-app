import React from 'react';
/** react hook form */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
/** MUI */
import { Container, Button, Grid } from '@material-ui/core';
/** redux */
import { PersonalInfo } from '../../../redux/driversRegistration';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/index'

import FormInput, { CheckboxLabel } from '../FormInput';

const errorMessages = {
    required: 'Please fill the field',
    email: 'Invalid Email Address',
    phone: {
        type: 'Phone Number must be a number',
        length: 'Phone number should be 10 digits',
    }
}

const schema = yup.object().shape({
    firstName: yup.string().required(errorMessages.required),
    lastName: yup.string().required(errorMessages.required),
    emailAddress: yup.string().email(errorMessages.email).required(errorMessages.required),
    phoneNumber: yup.string().matches(/^\d*$/, {message:errorMessages.phone.type}).required(errorMessages.required).length(10,errorMessages.phone.length),
    languagesSpoken: yup.object({
        english: yup.boolean(),
        french: yup.boolean(),
        tagalog: yup.boolean(),
        portuguese: yup.boolean(),
        spanish: yup.boolean(),
        chinese: yup.boolean(),
        other: yup.boolean(),
    })
    .test('OK', 'Please select at least one language', lan => (lan.english||lan.french||lan.tagalog||lan.portuguese||lan.spanish||lan.chinese||lan.other) as boolean),
    languageOther: yup.string()
    .when('languagesSpoken', {
        is: (value: { other: boolean; }) => value.other,
        then: yup.string().required(errorMessages.required),
      }),
});

interface personalInfoPorps {
    onSubmit: (data: PersonalInfo) => void,
}



const PersonalInfoSection = ({ onSubmit }: personalInfoPorps): React.ReactElement => {
    const personalInfo = useSelector((state: RootState) => state.driversRegistration.personalInfo)


    /* React hook form */
    const { control, handleSubmit, errors, watch } = useForm({
        resolver: yupResolver(schema),
        defaultValues: personalInfo
    });

    const otherLanguage = watch('languagesSpoken').other

    const languageLabel: CheckboxLabel[] = [
        { name: 'english', label: 'English' },
        { name: 'french', label: 'French' },
        { name: 'tagalog', label: 'Tagalog' },
        { name: 'portuguese', label: 'Portuguess' },
        { name: 'spanish', label: 'Spanish' },
        { name: 'chinese', label: 'Chinese' },
        { name: 'other', label: 'Other' },
    ]

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4}>

                    <Grid item >
                        <FormInput
                            formType='textInput'
                            error={errors.firstName}
                            control={control}
                            labels={'first-name'}
                            formLabel='First Name'
                            name='firstName'
                        />
                    </Grid>

                    <Grid item >
                        <FormInput
                            formType='textInput'
                            error={errors.lastName}
                            control={control}
                            labels={'last-name'}
                            formLabel='Last Name'
                            name='lastName'
                        />
                    </Grid>

                    <Grid item >
                        <FormInput
                            formType='textInput'
                            error={errors.emailAddress}
                            control={control}
                            labels={'email'}
                            formLabel='Email Address'
                            name='emailAddress'
                        />
                    </Grid>

                    <Grid item >
                        <FormInput
                            formType='textInput'
                            error={errors.phoneNumber}
                            control={control}
                            labels={'phone-number'}
                            formLabel='Phone Number'
                            name='phoneNumber'
                        />
                    </Grid>

                    <Grid item>
                        <FormInput
                            formType='checkbox'
                            error={errors.languagesSpoken}
                            labels={languageLabel}
                            control={control}
                            formLabel='Language Spoken'
                            name='languagesSpoken'
                        />
                    </Grid>

                    {otherLanguage &&
                        <Grid item >
                            <FormInput
                                formType='textInput'
                                error={errors.languageOther}
                                control={control}
                                labels={'other-language'}
                                formLabel='Other Language'
                                name='languageOther'
                            />
                        </Grid>
                    }
                </Grid>

                <Grid>
                    <Button type="submit" variant="contained">SAVE</Button>
                </Grid>
            </form>
        </Container>
    );
};

export default PersonalInfoSection