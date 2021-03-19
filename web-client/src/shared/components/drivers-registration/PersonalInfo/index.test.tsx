import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import UserEvent from '@testing-library/user-event'

import { Provider } from 'react-redux';
import { store } from '../../../redux';

import PersonalInfoComponent from './index'


const mockDriverInputData = {
    firstName: 'Pam',
    lastName: 'Beesly',
    email: 'pam@Beesly.com',
    phone: '4444444444',
    otherLanguage: 'Arabic'
}


describe('PersonalInfo', ()=>{
    const mockOnSubmit = jest.fn()
    render(
        <Provider store={store}>
            <PersonalInfoComponent onSubmit={mockOnSubmit}/>
        </Provider>
    )

    describe('when provided information does not meet the criteria', ()=>{
        const firstNameField = screen.getByLabelText('First Name')
        const lastNameField = screen.getByLabelText('Last Name')
        const emailField = screen.getByLabelText('Email Address')
        const phoneField = screen.getByLabelText('Phone Number')
        const language = screen.getByLabelText('English')
        const languageOther = screen.getByPlaceholderText('Other')
        const nextBtn = screen.getByText('Next')

        beforeEach(()=>{
            // Filling in valid data so each field can be 
            // tested individually for error and so every 
            // field doesn't show error on submit
            UserEvent.type(firstNameField, mockDriverInputData.firstName)
            UserEvent.type(lastNameField, mockDriverInputData.lastName)
            UserEvent.type(emailField, mockDriverInputData.email)
            UserEvent.type(phoneField, mockDriverInputData.phone)
            UserEvent.click(language)
            UserEvent.type(languageOther, mockDriverInputData.otherLanguage)
        })

        const assertEmptyFieldErrorShouldBeDefined = (field:HTMLElement)=>{
            fireEvent.change(field, {target:{value: ''}})
            UserEvent.click(nextBtn)

            const errorMsgElem = screen.getByText('Please fill the field')
            expect(errorMsgElem).toBeDefined()
        }

        describe('First Name field', ()=>{
            it('should display empty field error on empty field',()=>{
                assertEmptyFieldDisplayError(firstNameField)
            })
        })

        describe('Last Name field', ()=>{
            it('should display empty field error on empty field',()=>{
                assertEmptyFieldDisplayError(lastNameField)
            })
        })

        describe('Email Address field', ()=>{
            it('should display empty field error on empty field',()=>{
                assertEmptyFieldErrorShouldBeDefined(emailField)
            })

            it('should display invalid email error on invalid inputs',()=>{

            })
        })
    })

    describe('when provided information meets the criteria', ()=>{
        const mockOnSubmit = jest.fn()

        render(
            <Provider store={store}>
                <PersonalInfoComponent onSubmit={mockOnSubmit}/>
            </Provider>
        )

        it('should call onSubmit function', ()=>{
            const firstNameField = screen.getByLabelText('First Name')
            const lastNameField = screen.getByLabelText('Last Name')
            const emailField = screen.getByLabelText('Email Address')
            const phoneField = screen.getByLabelText('Phone Number')
            const language = screen.getByLabelText('English')
            const languageOther = screen.getByPlaceholderText('Other')
            const nextBtn = screen.getByText('Next')

            UserEvent.type(firstNameField, mockDriverInputData.firstName)
            UserEvent.type(lastNameField, mockDriverInputData.lastName)
            UserEvent.type(emailField, mockDriverInputData.email)
            UserEvent.type(phoneField, mockDriverInputData.phone)
            UserEvent.click(language)
            UserEvent.type(languageOther, mockDriverInputData.otherLanguage)

            UserEvent.click(nextBtn)

            expect(mockOnSubmit).toHaveBeenCalled()
        })
    })
})