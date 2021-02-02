import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PersonalInfo {
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber: number,
    languagesSpoken: string[]

}

const mockPersonalInfo: PersonalInfo = {
    firstName: 'Jonathan',
    lastName: 'Saunders',
    emailAddress: 'jsaunders@gmail.com',
    phoneNumber: 2805284619,
    languagesSpoken: ['english']
}

interface RegistrationState {
    personalInfo: PersonalInfo
}



const initialState = {
    personalInfo: mockPersonalInfo
} as RegistrationState;

const driversRegistrationSlice = createSlice({
  name: 'driversSearch',
  initialState: initialState,
  reducers: {
    setPersonalInfo: (state, {payload}: PayloadAction<PersonalInfo>) => {
        state.personalInfo = payload;
    }
  }
});

export const {setPersonalInfo} = driversRegistrationSlice.actions;

export default driversRegistrationSlice