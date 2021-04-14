import ApplicationService from "../../../services/application";
import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';

export interface DriverApplication {
    id: number,
    application: {
        //TODO: combine data from driver registeration 
        lastName: string,
        firstName: string,
    },
    rejected: boolean,
    comment: string,
    approved: boolean,
    applicationDate: string,
}

interface AppState {
    applicationList: DriverApplication[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

export const fetchApplications = createAsyncThunk(
    'driverApplication/fetchApplications',
    async () => {
        const response = await ApplicationService.getAll()
        return response
    }
)

interface UpdateProps { id: number, newApplication: DriverApplication }

export const updateApplications = createAsyncThunk(
    'driverApplication/updateApplications',
    async ({ id, newApplication }: UpdateProps) => {
        const resData = await ApplicationService.updateById(id, newApplication)
        return resData
    }
)

const driverApplicationSlice = createSlice({
    name: 'driverApplication',
    initialState: {
        applicationList: [],
        loading: 'idle',
    } as AppState,
    reducers: {
    },
    extraReducers:
        (builder) => {
            builder
                .addCase(fetchApplications.fulfilled, (state, { payload }) => {
                    if (state.loading === 'pending') {
                        state.loading = 'succeeded'
                        state.applicationList = payload
                    }
                })
                .addCase(fetchApplications.pending, (state) => {
                    if (state.loading === 'idle') {
                        state.loading = 'pending'
                    }
                })
                .addCase(fetchApplications.rejected, (state) => {
                    if (state.loading === 'pending') {
                        state.loading = 'failed'
                    }
                })
                .addCase(updateApplications.pending, (state) => {
                    state.loading = 'pending'
                })
                .addCase(updateApplications.fulfilled, (state, { payload }) => {
                    if (state.loading === 'pending') {
                        state.loading = 'succeeded'
                        const newList = state.applicationList.map(a => (a.id === payload.id) ? payload : a)
                        state.applicationList = newList
                    }
                })
                .addCase(updateApplications.rejected, (state) => {
                    state.loading = 'failed'
                })
        }
});

export const { } = driverApplicationSlice.actions;

export default driverApplicationSlice;