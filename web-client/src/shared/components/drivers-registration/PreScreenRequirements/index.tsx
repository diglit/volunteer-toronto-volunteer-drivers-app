import React from 'react';
/** react hook form */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
/** MUI */
import { Button, Box } from '@material-ui/core';
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
    haveVan: yup.boolean(),
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box m={3}>
        <FormInput
          formType='radio'
          error={errors.policeRecordsCheckOptions}
          labels={policeRecordsCheckOptionsLabel}
          control={control}
          formLabel='Police Records Check Requirements'
          name='policeRecordsCheckOptions'
        />
      </Box >

      {policeCheck.includes('I have') && (
        <>
          <Box m={3}>
            <FormInput
              formType='dateInput'
              error={errors.policeRecordsCheckDate}
              control={control}
              labels={[]}
              formLabel='Please indicate the date and type of check completed'
              name='policeRecordsCheckDate'
            />
          </Box >

          <Box m={3}>
            <FormInput
              formType='select'
              error={errors.policeRecordsCheckType}
              labels={policeRecordsCheckTypeLabel}
              control={control}
              formLabel='Indicate the type of check here.'
              name='policeRecordsCheckType'
            />
          </Box >
        </>
      )}

      <Box m={3}>
        <FormInput
          formType='radio'
          error={errors.drivingAbstractOptions}
          labels={drivingAbstractOptionsLabel}
          control={control}
          formLabel='Driving Abstract Options'
          name='drivingAbstractOptions'
        />
      </Box >

      {drivingAbstract.includes('I have') && (
        <>
          <Box m={3}>
            <FormInput
              formType='dateInput'
              error={errors.drivingAbstractDate}
              control={control}
              labels={[]}
              formLabel='Please indicate the date and type of check completed'
              name='drivingAbstractDate'
            />
          </Box >
        </>
      )}

      <Box m={3}>
        <FormInput
          formType='checkbox'
          error={errors.LicenseAndVehicle}
          labels={LicenseAndVehicleLabel}
          control={control}
          formLabel='Vehicle/License Requirements (Choose all that apply)'
          name='LicenseAndVehicle'
        />
      </Box >

      <Box m={3}>
        <FormInput
          formType='select'
          error={errors.LicenseClasses}
          labels={LicenseClasses}
          control={control}
          formLabel='Please indicate other license classes here.'
          name='LicenseClasses'
        />
      </Box >

      <Box m={3}>
        <Button id="savePrescreen" type="submit" variant="contained">SAVE</Button>
      </Box>
    </form>
  );
};

export default PreScreenRequirements