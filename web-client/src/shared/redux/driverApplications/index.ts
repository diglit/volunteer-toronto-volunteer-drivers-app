import {
    createSlice,
    // PayloadAction
} from '@reduxjs/toolkit';

interface Applications {
    email: string, // id
    LastName: string,
    FirstName: string,
    viewed: boolean,
    approved: boolean,
}

const initialState = {
    // TODO: fetch application data
}

const driverApplicationSlice = createSlice({
    name: 'driverApplication',
    initialState: initialState,
    reducers: {
        // TODO: 
        // fetchApplication
        // setView,
        // setApprove,
        // setReject,
    }
});

export const {
    // setReject, setApprove, setView, fetchApplication
} = driverApplicationSlice.actions;

export default driverApplicationSlice;