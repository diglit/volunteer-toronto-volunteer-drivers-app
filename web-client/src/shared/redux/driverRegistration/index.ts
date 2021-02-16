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

export interface PreScreenRequirement {
    policeRecordsCheckRequirements: string[],
    policeRecordsCheckDate: string,
    policeRecordsCheckType: string,
    drivingAbstractRequirements: string[],
    drivingAbstractDate: string,
    VehicleAndLicense: string[]
}

const initPreScreenRequirement: PreScreenRequirement = {
    policeRecordsCheckRequirements: [],
    policeRecordsCheckDate: '2021-01-01',
    policeRecordsCheckType: '',
    drivingAbstractRequirements: [],
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