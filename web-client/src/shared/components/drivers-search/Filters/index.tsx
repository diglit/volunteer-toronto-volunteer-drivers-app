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
import {
  fetchDrivers,
  updateFilters,
  // filtersSelector,
  FilterRequest,
  // driversSelector
} from '../../../redux/driversSearch';


const DriversSearchFilters: NextPage = React.memo(function DriversSearchFilters() {
  const dispatch = useDispatch();

  // OKSANA: This is for Wendy to use in Drivers List
  // const { isLoading, drivers, errors } = useSelector(driversSelector);

  // OKSANA: State originating from redux after filter update 
  // OKSANA TO DO: replace local globalFilter state with Redux filters state  
  // const filters = useSelector(filtersSelector);

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
    // OKSANA: updating filters via Redux 
    dispatch(updateFilters(newGlobalFilter));
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
    const mockFilter: FilterRequest = {
      language: ['English'],
      location: ['Downtown Toronto'],
      availability: ['Morning', 'Sunday'],
      comfortLevel: ['Contactless Deliveries', 'Low Risk', 'High Risk'],
      policeCheck: ['Willing to get one'],
      drivingAbstract: ['Willing to get one'],
      licenceClass: ['A'],
      vehicleType: ['Truck'],
      insurancePolicy: ['Up to $1 Million'],
      willingToLift: ['Up to 50lbs'],
      packingAndSorting: ['Both'],
    }
    dispatch(fetchDrivers(mockFilter));
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