import React, { useState } from 'react';
// import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { NextPage } from 'next';
import Button from '@material-ui/core/Button';
// import { Container } from '@material-ui/core';
import { languageFilterdata, locationFilterdata, availabilityFilterdata, comfortLevelFilterdata, policeCheckFilterdata, drivingAbstractFilterdata } from "./filterData";
import FilterAccordion from "../shared/components/drivers-search/FilterAccordion"
import Layout from "../shared/components/drivers-search/Layout"


// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             width: '70%',
//             // border: "1px black solid"
//         },
//         heading: {
//             fontSize: theme.typography.pxToRem(15),
//             fontWeight: theme.typography.fontWeightRegular,
//         },
//         listItem: {
//             backgroundColor: '#DDDDDD',
//             borderRadius: "5px",
//             margin: "10px"
//         },
//         button: {
//             width: "100%",
//             borderRadius: "0px"
//         },
//         ul: {
//             width: "100%"
//         }
//     }),
// );

const Here: NextPage = () => {
    // const classes = useStyles();
    const [languageFilter, setLanguageFilter] = useState(languageFilterdata);
    const [locationFilter, setLocationFilter] = useState(locationFilterdata);
    const [availabilityFilter, setAvailabilityFilter] = useState(availabilityFilterdata);
    const [comfortLevelFilter, setComfortLevelFilter] = useState(comfortLevelFilterdata);
    const [policeCheckFilter, setPoliceCheckFilter] = useState(policeCheckFilterdata);
    const [drivingAbstractFilter, setDrivingAbstractFilter] = useState(drivingAbstractFilterdata);

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>, state: any, setState: any) => {
        const newState = [...state];
        newState.forEach((object) => {
            return Object.keys(object)[0] === event.target.name
                ? (object[event.target.name] = event.target.checked)
                : null;
        });
        setState(newState);
    };

    const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleFilterChange(event, languageFilter, setLanguageFilter)
    }

    const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleFilterChange(event, locationFilter, setLocationFilter)
    }

    const handleAvailabilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleFilterChange(event, availabilityFilter, setAvailabilityFilter)
    }

    const handleComfortLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleFilterChange(event, comfortLevelFilter, setComfortLevelFilter)
    }

    const handlePoliceCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleFilterChange(event, policeCheckFilter, setPoliceCheckFilter)
    }

    const handleDrivingAbstractChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleFilterChange(event, drivingAbstractFilter, setDrivingAbstractFilter)
    }

    const handleDriverSearch = () => {
        languageFilter.forEach((item: any) => {
            // if (item[Object.keys(item)]) {
            //     console.log(Object.keys(item));
            // }
        });
    }

    return (
        <>
            <Layout>
                <h1>Driver Filters</h1>
                <ul>
                    <li>
                        <FilterAccordion
                            handleChange={handleLanguageChange}
                            state={languageFilter}
                            title="Language(s)"
                        />
                    </li>
                    <li>
                        <FilterAccordion
                            handleChange={handleLocationChange}
                            state={locationFilter}
                            title="Location"
                        />
                    </li>
                    <li>
                        <FilterAccordion
                            handleChange={handleAvailabilityChange}
                            state={availabilityFilter}
                            title="Availability"
                        />
                    </li>
                    <li>
                        <FilterAccordion
                            handleChange={handleComfortLevelChange}
                            state={comfortLevelFilter}
                            title="Comfort Level"
                        />
                    </li>
                    <li>
                        <FilterAccordion
                            handleChange={handlePoliceCheckChange}
                            state={policeCheckFilter}
                            title="Police Check"
                        />
                    </li>
                    <li>
                        <FilterAccordion
                            handleChange={handleDrivingAbstractChange}
                            state={drivingAbstractFilter}
                            title="Driving Abstract"
                        />
                    </li>
                </ul>
                <Button variant="contained" color="primary" onClick={handleDriverSearch}>Search</Button>
            </Layout>
            {/* <FormControl component="fieldset">
                <Accordion>
                    <FormLabel component="legend">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Language(s)</Typography>
                        </AccordionSummary>
                    </FormLabel>
                    <FormGroup>
                        <AccordionDetails>
                            <ul>
                                {languageFilter.map((item) => {
                                    const language = Object.keys(item)[0];
                                    return (
                                        <li key={language}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={item[language]}
                                                        onChange={handleLanguageChange}
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
            <Accordion >
                <AccordionSummary
                    className={classes.listItem}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Location</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Downtown Toronto</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>North York East (East of Yonge)</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>North York West (West of Yonge)</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Mid-Town Toronto (Lawrence to Bloor)</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>East York/Beaches</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Scarborough East (East of Malvern)</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Scarborough West (West of Malvern)</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>North Etobicoke (North of 401)</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>South Etobicoke (South of 401)</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Toronto West (Differin to Islington)</span>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Availability</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Morning</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Afternoon</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Evening</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Monday</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Tuesday</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Wednesday</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Thursday</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Friday</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Saturday</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Sunday</span>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Comfort Level</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Contact-less</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Being in contact with high risk clients</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Being in contact with low risk clients</span>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Police Check</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Has within the last 6 months</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Has within the last 12 months</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Willing to get one</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Not willing to get one</span>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Driving Abstract</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Has within the last 6 months</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Has within the last 12 months</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Willing to get one</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Not willing to get one</span>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>License Class</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>A</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>B</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>C</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>D</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>E</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>F</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>G</span>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Vehicle Type</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Car</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Truck</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Van</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Cargo Van</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Cube Van</span>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Insurance Policy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Up to $1 million</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Up to $2 million</span>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Willing to Lift</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Up to 30lb</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Up to 50lb</span>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Packing and Sorting</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Packing</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Sorting</span>
                        </li>
                        <li>
                            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                            <span>Both</span>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion> */}
        </>
    );
}

export default Here












{/* <li>
                                        <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                                        <span>English</span>
                                    </li>
                                    <li>
                                        <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                                        <span>French</span>
                                    </li>
                                    <li>
                                        <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                                        <span>Tagalog</span>
                                    </li>
                                    <li>
                                        <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                                        <span>Portuguese</span>
                                    </li>
                                    <li>
                                        <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                                        <span>Chinese</span>
                                    </li>
                                    <li>
                                        <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                                        <span>Mandarin</span>
                                    </li>
                                    <li>
                                        <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                                        <span>Cantonese</span>
                                    </li>
                                    <li>
                                        <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                                        <span>Farci</span>
                                    </li>
                                    <li>
                                        <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                                        <span>Other</span>
                                    </li> */}