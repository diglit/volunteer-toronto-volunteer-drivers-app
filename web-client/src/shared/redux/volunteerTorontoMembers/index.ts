import {createSlice, PayloadAction, ThunkAction} from '@reduxjs/toolkit'
import { AppThunk } from '..'

const mockMembersList: MembersListItem[] = [
    {
        id: '1',
        name: "Pam",
        jobTitle: 'Senior Manager'
    },
    {
        id: '2',
        name: "Bam",
        jobTitle: 'Senior Manager'
    },
    {
        id: '3',
        name: "Sam",
        jobTitle: 'Senior Manager'
    },
    {
        id: '4',
        name: "Henry Ford",
        jobTitle: 'Senior Manager'
    }
]

export interface MembersListItem {
    id: string,
    name: string
    jobTitle: string
}

export interface VolunteerTorontoMembersState {
    members: MembersListItem[]
    filteredMembers: MembersListItem[]
    searchQuery: string
}

const initialState:VolunteerTorontoMembersState = {
    members: mockMembersList,
    filteredMembers: mockMembersList,
    searchQuery: ''
}

const volunteerTorontoMembersSlice = createSlice({
    name: 'volunteerTorontoMembers',
    initialState,
    reducers: {
        setMembers: (state, {payload}: PayloadAction)=>{
            // implement
            console.log(state)
            console.log(payload)
        },
        setFilteredMembers: (state, {payload}: PayloadAction<MembersListItem[]>)=>{
            console.log(payload)
            state.filteredMembers = payload
        },
        setSearchQuery: (state, {payload}: PayloadAction<string>)=>{
            // implement
            console.log(state)
            console.log(payload)
        },
    }
})


export const {
    setMembers,
    setSearchQuery,
    setFilteredMembers
} = volunteerTorontoMembersSlice.actions

export const deleteUser = (userId: string)=>{
    return (dispatch, getState)=>{
        // This is simulated implementation
        // This implementation does not make any API call
        const state = getState().volunteerTorontoMembers
        const newFiltered = state.filteredMembers.filter((
            member=>member.id!=userId
        ))
        dispatch(setFilteredMembers(newFiltered))  
    }
}

export const filterUsers = (userName: string)=>(dispatch, getState)=>{
    const state = getState().volunteerTorontoMembers
    if(userName === ''){
        dispatch(setFilteredMembers(state.members))
    }
    else{
        dispatch(
            setFilteredMembers(
                state.members.filter(member=>(
                    new RegExp(`${userName}`,'i').test(member.name)
                ))
            )
        )
    }
}

export const filteredMemberListSelector 
= ((state: {volunteerTorontoMembers: VolunteerTorontoMembersState})=>{
    return state.volunteerTorontoMembers.filteredMembers
})

export default volunteerTorontoMembersSlice