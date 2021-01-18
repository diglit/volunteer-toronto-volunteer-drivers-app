import { createSlice } from '@reduxjs/toolkit';

const driversSearchSlice = createSlice({
  name: 'driversSearch',
  initialState: {},
  reducers: {
    increment: (state) => state,
    decrement: (state) => state,
  },
});

export default driversSearchSlice;
