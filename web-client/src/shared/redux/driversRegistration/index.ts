import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { YourNeeds, DATES } from './yourNeeds/index';

export type languageOption = 'english' | 'french' | 'tagalog' | 'portuguese' | 'spanish' | 'chinese' | 'other';
export type licenseAndVehicle = 'haveCar' | 'haveGLicense' | 'have1MInsurance' | 'have2MInsurance';
export type agreement = 'agreement1' | 'agreement2' | 'agreement3' | 'agreement4';

export interface PreScreen {
    policeRecordsCheckOptions: string,
    policeRecordsCheckDate: string,
    policeRecordsCheckType: string,
    drivingAbstractOptions: string,
    drivingAbstractDate: string,
    LicenseAndVehicle: {
        [key in licenseAndVehicle]: boolean
    }

    LicenseClasses: string
}
export interface Agreement {
    agreementOptions: {
        [key in agreement]: boolean
    },
    signiture: string
}

export interface PersonalInfo {
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber: string,
    languagesSpoken: {
        [key in languageOption]: boolean
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