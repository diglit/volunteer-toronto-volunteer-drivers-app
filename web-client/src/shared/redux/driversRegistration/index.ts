import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { YourNeeds, DATES } from './yourNeeds/index';

export interface PreScreen {
    policeRecordsCheckOptions: string,
    policeRecordsCheckDate: string,
    policeRecordsCheckType: string,
    drivingAbstractOptions: string,
    drivingAbstractDate: string,
    LicenseAndVehicle: {
        haveCar: boolean,
        haveGLicense: boolean,
        have1MInsurance: boolean,
        have2MInsurance: boolean,
    }

    LicenseClasses: string
}

const initYourNeeds: YourNeeds = {
    communities: [],
    availableDates: [...DATES.map(date => (
        {
            date: date,
            availableTimes: []
        }))
    ],
    typesOfDelivery: []
}

const initPreScreen: PreScreen = {
    policeRecordsCheckOptions: '',
    policeRecordsCheckDate: '',
    policeRecordsCheckType: '',
    drivingAbstractOptions: '',
    drivingAbstractDate: '', 
    LicenseAndVehicle: {
        haveCar: false,
        haveGLicense: false,
        have1MInsurance: false,
        have2MInsurance: false,
    },
    LicenseClasses: 'None'
}

interface RegistrationState {
    yourNeeds: YourNeeds,
    preScreen: PreScreen
}



const initialState: RegistrationState = {
    yourNeeds: initYourNeeds,
    preScreen: initPreScreen
};

const driversRegistrationSlice = createSlice({
    name: 'driversRegistration',
    initialState: initialState,
    reducers: {
        saveYourNeeds(state, action: PayloadAction<YourNeeds>) {
            return ({
                ...state,
                yourNeeds: action.payload
            })
        },
        setPreScreen: (state, { payload }: PayloadAction<PreScreen>) => {
            state.preScreen = payload;
        },
    }
});

export const { saveYourNeeds, setPreScreen } = driversRegistrationSlice.actions;

export default driversRegistrationSlice;