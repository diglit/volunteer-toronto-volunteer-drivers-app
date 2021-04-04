import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

export interface AppListItem {
    id: number,
    application: {
        //TODO: combine data from driver registeration 
        lastName: string,
        firstName: string,
    },
    rejected: boolean,
    approved: boolean,
    applicationDate: '2021-3-30',
}

export const mockApplicationList: AppListItem[] = [
    {
        id: 5664,
        application: {
            lastName: 'Smith',
            firstName: 'John',
        },
        rejected: false,
        approved: false,
        applicationDate: '2021-3-30'
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
    setApplication,
    setReject,
    setApprove
} = driverApplicationSlice.actions;

export default driverApplicationSlice;