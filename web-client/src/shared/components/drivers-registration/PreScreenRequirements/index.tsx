import React from 'react';
/** react hook form */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
/** MUI */
import { Container, Button, Grid } from '@material-ui/core';
/** redux */
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/index'
import { PreScreen } from '../../../redux/driversRegistration';

import { policeRecordsCheckOptionsLabel, policeRecordsCheckTypeLabel, drivingAbstractOptionsLabel, LicenseAndVehicleLabel, LicenseClasses } from './label';
import FormInput from '../FormInput';

const schema = yup.object().shape({
  policeRecordsCheckOptions: yup.string().required(),
  /**  required field when they have police record check */
  policeRecordsCheckDate: yup.string().when('policeRecordsCheckOptions', {
    is: (value: string) => value.includes('I have'),
    then: yup.string().required()
  }),
  policeRecordsCheckType: yup.string().when('policeRecordsCheckOptions', {
    is: (value: string) => value.includes('I have'),
    then: yup.string().required()
  }),
  drivingAbstractOptions: yup.string().required(),
  drivingAbstractDate: yup.string().when('drivingAbstractOptions', {
    is: (value: string) => value.includes('I have'),
    then: yup.string().required()
  }),
  LicenseAndVehicle: yup.object().shape({
    haveCar: yup.boolean(),
    haveGLicense: yup.boolean(),
    have1MInsurance: yup.boolean(),
    have2MInsurance: yup.boolean(),
  }),
  LicenseClasses: yup.string()
});

interface PreScreenPorps {
  onSubmit: (data: PreScreen) => void,
}

const PreScreenRequirements = ({ onSubmit }: PreScreenPorps): React.ReactElement => {
  const preScreen = useSelector((state: RootState) => state.driversRegistration.preScreen)


  /* React hook form */
  const { control, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
    defaultValues: preScreen
  });

  /* Use for show or hide optional field */
  const policeCheck = watch('policeRecordsCheckOptions')
  const drivingAbstract = watch('drivingAbstractOptions')

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>

          <Grid item >
            <FormInput
              formType='radio'
              error={errors.policeRecordsCheckOptions}
              labels={policeRecordsCheckOptionsLabel}
              control={control}
              formLabel='Police Records Check Requirements'
              name='policeRecordsCheckOptions'
            />
          </Grid>

          {policeCheck.includes('I have') && (
            <>
              <Grid item >
                <FormInput
                  formType='dateInput'
                  error={errors.policeRecordsCheckDate}
                  control={control}
                  labels={[]}
                  formLabel='Please indicate the date and type of check completed'
                  name='policeRecordsCheckDate'
                />
              </Grid>

              <Grid item >
                <FormInput
                  formType='select'
                  error={errors.policeRecordsCheckType}
                  labels={policeRecordsCheckTypeLabel}
                  control={control}
                  formLabel='Indicate the type of check here.'
                  name='policeRecordsCheckType'
                />
              </Grid>
            </>
          )}

          <Grid item >
            <FormInput
              formType='radio'
              error={errors.drivingAbstractOptions}
              labels={drivingAbstractOptionsLabel}
              control={control}
              formLabel='Driving Abstract Options'
              name='drivingAbstractOptions'
            />
          </Grid>

          {drivingAbstract.includes('I have') && (
            <>
              <Grid item >
                <FormInput
                  formType='dateInput'
                  error={errors.drivingAbstractDate}
                  control={control}
                  labels={[]}
                  formLabel='Please indicate the date and type of check completed'
                  name='drivingAbstractDate'
                />
              </Grid>
            </>
          )}

          <Grid item>
            <FormInput
              formType='checkbox'
              error={errors.LicenseAndVehicle}
              labels={LicenseAndVehicleLabel}
              control={control}
              formLabel='Vehicle/License Requirements (Choose all that apply)'
              name='LicenseAndVehicle'
            />
          </Grid>

          <Grid item >
            <FormInput
              formType='select'
              error={errors.LicenseClasses}
              labels={LicenseClasses}
              control={control}
              formLabel='Please indicate other license classes here.'
              name='LicenseClasses'
            />
          </Grid>

          <Grid item>
            <Button id="savePrescreen" type="submit" variant="contained">SAVE</Button>
          </Grid>

        </Grid>
      </form>
    </Container>
  );
};

export default PreScreenRequirements