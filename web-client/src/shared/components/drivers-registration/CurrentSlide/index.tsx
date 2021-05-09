import React from 'react';

import PersonalInfoSection from 'shared/components/drivers-registration/PersonalInfo';
import YourNeedsSection from 'shared/components/drivers-registration/YourNeeds';
import PreScreenRequirements from 'shared/components/drivers-registration/PreScreenRequirements';
import AgreementSection from 'shared/components/drivers-registration/Agreement';
import ReviewSection from 'shared/components/drivers-registration/Review';

import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../../redux/index';
import { Agreement, setAgreement, PreScreen, setPreScreen, PersonalInfo, setPersonalInfo } from '../../../redux/driversRegistration';
import { Box, Typography, AppBar, Button, StepLabel, Step, Stepper, Container, Paper } from '@material-ui/core';


const getSteps = () => {
    return ['Personal Info', 'Your Needs', 'Pre-Screen Requirement', 'Agreement', 'Review'];
}

const DriversRegistrationCurrentSlide = (): React.ReactElement => {

    /* redux store */
    const dispatch = useDispatch()
    const driversRegistration = useSelector((state: RootState) => state.driversRegistration)

    const savePersonalInfo = (data: PersonalInfo) => {
        const newState = { ...driversRegistration.personalInfo, ...data }
        dispatch(setPersonalInfo(newState))
    };

    const savePreScreen = (data: PreScreen) => {
        const newState = { ...driversRegistration.preScreen, ...data }
        dispatch(setPreScreen(newState))
    };

    const saveAgreement = (data: Agreement) => {
        const newState = { ...driversRegistration.agreement, ...data }
        dispatch(setAgreement(newState))
    };

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <PersonalInfoSection onSubmit={savePersonalInfo} />;
            case 1:
                return <YourNeedsSection />;
            case 2:
                return <PreScreenRequirements onSubmit={savePreScreen} />;
            case 3:
                return <AgreementSection onSubmit={saveAgreement} />; //holdover until registration components are made, see case 1
            case 4:
                return <ReviewSection />; //holdover until registration components are made, see case 1
            default:
                return 'Unknown step';
        }
    }

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubimit = () => {
        console.log('TODO: submit');
    };

    return (
        <Container maxWidth="md">
            <AppBar color='inherit' elevation={0}>
                <Container maxWidth="md">
                    <Typography variant='h4' gutterBottom>
                        Thank you for applying to become <br />a volunteer Toronto driver
                        </Typography>
                    <Typography gutterBottom>
                        Please fill out each section fully.
                        </Typography>
                    <Paper>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label) => {
                                const stepProps: { completed?: boolean } = {};
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                    </Paper>
                </Container>
            </AppBar>

            <Box my={30}>

                {getStepContent(activeStep)}

                <div>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}>
                        Back
                    </Button>
                    {activeStep === steps.length - 1 ? (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubimit}>
                            Submit
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}>
                            Next
                        </Button>
                    )}
                </div>
            </Box>
        </Container>
    );
}

export default DriversRegistrationCurrentSlide;