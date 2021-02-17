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
    VehicleAndLicense: string[]
}

const initPreScreenRequirement: PreScreenRequirement = {
    //     policeRecordsCheckRequirements: [
    //     { label: 'I have completed a police records check in the last 6 months', value: false },
    //     { label: 'I have completed a police records check in the last 12 months', value: false },
    //     { label: 'I am willing to complete a police records check in order to volunteer as a driver', value: false },
    //     { label: 'I am NOT willing to complete a police records check in order to volunteer as a driver', value: false },
    //   ],
    policeRecordsCheckRequirements: {
        'I have completed a police records check in the last 6 months': false,
        'I have completed a police records check in the last 12 months': false,
        'I am willing to complete a police records check in order to volunteer as a driver': false,
        'I am NOT willing to complete a police records check in order to volunteer as a driver': false,
    },
    policeRecordsCheckDate: '2021-01-01',
    policeRecordsCheckType: '',
    drivingAbstractRequirements: {},
    drivingAbstractDate: '2021-01-01',
    VehicleAndLicense: []
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