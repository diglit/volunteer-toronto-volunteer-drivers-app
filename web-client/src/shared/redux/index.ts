import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

// import driversSearchSlice from './driversSearch';
import driversSlice from './driversSearch';

const reducer = combineReducers({
  // driversSearch: driversSearchSlice.reducer,
  //OKSANA: this slice is making an API call
  driversSlice
});

export const store = configureStore({
  reducer,
  devTools: true,
  middleware: [reduxThunk],
});
