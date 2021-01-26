import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

interface Props {
    fieldName: string,
    id: string,
    fieldAria: string,
    type: string
}

const FormInput = ({fieldName, id, fieldAria, type} : Props): React.ReactElement => {
    return (
        <FormControl>
            <InputLabel htmlFor={id}>{fieldName}</InputLabel>
            <Input id={id} inputProps={{ 'aria-label': fieldAria, 'type': type }} />
        </FormControl>
    )
}

export default FormInput;