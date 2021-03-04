import React from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from '../../../redux/index'
// import { PreScreen, setPreScreen } from 'shared/redux/driverRegistration';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Container, Button, Grid } from '@material-ui/core';
import { FormRadio, FormDateInput, FormSelect, FormCheckbox } from './FormElement'

import { policeRecordsCheckOptionsLabel, policeRecordsCheckTypeLabel, drivingAbstractOptionsLabel, LicenseAndVehicleLabel, LicenseClasses } from './label';
import { PreScreen } from 'shared/redux/driverRegistration';


const schema = yup.object().shape({
  policeRecordsCheckOptions: yup.string().required(),
  /* required field when they have police record check */
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
  defaultValues: PreScreen
}

const PreScreenRequirements = ({ onSubmit, defaultValues }: PreScreenPorps): React.ReactElement => {
  /* React hook form */
  const { control, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues
  });

  /* Use for show or hide optional field */
  const policeCheck = watch('policeRecordsCheckOptions')
  const drivingAbstract = watch('drivingAbstractOptions')

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>

          <Grid item >
            <FormRadio
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
                <FormDateInput
                  error={errors.policeRecordsCheckDate}
                  control={control}
                  labels={[]}
                  formLabel='Please indicate the date and type of check completed'
                  name='policeRecordsCheckDate'
                />
              </Grid>

              <Grid item >
                <FormSelect
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
            <FormRadio
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
                <FormDateInput
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
            <FormCheckbox
              error={errors.LicenseAndVehicle}
              labels={LicenseAndVehicleLabel}
              control={control}
              formLabel='Vehicle/License Requirements (Choose all that apply)'
              name='LicenseAndVehicle'
            />
          </Grid>

          <Grid item >
            <FormSelect
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