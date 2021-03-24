import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import UserEvent from '@testing-library/user-event'

import { Provider } from 'react-redux';
import { store } from '../../../redux';

import {PersonalInfoInputFactory} from '../../../test-utils/factories'

import PersonalInfoComponent from './index'

describe('PersonalInfo', ()=>{
    const mockOnSubmit = jest.fn()
    const mockDriverInputData = PersonalInfoInputFactory.build()
    
    const createTestElements = ()=>{
        return {
            firstNameField: screen.getByLabelText('First Name'),
            lastNameField: screen.getByLabelText('Last Name'),
            emailField: screen.getByLabelText('Email Address'),
            phoneField: screen.getByLabelText('Phone Number'),
            language: screen.getByLabelText('English'),
            languageOther: screen.getByPlaceholderText('Other'),
            otherLanguageCheckBox: screen.getByTestId('other-language'),
            nextBtn: screen.getByText('Next')
        }
    }

    describe('when provided information does not meet the criteria', ()=>{
        render(
            <Provider store={store}>
                <PersonalInfoComponent onSubmit={mockOnSubmit}/>
            </Provider>
        )

        const {
            firstNameField,
            lastNameField,
            emailField,
            phoneField,
            language,
            languageOther,
            nextBtn
        } = createTestElements()

        beforeEach(()=>{
            // Filling in valid data so each field can be 
            // tested individually for error and so every 
            // field doesn't show error on submit
            UserEvent.type(firstNameField, mockDriverInputData.firstName)
            UserEvent.type(lastNameField, mockDriverInputData.lastName)
            UserEvent.type(emailField, mockDriverInputData.email)
            UserEvent.type(phoneField, mockDriverInputData.phone)
            UserEvent.click(language)
        })

        const assertEmptyFieldErrorShouldBeDefined = (field:HTMLElement)=>{
            fireEvent.change(field, {target:{value: ''}})
            UserEvent.click(nextBtn)

            const errorMsgElem = screen.findByText('Please fill the field')
            expect(errorMsgElem).toBeInTheDocument()
        }

        describe('First Name field', ()=>{
            it('should display empty field error on empty field',()=>{
                assertEmptyFieldErrorShouldBeDefined(firstNameField)
            })
        })

        describe('Last Name field', ()=>{
            it('should display empty field error on empty field',()=>{
                assertEmptyFieldErrorShouldBeDefined(lastNameField)
            })
        })

        describe('Email Address field', ()=>{
            it('should display empty field error on empty field',()=>{
                assertEmptyFieldErrorShouldBeDefined(emailField)
            })

            it('should display invalid email error on invalid inputs',()=>{
                const assertEmailFieldShouldGiveErrorOnInput = (input:string)=>{
                    UserEvent.type(emailField, input)
                    UserEvent.click(nextBtn)
                    expect(screen.findByText('Invalid Email Address')).toBeInTheDocument()
                }

                assertEmailFieldShouldGiveErrorOnInput('randomtext')
                assertEmailFieldShouldGiveErrorOnInput('test.com')
                assertEmailFieldShouldGiveErrorOnInput('test@com')
                assertEmailFieldShouldGiveErrorOnInput('test@.')
            })
        })

        describe('Phone Number field', ()=>{
            it('should display empty field error on empty field',()=>{
                assertEmptyFieldErrorShouldBeDefined(phoneField)
            })

            it('should display nothing when non-number characters are typed', ()=>{
                UserEvent.type(phoneField, 'randomtext')
                expect(phoneField).toHaveValue('')
            })

            it('should display phone number in right format', ()=>{
                UserEvent.type(phoneField, '4444444444')
                expect(screen.getByDisplayValue('(444)444-4444'))
                .toBeInTheDocument()
            })

            it('should display invalid phone number error on invalid inputs', ()=>{
                UserEvent.type(phoneField, '9')
                UserEvent.click(nextBtn)
                expect(screen.findByText('Invalid Phone Number')).toBeInTheDocument()

                UserEvent.type(phoneField, '9999999999999')
                UserEvent.click(nextBtn)
                expect(screen.findByText('Invalid Phone Number')).toBeInTheDocument()
            })
        })

        describe('Language Inputs', ()=>{
            it('should display an error when no language is selected', ()=>{
                // deselect language checkbox: selected by default in this test suit
                // setting other language field to empty string
                UserEvent.click(language)
                fireEvent.change(languageOther, {target:{value:''}})

                UserEvent.click(nextBtn)
                expect(screen.findByText('Language is not selected'))
                .toBeInTheDocument()
            })

            it('should display an error when Other language field is filled but not selected',()=>{
                UserEvent.type(languageOther, 'Arabic')
                UserEvent.click(nextBtn)
                expect(screen.findByText('Language is not selected'))
                .toBeInTheDocument()
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

        const {
            firstNameField,
            lastNameField,
            emailField,
            phoneField,
            language,
            languageOther,
            otherLanguageCheckBox,
            nextBtn
        } = createTestElements()

            UserEvent.type(firstNameField, mockDriverInputData.firstName)
            UserEvent.type(lastNameField, mockDriverInputData.lastName)
            UserEvent.type(emailField, mockDriverInputData.email)
            UserEvent.type(phoneField, mockDriverInputData.phone)
            UserEvent.click(language)
            UserEvent.type(languageOther, mockDriverInputData.languages[1])
            UserEvent.click(otherLanguageCheckBox)

            UserEvent.click(nextBtn)

            expect(mockOnSubmit).toHaveBeenCalled()
        })
    })
})
