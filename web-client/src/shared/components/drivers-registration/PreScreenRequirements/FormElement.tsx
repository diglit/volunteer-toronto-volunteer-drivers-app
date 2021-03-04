import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core';
import React from 'react';
import { Control, Controller, DeepMap, FieldError } from 'react-hook-form';
import { PreScreen } from 'shared/redux/driverRegistration';
import { CheckboxLabel } from './label';

interface Props {
  error: FieldError | undefined,
  labels: string[],
  control: Control<PreScreen>,
  formLabel: string,
  name: string,
}

export const FormRadio = ({ error, labels, control, formLabel, name }: Props): React.ReactElement => {
  return (
    <FormControl
      error={error ? true : false}
      component="fieldset">
      <FormLabel component="legend">{formLabel}</FormLabel>
      <Controller
        as={
          <RadioGroup
            >
            {labels.map((label: string) =>
              <FormControlLabel
                value={label}
                control={<Radio />}
                label={label}
                key={label} />
            )}
          </RadioGroup>
        }
        name={name}
        control={control}
      />
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  )
}

export const FormDateInput = ({ error, formLabel, control, name }: Props): React.ReactElement => {
  return (
    <FormControl component="fieldset" error={error ? true : false}>
      <FormLabel>{formLabel}</FormLabel>
      <Controller
        as={TextField}
        type="date"
        control={control}
        name={name}
      />
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  )
}

export const FormSelect = ({ error, labels, control, formLabel, name }: Props): React.ReactElement => {
  return (
    <FormControl component="fieldset" error={error ? true : false} >
      <FormLabel component="legend">{formLabel}</FormLabel>
      <Controller
        as={
          <Select
          // value={value}
          >
            {labels.map((label: string) =>
              <MenuItem
                value={label}
                key={label}>
                {label}
              </MenuItem>
            )}
          </Select>
        }
        name={name}
        control={control}
      />
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  )
}


interface Props2 {
  error: DeepMap<Record<string, unknown>, FieldError> | undefined,
  labels: CheckboxLabel[],
  control: Control<PreScreen>,
  formLabel: string,
  name: string,
}

export const FormCheckbox = ({ error, labels, control, formLabel, name }: Props2): React.ReactElement => {
  return (
    <FormControl
      component="fieldset"
      error={error ? true : false}
    >
      <FormLabel component="label">{formLabel}</FormLabel>
      <FormGroup>
        {labels.map((item) => {
          return (
            <FormControlLabel
              control={
                <Controller
                  name={`${name}.${item.name}`}
                  render={({ onChange, value }) => {
                    return (
                      <Checkbox
                        checked={value}
                        onChange={(e) => onChange(e.target.checked)}
                      />
                    );
                  }}
                  control={control}
                />
              }
              key={item.name}
              label={item.label}
            />
          )
        }
        )}
      </FormGroup>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  )
}