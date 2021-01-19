import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  drivers: []
};

// type YourRootState = {
//   loading: boolean,
//   hasErrors: boolean,
//   repos: []
// };

// export const useReduxSelector = createSelectorHook<YourRootState>();

// A slice for posts with our three reducers
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
export const { getDrivers, getDriversSuccess,  getDriversFailure } = driversSlice.actions;

// export for using in useSelector 
export const selectDrivers = (state) => state.driversSlice; // eslint-disable-line

export default driversSlice.reducer;



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
