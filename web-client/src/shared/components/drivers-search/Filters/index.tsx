import React from 'react';
import { NextPage } from 'next';
// Material UI components
import Button from '@material-ui/core/Button';
// Components
import FilterAccordion from '../FilterAccordion';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDrivers,
  filtersSelector,
  FilterRequest,
  setFilters,
  //example of using drivers state from Redux
  // driversSelector
} from '../../../redux/driversSearch';

const DriversSearchFilters: NextPage = React.memo(
  function DriversSearchFilters() {
    const dispatch = useDispatch();

    // For using in Drivers List
    //example of using drivers state from Redux
    // const { isLoading, drivers, errors } = useSelector(driversSelector);

    // State  with all filters from Redux
    const filterGroups = useSelector(filtersSelector);

    const handleDriverSearch = async () => {
      const updatedFilter: FilterRequest = {
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

      for (const property in filterGroups) {
        //create a new array with filtered out properties that were checked, i.e. they are true
        const newArr = Object.keys(filterGroups[property]).filter(
          (item) => filterGroups[property][item],
        );
        switch (property) {
          case 'Language(s)':
            updatedFilter.language = newArr;
            break;
          case 'Location':
            updatedFilter.location = newArr;
            break;
          case 'Availability':
            updatedFilter.availability = newArr;
            break;
          case 'Comfort Level':
            updatedFilter.comfortLevel = newArr;
            break;
          case 'Police Check':
            updatedFilter.policeCheck = newArr;
            break;
          case 'Driving Abstract':
            updatedFilter.drivingAbstract = newArr;
            break;
          case 'License Class':
            updatedFilter.licenceClass = newArr;
            break;
          case 'Vehicle Type':
            updatedFilter.vehicleType = newArr;
            break;
          case 'Insurance Policy':
            updatedFilter.insurancePolicy = newArr;
            break;
          case 'Willing to Lift':
            updatedFilter.willingToLift = newArr;
            break;
          case 'Packing and Sorting':
            updatedFilter.packingAndSorting = newArr;
            break;
          default:
            [];
        }
      }
      // Send a POST request to backend to fetch drivers based on filters and saving them in Redux store
      dispatch(fetchDrivers(updatedFilter));
    };

    return (
      <>
        <h1>Driver Filters</h1>
        <ul>
          {Object.keys(filterGroups).map((filterGroupName) => {
            // map over filters and render an accordion per filterGroup, e.g. Languages etc.
            return (
              <li key={filterGroupName}>
                <FilterAccordion
                  //e.g., filterName - Morning, e.g. filterGroupName - Availability
                  onFilterChange={(filterName) => {
                    dispatch(setFilters({ filterName, filterGroupName }));
                  }}
                  filterGroup={filterGroups[filterGroupName]}
                  filterGroupName={filterGroupName}
                />
              </li>
            );
          })}
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
  },
);

export default DriversSearchFilters;
