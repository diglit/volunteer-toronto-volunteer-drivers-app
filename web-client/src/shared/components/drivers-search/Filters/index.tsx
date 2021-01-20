import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
// data for populating checkboxes
import {
  DefaultValue,
  languageFilterdata,
  locationFilterdata,
  availabilityFilterdata,
  comfortLevelFilterdata,
  policeCheckFilterdata,
  drivingAbstractFilterdata,
  licenseClassFilterdata,
  vehicleTypeFilterdata,
  packingSortingFilterdata,
  insurancePolicyFilterdata,
  willingToLiftFilterdata,
} from './defaultValues';
// Material UI components
import Button from '@material-ui/core/Button';
// Components
import FilterAccordion from '../FilterAccordion';
import Layout from '../Layout';
// API mock file necessary for the API call to run
require('../../../../../public/mocks/index');
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDrivers,
  selectDrivers
} from '../../../redux/driversSearch';


const DriversSearchFilters: NextPage = React.memo(function DriversSearchFilters() {
  const dispatch = useDispatch();

  // interface Driver {
  //     id: number;
  //     name: string;
  // }
  // interface RootState {
  //     loading: boolean;
  //     hasErrors: boolean;
  //     drivers: Driver[];
  // }

  // const { loading, hasErrors, drivers } = useSelector<RootState>((state: RootState) => {
  //     return {
  //         loading: state.loading,
  //         hasErrors: state.hasErrors,
  //         drivers: state.drivers
  //     }
  // });

  const { loading, hasErrors, drivers } = useSelector(selectDrivers);

  useEffect(() => {
    dispatch(fetchDrivers());
  }, [dispatch]);

  if (loading) {
    console.log('loading');
  } else if (hasErrors) {
    console.log('has errors');
  }
  // OKSANA: State originating from redux store after POST update REST request 
  console.log(drivers, 'drivers list');

  // ALL FILTERS
  // OKSANA TO DO: to pack all filters in one piece of state
  const [languageFilter, setLanguageFilter] = useState(languageFilterdata);
  const [locationFilter, setLocationFilter] = useState(locationFilterdata);
  const [availabilityFilter, setAvailabilityFilter] = useState(
    availabilityFilterdata,
  );
  const [comfortLevelFilter, setComfortLevelFilter] = useState(
    comfortLevelFilterdata,
  );
  const [policeCheckFilter, setPoliceCheckFilter] = useState(
    policeCheckFilterdata,
  );
  const [drivingAbstractFilter, setDrivingAbstractFilter] = useState(
    drivingAbstractFilterdata,
  );
  const [licenseClassFilter, setLicenseClassFilter] = useState(
    licenseClassFilterdata,
  );
  const [vehicleTypeFilter, setVehicleTypeFilter] = useState(
    vehicleTypeFilterdata,
  );
  const [packingSortingFilter, setPackingSortingFilter] = useState(
    packingSortingFilterdata,
  );
  const [insurancePolicyFilter, setInsurancePolicyFilter] = useState(
    insurancePolicyFilterdata,
  );
  const [willingToLiftFilter, setWillingToLiftFilter] = useState(
    willingToLiftFilterdata,
  );

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    state: DefaultValue[],
    setState: any, // eslint-disable-line
  ) => {
    const newState = [...state];
    newState.forEach((object) => {
      return Object.keys(object)[0] === event.target.name
        ? (object[event.target.name] = event.target.checked)
        : null;
    });
    setState(newState);
  };

  // OKSANA TO DO: refactor all handle change functions to one
  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterChange(event, languageFilter, setLanguageFilter);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterChange(event, locationFilter, setLocationFilter);
  };

  const handleAvailabilityChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    handleFilterChange(event, availabilityFilter, setAvailabilityFilter);
  };

  const handleComfortLevelChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    handleFilterChange(event, comfortLevelFilter, setComfortLevelFilter);
  };

  const handlePoliceCheckChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    handleFilterChange(event, policeCheckFilter, setPoliceCheckFilter);
  };

  const handleDrivingAbstractChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    handleFilterChange(event, drivingAbstractFilter, setDrivingAbstractFilter);
  };

  const handleLicenseClassChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    handleFilterChange(event, licenseClassFilter, setLicenseClassFilter);
  };

  const handleVehicleTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    handleFilterChange(event, vehicleTypeFilter, setVehicleTypeFilter);
  };

  const handleInsurancePolicyChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    handleFilterChange(event, insurancePolicyFilter, setInsurancePolicyFilter);
  };

  const handleWillingToLiftChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    handleFilterChange(event, willingToLiftFilter, setWillingToLiftFilter);
  };
  const handlePackingSortingChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    handleFilterChange(event, packingSortingFilter, setPackingSortingFilter);
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
    dispatch(fetchDrivers());
  };

  return (
    // OKSANA TO DO: refactor this to map over one global state with all filters
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
          <li>
            <FilterAccordion
              handleChange={handleLicenseClassChange}
              state={licenseClassFilter}
              title="License Class"
            />
          </li>
          <li>
            <FilterAccordion
              handleChange={handleVehicleTypeChange}
              state={vehicleTypeFilter}
              title="Vehicle Type"
            />
          </li>
          <li>
            <FilterAccordion
              handleChange={handleInsurancePolicyChange}
              state={insurancePolicyFilter}
              title="Insurance Policy"
            />
          </li>
          <li>
            <FilterAccordion
              handleChange={handleWillingToLiftChange}
              state={willingToLiftFilter}
              title="Willing to Lift"
            />
          </li>
          <li>
            <FilterAccordion
              handleChange={handlePackingSortingChange}
              state={packingSortingFilter}
              title="Packing and Sorting"
            />
          </li>
        </ul>
        <Button
          variant="contained"
          color="primary"
          onClick={handleDriverSearch}
        >
          Search
        </Button>
      </Layout>
    </>
  );
});

export default DriversSearchFilters;

