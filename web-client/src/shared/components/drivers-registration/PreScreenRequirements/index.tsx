import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../../redux/index'

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

import { Container, Button, TextField, Grid, FormControl, FormLabel, FormGroup, Radio, RadioGroup, FormControlLabel, Select, MenuItem, makeStyles, Theme, createStyles } from '@material-ui/core';

import FormCheckbox from "./FormCheckbox";
import { PreScreen, setPreScreen } from 'shared/redux/driverRegistration';

// const schema = yup.object().shape({
//   policeRecordsCheckOptions: yup.array(),
//   policeRecordsCheckDate: yup.date(),
//   policeRecordsCheckType: yup.string(),
//   drivingAbstractOptions: yup.array(),
//   drivingAbstractDate: yup.date(),
//   VehicleAndLicense: yup.array()
// });

// yup.object({
//   terms: yup
//     .boolean()
//     .oneOf([true], 'Must Accept Terms and Conditions'),
// });

const PreScreenRequirements = (): React.ReactElement => {
  const dispatch = useDispatch()
  const preScreen = useSelector((state: RootState) => state.driversRegistration.preScreen)
  const { register, control, handleSubmit } = useForm({
    // resolver: yupResolver(schema),
    defaultValues: preScreen
  });

  const onSubmit = (data: PreScreen) => {
    console.log("Submitting..");
    console.log(data);
    const newState = { ...preScreen, ...data }
    dispatch(setPreScreen(newState))
  };

  const policeRecordsCheckOptionsLabel = [
    'I have completed a police records check in the last 6 months',
    'I have completed a police records check in the last 12 months',
    'I am willing to complete a police records check in order to volunteer as a driver',
    'I am NOT willing to complete a police records check in order to volunteer as a driver',
  ]

  const policeRecordsCheckTypeLabel = [
    'Criminal Record Checks',
    'Criminal Record and Judicial Matters Checks',
    'Vulnerable Sector Checks'
  ]

  const drivingAbstractOptionsLabel = [
    'I have a clear drving abstract completed within the last 6 months',
    'I have a clear driving abstract completed within the last 12 months',
    'I am willing to complete a drving abstract in order to volunteer as a drvier',
    'I am NOT willing to complete a driving abstract in order to volunteer as a driver'
  ]

  const LicenceClasses = ['None', 'A', 'B', 'C', 'D', 'E', 'F', 'G1', 'G2', 'M', 'M with L condition', 'M1', 'M2', 'M2 with L condition']

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {/* <Grid item>
          <FormControl component="fieldset" >
            <FormLabel component="legend">Police Records Check Requirements (Choose all that apply)</FormLabel>
            <FormGroup>
              <FormCheckbox
                data={preScreen}
                name='policeRecordsCheckOptions'
                control={control}
                register={register}
              />
            </FormGroup>
          </FormControl>
        </Grid > */}

          <Grid item >
            <FormControl component="fieldset">
              <FormLabel component="legend">Police Records Check Requirements</FormLabel>
              <Controller
                as={
                  <RadioGroup
                    name='policeRecordsCheckOptions'
                    value={preScreen.policeRecordsCheckOptions} >
                    {policeRecordsCheckOptionsLabel.map((label: string) =>
                      <FormControlLabel
                        value={label}
                        control={<Radio />}
                        label={label}
                        key={label} />
                    )}
                  </RadioGroup>
                }
                name='policeRecordsCheckOptions'
                control={control}
              />
            </FormControl>
          </Grid>

          <Grid item >
            <FormControl component="fieldset" >
              <FormLabel>If you have completed a police records check, please indicate the date and type of check completed</FormLabel>
              <Controller
                as={TextField}
                type="date"
                value={preScreen.policeRecordsCheckDate}
                control={control}
                name='policeRecordsCheckDate'
              />
            </FormControl>
          </Grid>

          <Grid item >
            <FormControl component="fieldset">
              <FormLabel component="legend">Indicate the type of check here.</FormLabel>
              <Controller
                as={
                  <Select value={preScreen.policeRecordsCheckType}>
                    {policeRecordsCheckTypeLabel.map((label: string) =>
                      <MenuItem
                        value={label}
                        key={label}>
                        {label}
                      </MenuItem>
                    )}
                  </Select>
                }
                name='policeRecordsCheckType'
                value={preScreen.policeRecordsCheckType}
                control={control}
              />
            </FormControl>
          </Grid>

          <Grid item >
            <FormControl component="fieldset">
              <FormLabel component="legend">Driving Abstract Options</FormLabel>
              <Controller
                as={
                  <RadioGroup name='drivingAbstractOptions' value={preScreen.drivingAbstractOptions} >
                    {drivingAbstractOptionsLabel.map((label: string) =>
                      <FormControlLabel
                        value={label}
                        control={<Radio />}
                        label={label}
                        key={label} />
                    )}
                  </RadioGroup>
                }
                name='drivingAbstractOptions'
                control={control}
              />
            </FormControl>
          </Grid>

          <Grid item >
            <FormControl component="fieldset" >
              <FormLabel>If you have completed a drivig abstract, please indicate the date and type of check completed</FormLabel>
              <Controller
                as={TextField}
                type="date"
                value={preScreen.drivingAbstractDate}
                control={control}
                name='drivingAbstractDate'
              />
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl component="fieldset">
              <FormLabel component="label">Vehicle/License Requirements (Choose all that apply)</FormLabel>
              <FormGroup>
                <FormCheckbox
                  data={preScreen}
                  name='LicenseAndVehicle'
                  control={control}
                  register={register}
                />
              </FormGroup>
            </FormControl>
          </Grid>

          <Grid item >
            <FormControl component="fieldset">
              <FormLabel component="legend">Please indicate other license classes here.</FormLabel>
              <Controller
                as={
                  <Select value={preScreen.LicenseClassesOther}>
                    {LicenceClasses.map((label: string) =>
                      <MenuItem value={label} key={label}>{label}</MenuItem>
                    )}
                  </Select>
                }
                name='policeRecordsCheckType'
                value={preScreen.LicenseClassesOther}
                control={control}
              />
            </FormControl>
          </Grid>

          <Grid item>
            <Button type="submit" variant="contained">SAVE</Button>
          </Grid>

        </Grid>
      </form>
    </Container>
  );
};


export default PreScreenRequirements