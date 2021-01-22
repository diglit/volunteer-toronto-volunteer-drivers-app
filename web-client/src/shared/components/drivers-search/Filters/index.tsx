import React, { useState } from 'react';
import { NextPage } from 'next';
// data for populating checkboxes
import {
  globalFilterData,
  DefaultValues
} from './defaultValues';
// Material UI components
import Button from '@material-ui/core/Button';
// Components
import FilterAccordion from '../FilterAccordion';
// API mock file necessary for the API call to run
require('../../../../../public/mocks/index');
// REDUX
import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDrivers,
  // selectDrivers
} from '../../../redux/driversSearch';


const DriversSearchFilters: NextPage = React.memo(function DriversSearchFilters() {
  const dispatch = useDispatch();

  // OKSANA: This is for Wendy to use in Drivers List
  // const { loading, hasErrors, drivers } = useSelector(selectDrivers);

  // OKSANA: State originating from redux store after POST update REST request 
  // console.log(drivers, 'drivers list');

  const [globalFilter, setGlobalFilter] = useState(globalFilterData);

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    filter: DefaultValues,
    filterName: string
  ) => {
    const newGlobalFilter = { ...globalFilter };
    const newFilter = { ...filter };
    for (const prop in newFilter) {
      prop === event.target.name ? (newFilter[prop] = event.target.checked) : null
    }
    newGlobalFilter[filterName] = newFilter;
    setGlobalFilter(newGlobalFilter);
  };

  const handleDriverSearch = async () => {
    // languageFilter.forEach((item: any) => {
    //     console.log(item);
    //     // if (item[Object.keys(item)]) {
    //     //     console.log(Object.keys(item));
    //     // }
    // });
    // OKSANA TO DO: to provide filterData as an argument to make a POST request
    // dispatch(fetchDrivers("here"));
    // OKSANA fetching drivers from backend and saving them in Redux store
    dispatch(fetchDrivers());
  };

  return (
    <>
      <h1>Driver Filters</h1>
      <ul>
        {Object.keys(globalFilter).map(filter => {
          return (
            <li key={filter}>
              <FilterAccordion
                handleChange={(event) => handleFilterChange(event, globalFilter[filter], filter)}
                state={globalFilter[filter]}
                title={filter}
              />
            </li>
          )
        })
        }
      </ul>
      <Button
        variant="contained"
        color="primary"
        onClick={handleDriverSearch}
      >
        Search
      </Button>
    </>
  );
});

export default DriversSearchFilters;