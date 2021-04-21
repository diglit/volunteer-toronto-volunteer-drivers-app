import { 
    Action, 
    createSlice, 
    PayloadAction, 
    ThunkAction 
} from "@reduxjs/toolkit"

export interface MembersListItem {
    id: string,
    name: string
}

export interface OrganizationMembersState {
    loading: boolean,
    members: MembersListItem[]
}

export type OrganizationMemberThunk = ThunkAction<void, {organizationMembers: OrganizationMembersState}, unknown, Action>

const initialState:OrganizationMembersState = {
    loading: true,
    members: []
}

const OrganizationMembersSlice = createSlice({
    name: 'organizationMembersSlice',
    initialState,
    reducers: {
        setLoading: (state, {payload}:PayloadAction<boolean>)=>{
            state.loading = payload
        },
        setMembers: (state, {payload}:PayloadAction<MembersListItem[]>)=>{
            state.members = payload
        }
    }
})

export const {
    setLoading,
    setMembers
} = OrganizationMembersSlice.actions

export default OrganizationMembersSlice

export const fetchMembers = ():OrganizationMemberThunk =>{
    return async (dispatch)=>{
        dispatch(setLoading(true))
        try {
            const res = await fetch('http://localhost:3000/api/organization/members')
            const members = await res.json()
            dispatch(setMembers(members.data))
            dispatch(setLoading(false))
        } catch (error) {
            dispatch(setMembers([]))
            dispatch(setLoading(false))
        }
    }
}

export const loadingSelector 
= ((state:{organizationMembers: OrganizationMembersState}): boolean=>{
    return state.organizationMembers.loading
})

export const membersSelector
= ((state:{organizationMembers: OrganizationMembersState}): MembersListItem[]=>{
    return state.organizationMembers.members
})
