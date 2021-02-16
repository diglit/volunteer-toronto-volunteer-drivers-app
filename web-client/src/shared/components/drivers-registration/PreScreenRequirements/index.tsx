import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../../redux/index'

// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

import { TextField, FormControl, FormLabel, FormGroup } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import FormCheckbox, { CheckboxInputs } from "./FormCheckbox";
import { setPreScreenRequirement } from 'shared/redux/driverRegistration';

// const schema = yup.object().shape({
//   policeRecordsCheckRequirements: yup.array(),
//   policeRecordsCheckDate: yup.date(),
//   policeRecordsCheckType: yup.string(),
//   drivingAbstractRequirements: yup.array(),
//   drivingAbstractDate: yup.date(),
//   VehicleAndLicense: yup.array()
// });

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
    },
    formControl: {
      margin: theme.spacing(2),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      // width: '25ch',
    },
  }),
);

const PreScreenRequirements = (): React.ReactElement => {

  const dispatch = useDispatch()
  const preScreenRequirement = useSelector((state: RootState) => state.driversRegistration.preScreenRequirement)

  // const { register } = useForm({
  //   resolver: yupResolver(schema),
  //   defaultValues: { preScreenRequirement }
  // });

  const classes = useStyles();
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event.target.value);
  // }

  const mockOptions = [
    'I have completed a police records check in the last 6 months',
    'I have completed a police records check in the last 12 months',
    'I am willing to complete a police records check in order to volunteer as a driver',
    'I am NOT willing to complete a police records check in order to volunteer as a driver',
  ]

  const mockChecks = [
    'I have completed a police records check in the last 12 months',
    'I am willing to complete a police records check in order to volunteer as a driver',
  ]

  const handlePoliceCheck = (checkboxInputs: CheckboxInputs) => {
    // console.log(checkboxInputs.data);

    const newState = {...preScreenRequirement, policeRecordsCheckRequirements: checkboxInputs.data}
    dispatch(setPreScreenRequirement(newState))
    // console.log(newState);
    
    return null
  }

  return (
    <>
      <FormControl component="fieldset">
        <div className={classes.root}>
          {/* https://material-ui.com/components/checkboxes/ */}
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Police Records Check Requirements (Choose all that apply)</FormLabel>
            <FormGroup>
              <FormCheckbox seleted={mockChecks} options={mockOptions} handleCheck={handlePoliceCheck} />
            </FormGroup>
          </FormControl>
          {/* https://material-ui.com/components/pickers/ */}
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Police Records Check Requirements (Choose all that apply)</FormLabel>
            <div>
              <TextField
                id="date"
                type="date"
                defaultValue="2021-01-01"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="Indicate the type of check here."
                fullWidth
                className={classes.textField}
              />
            </div>
          </FormControl>
        </div>

      </FormControl>

    </>
  );
};


export default PreScreenRequirements