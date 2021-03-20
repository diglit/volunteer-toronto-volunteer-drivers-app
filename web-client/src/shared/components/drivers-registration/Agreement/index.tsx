import React from 'react';
/** react hook form */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
/** MUI */
import { Container, Button, Grid } from '@material-ui/core';
/** redux */
import { Agreement } from 'shared/redux/driverRegistration';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/index'

import FormInput, { CheckboxLabel } from '../FormInput';

const schema = yup.object().shape({
    agreementOptions: yup.object().shape({
        agreement1: yup.boolean().oneOf([true], "please confirm"),
        agreement2: yup.boolean().oneOf([true], "please confirm"),
        agreement3: yup.boolean().oneOf([true], "please confirm"),
        agreement4: yup.boolean().oneOf([true], "please confirm"),
    }),
    signiture: yup.string().required()
});

interface AgreementPorps {
    onSubmit: (data: Agreement) => void,
}



const AgreementSection = ({ onSubmit }: AgreementPorps): React.ReactElement => {
    const agreement = useSelector((state: RootState) => state.driversRegistration.agreement)


    /* React hook form */
    const { control, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
        defaultValues: agreement
    });

    const agreementLabel: CheckboxLabel[] = [
        { name: 'agreement1', label: 'I understand the Volunteer Toronto will provide my information to the non-profit organization that best matches my profile' },
        { name: 'agreement2', label: 'I understand that I will still be required to complete screening steps outlined by the organization I am reffered to' },
        { name: 'agreement3', label: 'I expect to receive contact from my matched organization within 2 weeks' },
        { name: 'agreement4', label: 'I agree to complete a follow-up evaluation of my experience in this Matching Program' },
    ]

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4}>

                    <Grid item>
                        <FormInput
                            formType='checkbox'
                            error={errors.agreementOptions}
                            labels={agreementLabel}
                            control={control}
                            formLabel='Please confirm the following:'
                            name='agreementOptions'
                        />
                    </Grid>

                    <Grid item >
                        <FormInput
                            formType='textInput'
                            error={errors.signiture}
                            control={control}
                            labels={[]}
                            formLabel='Print name as signature'
                            name='signiture'
                        />
                    </Grid>

                    <Grid item>
                        <Button id="saveAgreement" type="submit" variant="contained">SAVE</Button>
                    </Grid>

                </Grid>
            </form>
        </Container>
    );
};

export default AgreementSection