import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core';
import React from 'react';
import { Control, Controller, DeepMap, FieldError } from 'react-hook-form';
// import { PreScreen, Agreement } from 'shared/redux/driversRegistration';
import { PersonalInfo, PreScreen, Agreement } from '../../redux/driversRegistration';

interface Props {
  formType: 'radio' | 'select' | 'checkbox' | 'dateInput' | 'textInput',
  error: FieldError | undefined | DeepMap<Record<string, unknown>, FieldError>,
  labels: string | string[] | CheckboxLabel[],
  control: Control<Agreement> | Control<PreScreen> | Control<PersonalInfo> | undefined,
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
              as={<TextField inputProps={{ 'aria-label': labels as string }} />}
              type="date"
              control={control}
              name={name}
            />

            : formType === 'checkbox' ?
              <FormGroup >
                {(labels as CheckboxLabel[]).map((item) => {
                  return (
                    <div key={item.name}>
                      <FormControlLabel
                        control={
                          <Controller
                            name={`${name}.${item.name}`}
                            render={({ onChange, value }) => {
                              return (
                                <Checkbox
                                  inputProps={{ 'aria-label': `${name}-${item.name}` }}
                                  checked={value}
                                  onChange={(e) => onChange(e.target.checked)}
                                />
                              );
                            }}
                            control={control}
                          />
                        }

                        label={item.label}
                      />
                    </div>
                  )
                }
                )}
              </FormGroup>

              : // formType === 'textInput'
              <Controller
                as={<TextField inputProps={{ 'aria-label': labels as string }} />}
                control={control}
                name={name}
              />

      }
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  )
}

export default FormInput