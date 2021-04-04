import {Action, createSlice, PayloadAction, ThunkAction} from '@reduxjs/toolkit'

export interface MembersListItem {
    id: string,
    name: string
    jobTitle: string
}

export interface VolunteerTorontoMembersState {
    loading: boolean
    members: MembersListItem[]
    filteredMembers: MembersListItem[]
}

export type MemberThunk = ThunkAction<void, {volunteerTorontoMembers: VolunteerTorontoMembersState}, unknown, Action>

const initialState:VolunteerTorontoMembersState = {
    loading:true,
    members: [],
    filteredMembers: []
}

const volunteerTorontoMembersSlice = createSlice({
    name: 'volunteerTorontoMembers',
    initialState,
    reducers: {
        setLoading: (state, {payload}: PayloadAction<boolean>) =>{
            state.loading = payload
        },
        setMembers: (state, {payload}: PayloadAction<MembersListItem[]>)=>{
            state.members = payload
        },
        setFilteredMembers: (state, {payload}: PayloadAction<MembersListItem[]>)=>{
            state.filteredMembers = payload
        }
    }
})


export const {
    setMembers,
    setFilteredMembers,
    setLoading
} = volunteerTorontoMembersSlice.actions

export const fetchMembers = ():MemberThunk =>{
    return async (dispatch)=>{
        dispatch(setLoading(true))
        try{
            const res = await fetch('http://localhost:3000/api/vtmembers')
            const members = await res.json()
            dispatch(setMembers(members.data))
            dispatch(setFilteredMembers(members.data))
            dispatch(setLoading(false))
        }
        catch(e){
            dispatch(setMembers([]))
            dispatch(setFilteredMembers([]))
            dispatch(setLoading(false))
        }
    }
}

export const deleteMember = (userId: string): MemberThunk=>{
    return async (dispatch)=>{
        dispatch(setLoading(true))
        try{
            const res = await fetch('http://localhost:3000/api/vtmembers/delete', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({id:userId})
            })

            const confirmation = await res.json()
            if(confirmation.data.id){
                dispatch(fetchMembers())
                dispatch(setLoading(false))
            }
            else{
                dispatch(setLoading(false))
            }
        }
        catch(e){
            console.log(e, 'DELETE MEMBER')
            dispatch(setLoading(false))
        }
    }
}

export const filterMembers = (filterString: string):MemberThunk =>{
    return (dispatch, getState)=>{
        const state = getState().volunteerTorontoMembers
        if(filterString === ''){
            dispatch(setFilteredMembers(state.members))
        }
        else{
            dispatch(setFilteredMembers(
                state.members.filter(member=>(
                    new RegExp(`${filterString}`,'i').test(member.name)
                ))
            ))
        }
    }
}

export const filteredMemberListSelector 
= ((state: {volunteerTorontoMembers: VolunteerTorontoMembersState}):MembersListItem[]=>{
    return state.volunteerTorontoMembers.filteredMembers
})

export const loadingSelector
= ((state: {volunteerTorontoMembers: VolunteerTorontoMembersState}):boolean=>{
    return state.volunteerTorontoMembers.loading
})

export default volunteerTorontoMembersSlice