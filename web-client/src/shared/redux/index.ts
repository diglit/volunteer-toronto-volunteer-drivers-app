import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

import driversSearchSlice from './driversSearch';
import driversRegistrationSlice from './driverRegistration';

const reducer = combineReducers({
  driversSearch: driversSearchSlice.reducer,
  driversRegistration: driversSearchSlice.reducer
})

export const store = configureStore({
  reducer,
  devTools: true,
  middleware: [reduxThunk]
})