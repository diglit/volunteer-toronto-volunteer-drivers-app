import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../../redux/index'

import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

import { Button, TextField, Grid, FormControl, FormLabel, FormGroup, makeStyles, Theme, createStyles } from '@material-ui/core';

import FormCheckbox from "./FormCheckbox";
import { PreScreenRequirement, setPreScreenRequirement } from 'shared/redux/driverRegistration';

// const schema = yup.object().shape({
//   policeRecordsCheckRequirements: yup.array(),
//   policeRecordsCheckDate: yup.date(),
//   policeRecordsCheckType: yup.string(),
//   drivingAbstractRequirements: yup.array(),
//   drivingAbstractDate: yup.date(),
//   VehicleAndLicense: yup.array()
// });

// yup.object({
//   terms: yup
//     .boolean()
//     .oneOf([true], 'Must Accept Terms and Conditions'),
// });


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    section: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  }),
);

const PreScreenRequirements = (): React.ReactElement => {
  const classes = useStyles();

  const dispatch = useDispatch()
  const preScreenRequirement = useSelector((state: RootState) => state.driversRegistration.preScreenRequirement)
  const { register, control, handleSubmit } = useForm({
    // resolver: yupResolver(schema),
    defaultValues: preScreenRequirement
  });

  const onSubmit = (data: PreScreenRequirement) => {
    console.log("Submitting..");
    console.log(data);
    const newState = { ...preScreenRequirement, ...data }
    dispatch(setPreScreenRequirement(newState))
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl component="fieldset" >
          <Grid container className={classes.section}>
            <FormControl component="fieldset" >
              <FormLabel component="legend">Police Records Check Requirements (Choose all that apply)</FormLabel>
              <FormGroup>
                <FormCheckbox
                  data={preScreenRequirement}
                  name='policeRecordsCheckRequirements'
                  control={control}
                  register={register}
                />
              </FormGroup>
            </FormControl>
          </Grid >

          <Grid container className={classes.section}>
            <FormControl component="fieldset" >
              <FormLabel>If you have completed a police records check, please indicate the date and type of check completed</FormLabel>
              <label></label>
              <Grid item >
                <Controller
                  as={TextField}
                  type="date"
                  defaultValue={preScreenRequirement.policeRecordsCheckDate}
                  control={control}
                  name='policeRecordsCheckDate'
                />
              </Grid>
              <Grid item >
                <Controller
                  as={TextField}
                  label="Indicate the type of check here."
                  fullWidth
                  defaultValue={preScreenRequirement.policeRecordsCheckType}
                  control={control}
                  name='policeRecordsCheckType'
                />
              </Grid>
            </FormControl>
          </Grid>

          <Grid container className={classes.section}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Driving Abstract requirements (Choose all that apply)</FormLabel>
              <FormGroup>
                <FormCheckbox
                  data={preScreenRequirement}
                  name='drivingAbstractRequirements'
                  control={control}
                  register={register}
                />
              </FormGroup>
            </FormControl>
          </Grid>

          <Grid container className={classes.section}>
            <FormControl component="fieldset" >
              <FormLabel>If you have completed a drivig abstract, please indicate the date and type of check completed</FormLabel>
              <label></label>
              <Grid item >
                <Controller
                  as={TextField}
                  type="date"
                  defaultValue={preScreenRequirement.drivingAbstractDate}
                  control={control}
                  name='drivingAbstractDate'
                />
              </Grid>
            </FormControl>
          </Grid>

          <Grid container className={classes.section}>
            <FormControl component="fieldset">
              <FormLabel component="label">Vehicle/License Requirements (Choose all that apply)</FormLabel>
              <FormGroup>
                <FormCheckbox
                  data={preScreenRequirement}
                  name='LicenseAndVehicle'
                  control={control}
                  register={register}
                />
              </FormGroup>

              <Grid item >
                <Controller
                  as={TextField}
                  label="Please indicate other license classes here."
                  fullWidth
                  defaultValue={preScreenRequirement.LicenseClassesOther}
                  control={control}
                  name='LicenseClassesOther'
                />
              </Grid>
              
            </FormControl>
          </Grid>

          <Button type="submit" variant="contained">SAVE</Button>

        </FormControl>
      </form>
    </>
  );
};


export default PreScreenRequirements