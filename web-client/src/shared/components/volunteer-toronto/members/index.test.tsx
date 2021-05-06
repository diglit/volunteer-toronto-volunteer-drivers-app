import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import UserEvents from '@testing-library/user-event'
import Members from '.';
import { Provider } from 'react-redux';
import { store } from 'shared/redux';
import {spyFetch, dontMock} from '../../../test-utils/spyFetch'

describe('VT: Users', () => {
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
        spyFetch()
        renderComponent()
    })    

    afterAll(()=>{
        dontMock()
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