import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PersonalInfo {
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber: string,
    languagesSpoken: string[]

}

const mockPersonalInfo: PersonalInfo = {
    firstName: 'Jonathan',
    lastName: 'Saunders',
    emailAddress: 'jsaunders@gmail.com',
    phoneNumber: "2805284619",
    languagesSpoken: ['English']
}

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
    personalInfo: PersonalInfo,
    preScreen: PreScreen
}



const initialState = {
    preScreen: initPreScreen,
    personalInfo: mockPersonalInfo
} as RegistrationState;


const driversRegistrationSlice = createSlice({
    name: 'driversRegistration',
    initialState: initialState,
    reducers: {
        setPersonalInfo: (state, {payload}: PayloadAction<PersonalInfo>) => {
            state.personalInfo = payload;
        },
        setPreScreen: (state, { payload }: PayloadAction<PreScreen>) => {
            state.preScreen = payload;
        },
    }
});

export const { 
    setPreScreen,
    setPersonalInfo,
} = driversRegistrationSlice.actions;

export default driversRegistrationSlice;