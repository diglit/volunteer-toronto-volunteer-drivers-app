import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { TextField, FormControl, FormLabel, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


const schema = yup.object().shape({
  policeRecordCheckReq: yup.string().required(),
  age: yup.number().required(),
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
    },
    formControl: {
      margin: theme.spacing(3),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      // width: '25ch',
    },
  }),
);

const PreScreenRequirements = (): React.ReactElement => {

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }

  return (
    <>
      <FormControl component="fieldset">
        <div className={classes.root}>
          {/* https://material-ui.com/components/checkboxes/ */}
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Police Records Check Requirements (Choose all that apply)</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox  onChange={handleChange} name="gilad" />}
                label="I have completed a police records check in the last 6 months"
              />
              <FormControlLabel
                control={<Checkbox  onChange={handleChange} name="jason" />}
                label="I have completed a police records check in the last 12 months"
              />
              <FormControlLabel
                control={<Checkbox  onChange={handleChange} name="antoine" />}
                label="I am willing to complete a police records check in order to volunteer as a driver"
              />
              <FormControlLabel
                control={<Checkbox  onChange={handleChange} name="antoine" />}
                label="I am NOT willing to complete a police records check in order to volunteer as a driver"
              />
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
      <form onSubmit={handleSubmit((d) => console.log(d))}>
        <input name="name" ref={register} />
        <input name="age" type="number" ref={register} />
        <input type="submit" />
      </form>
    </>
  );
};

export default PreScreenRequirements