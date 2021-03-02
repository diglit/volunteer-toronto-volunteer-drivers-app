import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CheckboxItem = {
    [key: string]: boolean
}

export interface PreScreen {
    policeRecordsCheckOptions: string,
    policeRecordsCheckDate: string,
    policeRecordsCheckType: string,
    drivingAbstractOptions: string,
    drivingAbstractDate: string,
    LicenseAndVehicle: CheckboxItem
    LicenseClassesOther: string
}

const initPreScreen: PreScreen = {
    // policeRecordsCheckOptions: {
    //     'I have completed a police records check in the last 6 months': false,
    //     'I have completed a police records check in the last 12 months': false,
    //     'I am willing to complete a police records check in order to volunteer as a driver': false,
    //     'I am NOT willing to complete a police records check in order to volunteer as a driver': false,
    // },
    policeRecordsCheckOptions:'',
    policeRecordsCheckDate: '2021-01-01',
    // policeRecordsCheckType: {
    //     'Criminal Record Checks': false,
    //     'Criminal Record and Judicial Matters Checks': false,
    //     'Vulnerable Sector Checks': false
    // },
    policeRecordsCheckType: '',
    drivingAbstractOptions: '',
    drivingAbstractDate: '2021-01-01',
    LicenseAndVehicle: {
        'I have access to a car that is safe to drive for deliveries': false,
        'I have liability insurance of $ 1 Million': false,
        'I have liability insurance of $ 2 Million': false,
        'I have a valid G license': false
    },
    LicenseClassesOther: 'None'
}

interface RegistrationState {
    preScreen: PreScreen
}



const initialState = {
    preScreen: initPreScreen
} as RegistrationState;

const driversRegistrationSlice = createSlice({
    name: 'driversRegistration',
    initialState: initialState,
    reducers: {
        setPreScreen: (state, { payload }: PayloadAction<PreScreen>) => {
            state.preScreen = payload;
        },
    }
});

export const { setPreScreen } = driversRegistrationSlice.actions;

export default driversRegistrationSlice;