import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

export interface DriversState {
  drivers: Driver[];
  loading: boolean;
  hasErrors: boolean;
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
}

const initialState: DriversState = {
  loading: false,
  hasErrors: false,
  drivers: [mockDriverData],
}


// A slice for drivers with three reducers
const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    getDrivers: (state) => {
      state.loading = true;
    },
    getDriversSuccess: (state, { payload }) => {
      state.drivers = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getDriversFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    }
  }
});

// Actions generated from the drivers slice
export const { getDrivers, getDriversSuccess, getDriversFailure } = driversSlice.actions;

// Export state for using in useSelector 
export const selectDrivers = (state: any) => state.driversSlice; // eslint-disable-line

export const fetchDrivers = createAsyncThunk(
  'drivers/fetchDrivers',
  async (filterData, thunkAPI) => {
    thunkAPI.dispatch(getDrivers());
    try {
      const response = await fetch('/drivers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(filterData)
      });
      const newRes = await response.json();
      console.log(newRes.data, 'data from redux');
      // Set the data from the mock API to state
      thunkAPI.dispatch(getDriversSuccess(newRes.data));
      console.log(newRes.data, 'data from redux after setting state');
    } catch (error) {
      thunkAPI.dispatch(getDriversFailure())
    }
  }
);

export default driversSlice.reducer;
