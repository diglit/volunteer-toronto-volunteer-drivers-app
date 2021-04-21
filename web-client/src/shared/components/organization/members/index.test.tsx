import { render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'shared/redux'
import spyFetch from '../../../test-utils/spyFetch'
import {MemberTable} from './index'
describe('Organization Table', () => {

    const renderComponent = ()=>{
        render(
            <Provider store = {store}>
                <MemberTable />
            </Provider>
        )
    }

    beforeEach(()=>{
        spyFetch()
        renderComponent()
    })
})
