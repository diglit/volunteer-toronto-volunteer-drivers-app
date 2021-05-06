import { render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'shared/redux'
import {spyFetch, dontMock} from '../../../test-utils/spyFetch'
import {MemberTable} from './index'
import fetchMock from 'jest-fetch-mock'

describe('Organization Table', () => {

    const renderComponent = ()=>{
        render(
            <Provider store = {store}>
                <MemberTable />
            </Provider>
        )
    }

    beforeAll(()=>{
        spyFetch()
        renderComponent()
    })

    afterAll(()=>{
        dontMock()
    })

    it('should show Members if server returns members list', async ()=>{
        expect(await screen.findByText("Pam")).toBeInTheDocument()
    })

    it('should show "No members to show" when server failes to return a populated list', async ()=>{
        fetchMock.enableMocks()
        fetchMock.mockResponse(async ()=>(
            JSON.stringify({data:null})
        ))

        renderComponent()

        expect(await screen.findByText('No member to show')).toBeInTheDocument()
    })
})
