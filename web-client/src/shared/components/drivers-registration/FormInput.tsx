import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core';
import React from 'react';
import { Control, Controller, DeepMap, FieldError } from 'react-hook-form';
import { PreScreen } from 'shared/redux/driverRegistration';

interface Props {
  formType: 'radio' | 'select' | 'checkbox' | 'dateInput' | 'textInput',
  error: FieldError | undefined | DeepMap<Record<string, unknown>, FieldError>,
  labels: string[] | CheckboxLabel[],
  control: Control<Record<string, any>> | undefined,
  formLabel: string,
  name: string,
}

export interface CheckboxLabel {
  name: string,
  label: string
}

const FormInput = ({ formType, error, labels, control, formLabel, name }: Props): React.ReactElement => {
  return (
    <FormControl
      error={!!error}
      component="fieldset">
      <FormLabel component="legend">{formLabel}</FormLabel>

      { formType === 'radio' ?
        <Controller
          as={
            <RadioGroup
            >
              {(labels as string[]).map((label) =>
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

        : formType === 'select' ?
          <Controller
            as={
              <Select
              >
                {(labels as string[]).map((label) =>
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

          : formType === 'dateInput' ?
            <Controller
              as={TextField}
              type="date"
              control={control}
              name={name}
            />

            : formType === 'checkbox' ?
              <FormGroup >
                {(labels as CheckboxLabel[]).map((item) => {
                  return (
                    <>
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
                      {error && <FormHelperText>{(error[item.name as keyof typeof error] as typeof error)?.message}</FormHelperText>}
                    </>
                  )
                }
                )}
              </FormGroup>

              : // formType === 'textInput'
              <Controller
                as={TextField}
                control={control}
                name={name}
              />

      }
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  )
}

export default FormInput