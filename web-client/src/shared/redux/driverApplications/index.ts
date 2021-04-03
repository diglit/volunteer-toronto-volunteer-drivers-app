import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

// TODO: combine data from driver registeration 

export interface AppListItem {
    id: number,
    lastName: string,
    firstName: string,
    viewed: boolean,
    approved: boolean,
}

export const mockApplicationList: AppListItem[] = [
    {
        id: 5664,
        lastName: 'Smith',
        firstName: 'John',
        viewed: false,
        approved: false
    },
]

// TODO: fetch all applications data
const initialState: AppListItem[] = mockApplicationList

const driverApplicationSlice = createSlice({
    name: 'driverApplication',
    initialState,
    reducers: {
        // TODO: 
        setApplication: (state, { payload }: PayloadAction) => {
            console.log(state);
            console.log(payload);
        },
        setView: (state, { payload }: PayloadAction) => {
            console.log(state);
            console.log(payload);
        },
        setApprove: (state, { payload }: PayloadAction) => {
            console.log(state);
            console.log(payload);
        },
        setReject: (state, { payload }: PayloadAction<AppListItem>) => {
            console.log(state);
            console.log(payload);
        },
    }
});

export const {
    setApplication, setView, setApprove, setReject
} = driverApplicationSlice.actions;

export default driverApplicationSlice;