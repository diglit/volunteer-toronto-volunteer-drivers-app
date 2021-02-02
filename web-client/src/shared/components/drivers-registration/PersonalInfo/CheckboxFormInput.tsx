import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

interface Props {
    fieldName: string,
    options: string[],
    optionCategory: string
}

const CheckboxFormInput = ({fieldName, options, optionCategory} : Props): React.ReactElement => {


    const handleClick = (event: React.MouseEvent) => {

        //add languages to store, check for inclusion in store to display
        //if they are checked or not

        // event.stopPropagation();
        // event.preventDefault();
        // const target: HTMLInputElement = event.target;
        
        // const isSelected = target.getAttribute('checked');
        // console.log(isSelected);
        // if (isSelected) {
        //     target.setAttribute('checked','false');
        // } else {
        //     target.setAttribute('checked','true');
        // }
    }

    return (
        <FormControl component="fieldset">
        <FormLabel component="legend">{fieldName}</FormLabel>
        <FormGroup>
            {options.map((option,ind) => {

                return (
                    <FormControlLabel
                    key={ind}
                    control={<Checkbox checked={false} inputProps={{ 'aria-label': `${optionCategory}-${option.toLowerCase()}`}}/>}
                    label={option}
                    onClick={handleClick}
                    />


                )
            })}
        </FormGroup>
      </FormControl>
    )
}

export default CheckboxFormInput;