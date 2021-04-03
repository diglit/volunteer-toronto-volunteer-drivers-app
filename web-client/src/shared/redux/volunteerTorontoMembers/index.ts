import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const mockMembersList: MembersListItem[] = [
    {
        name: "Pam",
        jobTitle: 'Senior Manager'
    }
]

export interface MembersListItem {
    name: string
    jobTitle: string
}

export interface VolunteerTorontoMembersState {
    members: MembersListItem[]
    searchQuery: string
}

const initialState:VolunteerTorontoMembersState = {
    members: mockMembersList,
    searchQuery: ''
}

const volunteerTorontoMembersSlice = createSlice({
    name: 'volunteerTorontoMembers',
    initialState,
    reducers: {
        setMembers: (state, {payload}: PayloadAction)=>{
            // implement
        },
        setSearchQuery: (state, {payload}: PayloadAction<string>)=>{
            // implement
        },
    }
})

export default volunteerTorontoMembersSlice