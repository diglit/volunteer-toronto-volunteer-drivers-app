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

export type CheckboxItem = {
    [key: string]: boolean
}

export interface PreScreenRequirement {
    policeRecordsCheckRequirements: CheckboxItem,
    policeRecordsCheckDate: string,
    policeRecordsCheckType: string,
    drivingAbstractRequirements: CheckboxItem,
    drivingAbstractDate: string,
    LicenseAndVehicle: CheckboxItem
    LicenseClassesOther: string
}

const initPreScreenRequirement: PreScreenRequirement = {
    policeRecordsCheckRequirements: {
        'I have completed a police records check in the last 6 months': false,
        'I have completed a police records check in the last 12 months': false,
        'I am willing to complete a police records check in order to volunteer as a driver': false,
        'I am NOT willing to complete a police records check in order to volunteer as a driver': false,
    },
    policeRecordsCheckDate: '2021-01-01',
    policeRecordsCheckType: '',
    drivingAbstractRequirements: {
        'I have a clear drving abstract completed within the last 6 months': false,
        'I have a clear driving abstract completed within the last 12 months': false,
        'I am willing to complete a drving abstract in order to volunteer as a drvier': false,
        'I am NOT willing to complete a driving abstract in order to volunteer as a driver': false
    },
    drivingAbstractDate: '2021-01-01',
    LicenseAndVehicle: {
        'I have access to a car that is safe to drive for deliveries': false,
        'I have liability insurance of $ 1 Million': false,
        'I have liability insurance of $ 2 Million': false,
        'I have a valid G license': false
    },
    LicenseClassesOther: ''
}

interface RegistrationState {
    personalInfo: PersonalInfo,
    preScreenRequirement: PreScreenRequirement
}



const initialState = {
    personalInfo: mockPersonalInfo,
    preScreenRequirement: initPreScreenRequirement
} as RegistrationState;

const driversRegistrationSlice = createSlice({
    name: 'driversSearch',
    initialState: initialState,
    reducers: {
        setPersonalInfo: (state, { payload }: PayloadAction<PersonalInfo>) => {
            state.personalInfo = payload;
        },
        setPreScreenRequirement: (state, { payload }: PayloadAction<PreScreenRequirement>) => {
            state.preScreenRequirement = payload;
        },
    }
});

export const { setPersonalInfo, setPreScreenRequirement } = driversRegistrationSlice.actions;

export default driversRegistrationSlice;