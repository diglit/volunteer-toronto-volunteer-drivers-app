import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import {RootState} from '../../../redux/index';
import {setPersonalInfo, PersonalInfo} from '../../../redux/driverRegistration/index';


interface Props {
    fieldName: string,
    stateField: string,
    fieldAria: string,
    type: string
}

const FormInput = ({fieldName, stateField, fieldAria, type} : Props): React.ReactElement => {
    
    const personalInfoState = useSelector((state: RootState) => state.driversRegistration.personalInfo);
    const dispatch = useDispatch();

    const handleChange = (event: React.FormEvent) => {
        const newState: PersonalInfo = {...personalInfoState};

        function isKeyOfPersonalInfo(stateField: string): stateField is keyof typeof personalInfoState{
            return stateField in personalInfoState;
        }

        if (isKeyOfPersonalInfo(stateField) && stateField !== 'languagesSpoken') {

            const target = event.target as HTMLInputElement
            newState[stateField] = target.value;
        }

        dispatch(() => setPersonalInfo(newState));
    }
    
    return (
        <FormControl>
            <InputLabel 
            htmlFor={stateField}>{fieldName}</InputLabel>
            <Input
            id={stateField}
            inputProps={{ 'aria-label': fieldAria, 'type': type }}
            onChange={handleChange} 
            />
        </FormControl>
    )
}

export default FormInput;