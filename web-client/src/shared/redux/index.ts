import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import driversSearchSlice from './driversSearch';

const reducer = combineReducers({
  driversSearch: driversSearchSlice.reducer
})

export const store = configureStore({
  reducer,
})