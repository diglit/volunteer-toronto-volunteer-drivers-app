import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import driversSearchSlice from './driversSearch';

const reducer = combineReducers({
  driversSearch: driversSearchSlice,
});

export const store = configureStore({
  reducer,
  devTools: true,
  middleware: [reduxThunk],
});
