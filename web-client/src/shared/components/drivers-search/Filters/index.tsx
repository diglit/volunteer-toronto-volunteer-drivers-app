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
// require('../../../../../public/mocks/index');
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
    const mockFilter: FilterRequest = {
      language: [],
      location: [],
      availability: [],
      comfortLevel: [],
      policeCheck: [],
      drivingAbstract: [],
      licenceClass: [],
      vehicleType: [],
      insurancePolicy: [],
      willingToLift: [],
      packingAndSorting: [],
    };

    for (const filter in globalFilter) {
      const newArr = Object.keys(globalFilter[filter]).filter(item => globalFilter[filter][item]);
      switch (filter) {
        case 'Language(s)':
          mockFilter.language = newArr;
          break;
        case "Location":
          mockFilter.location = newArr;
          break;
        case "Availability":
          mockFilter.availability = newArr;
          break;
        case "Comfort Level":
          mockFilter.comfortLevel = newArr;
          break;
        case "Police Check":
          mockFilter.policeCheck = newArr;
          break;
        case "Driving Abstract":
          mockFilter.drivingAbstract = newArr;
          break;
        case "License Class":
          mockFilter.licenceClass = newArr;
          break;
        case "Vehicle Type":
          mockFilter.vehicleType = newArr;
          break;
        case "Insurance Policy":
          mockFilter.insurancePolicy = newArr;
          break;
        case "Willing to Lift":
          mockFilter.willingToLift = newArr;
          break;
        case "Packing and Sorting":
          mockFilter.packingAndSorting = newArr;
          break;
        default:
          console.log(newArr);
      }
    }
    console.log(mockFilter, "new new mock filter");
    // Sending a POST request to backend to fetch drivers based on filters and saving them in Redux store
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