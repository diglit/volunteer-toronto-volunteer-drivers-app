import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

// TODO: combine data from driver registeration 

// interface Application {
//     email: string, // or id
//     lastName: string,
//     firstName: string,
//     viewed: boolean,
//     approved: boolean,
// }


const initialState = {
    // TODO: fetch all applications data
    application: 'placeholder'
}

const driverApplicationSlice = createSlice({
    name: 'driverApplication',
    initialState,
    reducers: {
        // TODO: 
        setApplication: (state, {payload}: PayloadAction)=> {
            console.log(state);
            console.log(payload);
        },
        setView: (state, {payload}: PayloadAction)=> {
            console.log(state);
            console.log(payload);
        },
        setApprove: (state, {payload}: PayloadAction)=> {
            console.log(state);
            console.log(payload);
        },
        setReject: (state, {payload}: PayloadAction)=> {
            console.log(state);
            console.log(payload);
        },
    }
});

export const {
    setApplication, setView, setApprove, setReject
} = driverApplicationSlice.actions;

export default driverApplicationSlice;