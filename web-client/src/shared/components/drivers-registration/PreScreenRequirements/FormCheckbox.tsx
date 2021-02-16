import React, { useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

import { Checkbox, FormControlLabel } from '@material-ui/core';

// https://stackoverflow.com/questions/61475234/material-ui-react-form-hook-multiple-checkboxes-default-selected


export interface CheckboxInputs {
    data: string[]
}

interface Props {
    seleted: string[],
    options: string[],
    handleCheck: (data: CheckboxInputs) => null
}

const FormCheckbox = ({ seleted, options, handleCheck }: Props): React.ReactElement => {
    const { control, handleSubmit } = useForm({
        defaultValues: { data: seleted }
    });

    const [checkedValues, setCheckedValues] = useState(seleted);

    const handleSelect = (item: string): string[] => {
        const newCheck = checkedValues
            ?.includes(item)
            ? checkedValues?.filter((v: string) => v !== item)
            : [...(checkedValues ?? []), item];
        setCheckedValues(newCheck);
        console.log(newCheck);

        return newCheck;
    }

    return (
        <form onSubmit={handleSubmit(data => handleCheck(data))}>
            {options.map(o => (
                <FormControlLabel
                    control={
                        <Controller
                            name='data'
                            defaultValue={checkedValues}
                            render={({ onChange: onCheckChange }) => {
                                return (
                                    <Checkbox
                                        checked={checkedValues.includes(o)}
                                        onChange={() => onCheckChange(handleSelect(o))}
                                    />
                                );
                            }}
                            control={control}
                        />
                    }
                    key={o}
                    label={o}
                />
            ))}
            <button>Submit</button>
        </form>
    );
};

export default FormCheckbox