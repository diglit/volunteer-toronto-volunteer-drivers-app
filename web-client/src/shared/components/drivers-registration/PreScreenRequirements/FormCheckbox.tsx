import React from 'react';

import { Controller, Control } from 'react-hook-form';

import { Checkbox, FormControlLabel } from '@material-ui/core';
import { CheckboxItem, PreScreen } from 'shared/redux/driverRegistration';


export interface CheckboxInputs {
    data: string[]
}

interface Props {
    register: unknown,
    control: Control<PreScreen>,
    data: PreScreen
    name: keyof PreScreen
}

const FormCheckbox = ({ control, register, data, name }: Props): React.ReactElement => {

    const checkboxItems = data[name] as CheckboxItem
    return (
        <>
            {Object.keys(checkboxItems).map((key: keyof CheckboxItem) => {

                return (
                    <FormControlLabel
                        control={
                            <Controller
                                name={`${name}.${key}`}
                                value={checkboxItems[key]}
                                render={({ onChange, value }) => {
                                    return (
                                        <Checkbox
                                            checked={value}
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

// export const FormRadioGroup = ({ control, register, data, name }: Props): React.ReactElement => {

//     const checkboxItems = data[name] as CheckboxItem
//     return (
//         <>
//             {Object.keys(checkboxItems).map((key: keyof CheckboxItem) => {

//                 return (
//                         <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
//                             {Object.keys(checkboxItems).map((key: keyof CheckboxItem) => {

//                             <FormControlLabel value="female" control={<Radio />} label="Female" />
//                             <FormControlLabel value="male" control={<Radio />} label="Male" />
//                             <FormControlLabel value="other" control={<Radio />} label="Other" />
//                             <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
//                         </RadioGroup>
//                 )
//             }
//             )}
//         </>
//     );
// };

export default FormCheckbox
