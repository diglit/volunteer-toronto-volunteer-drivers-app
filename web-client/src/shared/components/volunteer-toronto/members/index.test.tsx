
import VtUsers from 'pages/volunteer-toronto/members'
import {render, screen, fireEvent} from '@testing-library/react'
import UserEvents from '@testing-library/user-event'
import Members from '.';
import { Provider } from 'react-redux';
import { store } from 'shared/redux';
import * as MemberSlice from 'shared/redux/volunnteer-toronto/members'
import MockMembers from 'pages/api/vtmembers/mockMember'
import fetchMock from 'jest-fetch-mock'

describe('VT: Users', () => {
    const spyFetch = (data:MemberSlice.MembersListItem[])=>{
        fetchMock.enableMocks()

        fetchMock.mockResponse(async (req)=>{
            if(req.url === "http://localhost:3000/api/vtmembers")
            return JSON.stringify( {data:MockMembers.getMembers()} )

            if(req.url === "http://localhost:3000/api/vtmembers/delete"){
                const members = MockMembers.getMembers()
                return JSON.stringify( {data: members.shift() })
            }

            return Promise.reject(new Error('wrong url'))
        })
    }

    const renderComponent = ()=>{
        render(
            <Provider store={store}>
                <Members />
            </Provider>
        )
    }

    const getSearchField = ()=>(
        screen.getByLabelText('Search')
    )

    beforeEach(()=>{
        spyFetch(MockMembers.getMembers())
        renderComponent()
    })    

    it('should have member "Pam" in table', async ()=>{
        expect(await screen.findByText('Pam')).toBeInTheDocument()
    })

    it('should display the searched name in the table', async ()=>{
        const searchField = getSearchField()
        UserEvents.type(searchField, 'pam')
        expect(await screen.findByText('Pam')).toBeInTheDocument()
    })

    it('should display "No member available" when searched user does not exist', async ()=>{
        const searchField = getSearchField()
        UserEvents.type(searchField, 'some randome name')
        expect(await screen.findByText('No member to show')).toBeInTheDocument()
    })

    it('should delete first member', async ()=>{
        fireEvent.change(getSearchField(), {target:{value:''}})

        expect(await screen.findByText('Pam')).toBeInTheDocument()

        const deleteBtns = await screen.findAllByText("Delete")
        const firstDelete = deleteBtns[0]

        UserEvents.click(firstDelete)
        expect(await screen.findAllByText('Are you sure?'))

        const yesButton = await screen.findByText('Yes')
        UserEvents.click(yesButton)

        const searchField = await screen.findByLabelText('Search')
        UserEvents.type(searchField, 'Pam')
        expect(await screen.findByText('No member to show')).toBeInTheDocument()
    })
});