import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Agreement from 'shared/components/drivers-registration/Agreement';

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
export interface Agreement {
    agreementOptions: {
        agreement1: boolean,
        agreement2: boolean,
        agreement3: boolean,
        agreement4: boolean,
    },
    signiture: string
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

const initAgreement: Agreement = {
    agreementOptions: {
        agreement1: false,
        agreement2: false,
        agreement3: false,
        agreement4: false,
    },
    signiture: ''
}


interface RegistrationState {
    preScreen: PreScreen,
    agreement: Agreement,
    yourNeeds: YourNeeds,
}

const initialState: RegistrationState = {
    yourNeeds: initYourNeeds,
    preScreen: initPreScreen,
    agreement: initAgreement,
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
        setAgreement: (state, { payload }: PayloadAction<Agreement>) => {
            state.agreement = payload;
        }
    }
});

export const { saveYourNeeds, setPreScreen, setAgreement } = driversRegistrationSlice.actions;

export default driversRegistrationSlice;