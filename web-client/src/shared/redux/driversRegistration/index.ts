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
export interface Agreement {
    agreementOptions: {
        agreement1: boolean,
        agreement2: boolean,
        agreement3: boolean,
        agreement4: boolean,
    },
    signiture: string
}

export interface PersonalInfo {
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber: string,
    languagesSpoken: {
        english: boolean,
        french: boolean,
        tagalog: boolean,
        portuguese: boolean,
        spanish: boolean,
        chinese: boolean,
        other: boolean,
    },
    languageOther: string,
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

const initPersonalInfo: PersonalInfo = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: "",
    languagesSpoken: {
        english: false,
        french: false,
        tagalog: false,
        portuguese: false,
        spanish: false,
        chinese: false,
        other: false,
    },
    languageOther: '',
}


interface RegistrationState {
    personalInfo: PersonalInfo,
    preScreen: PreScreen,
    agreement: Agreement,
    yourNeeds: YourNeeds,
}

const initialState: RegistrationState = {
    personalInfo: initPersonalInfo,
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
        setPersonalInfo: (state, { payload }: PayloadAction<PersonalInfo>) => {
            state.personalInfo = payload;
        },
        setPreScreen: (state, { payload }: PayloadAction<PreScreen>) => {
            state.preScreen = payload;
        },
        setAgreement: (state, { payload }: PayloadAction<Agreement>) => {
            state.agreement = payload;
        }
    }
});

export const { saveYourNeeds, setPersonalInfo, setPreScreen, setAgreement } = driversRegistrationSlice.actions;

export default driversRegistrationSlice;