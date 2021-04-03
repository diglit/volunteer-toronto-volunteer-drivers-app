import {
    createSlice,
    // PayloadAction
} from '@reduxjs/toolkit';

interface Application {
    email: string, // or id
    lastName: string,
    firstName: string,
    viewed: boolean,
    approved: boolean,
    // TODO: combine data from driver registeration 
}

const initialState = {
    // TODO: fetch all applications data
}

const driverApplicationSlice = createSlice({
    name: 'driverApplication',
    initialState,
    reducers: {
        // TODO: 
        // setApplication: (state, {payload}: PayloadAction)=> {}
        // setView: (state, {payload}: PayloadAction)=> {},
        // setApprove: (state, {payload}: PayloadAction)=> {},
        // setReject: (state, {payload}: PayloadAction)=> {},
    }
});

export const {
    //setApplication, setView, setApprove, setReject
} = driverApplicationSlice.actions;

export default driverApplicationSlice;