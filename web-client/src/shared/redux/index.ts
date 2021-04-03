import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import driversSearchSlice, { DriversState } from './driversSearch';
import driversRegistrationSlice from './driversRegistration';
// import driverApplicationSlice from './driverApplications';
import volunteerTorontoMembersSlice from './volunteerTorontoMembers'

export type AppThunk = ThunkAction<void, DriversState, unknown, Action<string>>;

const reducer = combineReducers({
  // driverApplication: driverApplicationSlice,
  driversSearch: driversSearchSlice.reducer,
  driversRegistration: driversRegistrationSlice.reducer,
  volunteerTorontoMembers: volunteerTorontoMembersSlice.reducer
})

export const store = configureStore({
  reducer,
  devTools: true,
  middleware: [reduxThunk]
})

// Create RootState type in Root Reducer.
export type RootState = ReturnType<typeof reducer>
