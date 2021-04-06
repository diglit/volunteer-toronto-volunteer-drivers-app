import ApplicationService from "../../../services/application";
import {
    createSlice,
    PayloadAction,
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
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    async (data, thunkAPI) => { 
        const response = await ApplicationService.getAll()
        return response
    }
)

//TODO: update the application status
// export const updateApplications = createAsyncThunk(
//     'driverApplication/fetchApplications',
//     async (id, thunkAPI: ThunkAPI) => {
//         const response = await ApplicationService.updateById(id)
//         return response
//     }
// )

const driverApplicationSlice = createSlice({
    name: 'driverApplication',
    initialState: {
        applicationList: [],
        loading: 'idle',
    } as AppState,
    reducers: {
        applicationLoading: (state) => {
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        applicationReceived: (state, { payload }: PayloadAction<DriverApplication[]>) => {
            if (state.loading === 'pending') {
                state.loading = 'succeeded'
                state.applicationList = payload
            }
        },
        setApprove: (state, { payload }: PayloadAction<DriverApplication[]>) => {
            state.applicationList = payload
        },
        setReject: (state, { payload }: PayloadAction<DriverApplication[]>) => {
            state.applicationList = payload
        },
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
                    state.loading = 'failed'
                })
        }
});

export const {
    applicationLoading,
    applicationReceived,
    setReject,
    setApprove
} = driverApplicationSlice.actions;

export default driverApplicationSlice;