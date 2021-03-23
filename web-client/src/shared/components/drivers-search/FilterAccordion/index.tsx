import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { DefaultValues } from '../Filters/defaultValues';

type Props = {
  filterGroupName: string;
  filterGroup: DefaultValues;
  onFilterChange: (filterName: string) => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '70%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    accSummary: {
      backgroundColor: '#DDDDDD',
      borderRadius: '5px',
      width: '500px',
      margin: '10px',
    },
    button: {
      width: '100%',
      borderRadius: '0px',
    },
  }),
);

const FilterAccordion: React.FunctionComponent<Props> = ({
  filterGroupName,
  filterGroup,
  onFilterChange,
}: Props) => {
  const classes = useStyles();

  return (
    <>
      <FormControl component="fieldset">
        <Accordion>
          <FormLabel component="legend">
            <AccordionSummary
              className={classes.accSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                {filterGroupName}
              </Typography>
            </AccordionSummary>
          </FormLabel>
          <FormGroup>
            <AccordionDetails>
              <ul>
                {Object.keys(filterGroup).map((filterName: string) => {
                  const isChecked = filterGroup[filterName];
                  return (
                    <li key={filterName}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={isChecked}
                            onChange={() => onFilterChange(filterName)}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                            color="primary"
                            name={filterName}
                            value={filterName}
                          />
                        }
                        label={filterName}
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
  );
};

export default FilterAccordion;
