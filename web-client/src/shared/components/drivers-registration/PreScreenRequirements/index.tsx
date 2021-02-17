import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../../redux/index'

import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

import { Grid, FormControl, FormLabel, FormGroup } from '@material-ui/core';

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

const PreScreenRequirements = (): React.ReactElement => {

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
          <Grid>
            <FormControl component="fieldset">
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
            {/* https://material-ui.com/components/pickers/
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Police Records Check Requirements (Choose all that apply)</FormLabel>
              <Grid>
                <TextField
                  id="date"
                  type="date"
                  defaultValue={preScreenRequirement.policeRecordsCheckDate}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => handleFormInput(e.target.value, 'policeRecordsCheckDate')}
                />
              </Grid>
              <Grid>
                <TextField
                  id="standard-basic"
                  label="Indicate the type of check here."
                  fullWidth
                  className={classes.textField}
                  onChange={(e) => handleFormInput(e.target.value, 'policeRecordsCheckType')}

                />
              </Grid>
            </FormControl> */}
          </Grid>
          <button type="submit">pre submit</button>
        </FormControl>
      </form>

    </>
  );
};


export default PreScreenRequirements