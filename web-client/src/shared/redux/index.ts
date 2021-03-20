import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import driversSearchSlice, { DriversState } from './driversSearch';
import driversRegistrationSlice from './driverRegistration';

<<<<<<< HEAD
import driversSearchSlice from './driversSearch';
import driversRegistrationSlice from './driverRegistration';
=======
export type AppThunk = ThunkAction<void, DriversState, unknown, Action<string>>;
>>>>>>> develop

const reducer = combineReducers({
  driversSearch: driversSearchSlice.reducer,
  driversRegistration: driversRegistrationSlice.reducer
})

export const store = configureStore({
  reducer,
  devTools: true,
  middleware: [reduxThunk]
})

// Create RootState type in Root Reducer.
export type RootState = ReturnType<typeof reducer>
