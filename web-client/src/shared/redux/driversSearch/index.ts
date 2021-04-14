import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllFilters, globalFilterData } from 'shared/components/drivers-search/Filters/defaultValues';
import { AppThunk } from '..';
export interface Driver {
  id: number;
  name: string;
  email: string;
  licenceClass: string;
  vehicleType: string;
  policeCheck: string;
  drivingAbstract: string;
  willingToLift: string;
  packingAndSorting: string;
  riskComfortLevel: string[];
}

export interface Error {
  error: string;
}

export interface Response {
  isLoading: boolean;
  drivers: Driver[];
  errors: Error[];
}

export interface FilterRequest {
  [name: string]: string[];
}

export interface DriversState {
  response: Response;
  filters: AllFilters;
}

export interface DriversSearchPayload {
  filterName: string;
  filterGroupName: string;
}
export interface DriversSearch {
  drivers: Driver[];
}

// make a mock driver data as per design
const mockDriverData: Driver = {
  id: 1,
  name: 'Pam Lutz',
  email: '',
  licenceClass: 'A-Z',
  vehicleType: 'Truck',
  policeCheck: 'Last 12 months',
  drivingAbstract: 'Last 12 months',
  willingToLift: 'Up to 50lbs',
  packingAndSorting: 'Yes',
  riskComfortLevel: ['Contactless Deliveries', 'Low Risk', 'High Risk'],
};

const initialState: DriversState = {
  response: {
    isLoading: false,
    drivers: [mockDriverData],
    errors: [],
  },
  filters: globalFilterData,
};

const driversSearchSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.response.isLoading = payload;
    },
    setDrivers: (state, { payload }: PayloadAction<Driver[]>) => {
      state.response.drivers = payload;
    },
    setErrors: (state, { payload }: PayloadAction<Error[]>) => {
      state.response.errors = payload;
    },
    setFilters: (state, { payload }: PayloadAction<DriversSearchPayload>) => {
      const { filterName, filterGroupName } = payload;
      // update state - global filters -  in reducers when possible - as per best practices 
      state.filters[filterGroupName] = {
        ...state.filters[filterGroupName],
        [filterName]: !state.filters[filterGroupName][filterName],
      };
    },
  },
});

// Actions generated from the drivers slice
export const {
  setLoading,
  setErrors,
  setDrivers,
  setFilters,
} = driversSearchSlice.actions;

// TODO: returned reponse is not correct, need to check the filter function
export const fetchDrivers = (filterRequest: FilterRequest): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const host = process.env.NEXT_PUBLIC_API_SERVER_URL;
      const response = await fetch(`${host}/api/drivers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filterRequest),
      });
      const newRes = await response.json();
      dispatch(setLoading(false));
      dispatch(setDrivers(newRes.data));
      //keeping one console log on purpose to check api response from redux
      console.log(newRes.data, 'data from redux after setting state');
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};

// Export state for using in useSelector
export const driversSelector = (state: {
  driversSearch: DriversState;
}): Response => state.driversSearch.response;

export const filtersSelector = (state: {
  driversSearch: DriversState;
}): AllFilters => state.driversSearch.filters;

export default driversSearchSlice;
