import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { YourNeeds, DATES } from './yourNeeds/index';

export interface DriverRegistration {
  yourNeeds: YourNeeds
}

const initialState: DriverRegistration = {
  yourNeeds: {
    communities: [],
    availableDates: [...DATES.map(date => (
      {
        date: date,
        availableTimes: []
      }))
    ],
    typesOfDelivery: []
  }
}

const driversRegistrationSlice = createSlice({
  name: 'driverRegistration',
  initialState,
  reducers: {
    saveYourNeeds(state, action: PayloadAction<YourNeeds>) {
      return ({
        ...state,
        yourNeeds: action.payload
      })
    },
    decrement: state => state
  }
});

export const { saveYourNeeds } = driversRegistrationSlice.actions;
export default driversRegistrationSlice;

