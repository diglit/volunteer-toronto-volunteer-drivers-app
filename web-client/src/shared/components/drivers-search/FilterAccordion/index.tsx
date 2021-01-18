import React from 'react'
// import { Container } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";


interface FilterState {
    // item: boolean,
    [index: number]: { item: boolean };
}

type Props = {
    title?: string,
    state: FilterState[],
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '70%',
            // border: "1px black solid"
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        listItem: {
            backgroundColor: '#DDDDDD',
            borderRadius: "5px",
            margin: "10px"
        },
        button: {
            width: "100%",
            borderRadius: "0px"
        },
    }),
);

const FilterAccordion: React.FunctionComponent<Props> = ({ title, state, handleChange }: Props) => {
    const classes = useStyles();

    return (
        <>
            <FormControl component="fieldset">
                <Accordion>
                    <FormLabel component="legend">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>{title}</Typography>
                        </AccordionSummary>
                    </FormLabel>
                    <FormGroup>
                        <AccordionDetails>
                            <ul>
                                {state.map((item: any) => {
                                    const language = Object.keys(item)[0];
                                    const isChecked = item[language];
                                    return (
                                        <li key={language}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={isChecked}
                                                        onChange={handleChange}
                                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                                        color="primary"
                                                        name={language}
                                                        value={language}
                                                    />
                                                }
                                                label={language}
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        </AccordionDetails>
                    </FormGroup>
                </Accordion>
            </FormControl>
        </>
    )

}

export default FilterAccordion