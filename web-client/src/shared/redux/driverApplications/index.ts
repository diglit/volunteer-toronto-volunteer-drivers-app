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
    comment: string,
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
        comment: '',
        applicationDate: '2021-3-30'
    },
]

interface AppState { applicationList: AppListItem[] }

// TODO: fetch all applications data
const initialState: AppState = { applicationList: mockApplicationList}

const driverApplicationSlice = createSlice({
    name: 'driverApplication',
    initialState,
    reducers: {
        // TODO: 
        setApplication: (state, { payload }: PayloadAction) => {
            console.log(state);
            console.log(payload);
        },
        setApprove: (state, { payload }: PayloadAction<AppListItem[]>) => {
            console.log(state);
            console.log(payload);
            state.applicationList = payload
        },
        setReject: (state, { payload }: PayloadAction<AppListItem[]>) => {
            console.log(state);
            console.log(payload);
            state.applicationList = payload
        },
    }
});

export const {
    setApplication,
    setReject,
    setApprove
} = driverApplicationSlice.actions;

export default driverApplicationSlice;