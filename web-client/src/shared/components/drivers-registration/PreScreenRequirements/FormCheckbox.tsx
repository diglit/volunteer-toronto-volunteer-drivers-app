import React from 'react';

import { Controller, Control } from 'react-hook-form';

import { Checkbox, FormControlLabel } from '@material-ui/core';
import { CheckboxItem, PreScreenRequirement } from 'shared/redux/driverRegistration';

// https://stackoverflow.com/questions/61475234/material-ui-react-form-hook-multiple-checkboxes-default-selected


export interface CheckboxInputs {
    data: string[]
}

interface Props {
    register: unknown,
    control: Control<PreScreenRequirement>,
    data: PreScreenRequirement
    name: keyof PreScreenRequirement
}

const FormCheckbox = ({ control, register, data, name }: Props): React.ReactElement => {

    const checkboxItems = data[name] as CheckboxItem
    return (
        <>
            {Object.keys(checkboxItems).map((key: keyof CheckboxItem) => {
                // console.log(data[name]['I have completed a police records check in the last 6 months']);
                return (
                    <FormControlLabel
                        control={
                            <Controller
                                name={`${name}.${key}`}
                                defaultValue={key}
                                value={checkboxItems[key]}
                                render={({ onChange, value }) => {
                                    return (
                                        <Checkbox
                                            checked={value.name}
                                            onChange={(e) => onChange(e.target.checked)}
                                        />
                                    );
                                }}
                                control={control}
                                register={register}
                            />
                        }
                        key={key}
                        label={key}
                    />
                )
            }
            )}
        </>
    );
};

export default FormCheckbox