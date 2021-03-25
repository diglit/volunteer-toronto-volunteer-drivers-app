import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import UserEvent from '@testing-library/user-event'

import { Provider } from 'react-redux';
import { store } from '../../../redux';

import {PersonalInfoInputFactory} from '../../../test-utils/factories'

import PersonalInfoComponent from './index'
import { act } from 'react-dom/test-utils';

describe('PersonalInfo', ()=>{
    const mockOnSubmit = jest.fn()
    const mockDriverInputData = PersonalInfoInputFactory.build()
    
    const createTestElements = ()=>{
        return {
            firstNameField: screen.getByLabelText('first-name'),
            lastNameField: screen.getByLabelText('last-name'),
            emailField: screen.getByLabelText('email'),
            phoneField: screen.getByLabelText('phone-number'),
            language: screen.getByLabelText('English'),
            otherLanguageCheckBox: screen.getByLabelText('Other'),
            nextBtn: screen.getByText('SAVE')
        }
    }

    describe('when provided information does not meet the criteria', ()=>{
        // render(
        //     <Provider store={store}>
        //         <PersonalInfoComponent onSubmit={mockOnSubmit}/>
        //     </Provider>
        // )

        // const {
        //     firstNameField,
        //     lastNameField,
        //     emailField,
        //     phoneField,
        //     language,
        //    // languageOther,
        //     nextBtn
        // } = createTestElements()

        // beforeEach(()=>{
        //     // Filling in valid data so each field can be 
        //     // tested individually for error and so every 
        //     // field doesn't show error on submit
        //     UserEvent.type(firstNameField, mockDriverInputData.firstName)
        //     UserEvent.type(lastNameField, mockDriverInputData.lastName)
        //     UserEvent.type(emailField, mockDriverInputData.emailAddress)
        //     UserEvent.type(phoneField, mockDriverInputData.phoneNumber)
        //     UserEvent.click(language)
        // })

        const renderComponent = ()=>{
            render(
                <Provider store={store}>
                    <PersonalInfoComponent onSubmit={mockOnSubmit}/>
                </Provider>
            )
        }

        const populateFields = ()=>{
            const fields = {
                firstNameField: screen.getByLabelText('first-name'),
                lastNameField: screen.getByLabelText('last-name'),
                emailField: screen.getByLabelText('email'),
                phoneField: screen.getByLabelText('phone-number'),
                language: screen.getByLabelText('English'),
                //languageOther: screen.findByLabelText('other-language'),
                otherLanguageCheckBox: screen.getByLabelText('Other'),
                nextBtn: screen.getByText('SAVE')
            }

            fireEvent.change(fields.firstNameField, {target:{value:mockDriverInputData.firstName}})
            fireEvent.change(fields.lastNameField, {target:{value:mockDriverInputData.lastName}})
            fireEvent.change(fields.emailField, {target:{value:mockDriverInputData.emailAddress}})
            fireEvent.change(fields.phoneField, {target:{value:mockDriverInputData.phoneNumber}})
            fireEvent.click(fields.language)
        }

        const renderAndPopulateFields= ()=>{
            renderComponent()
            populateFields()
        }

        beforeEach(()=>{
            renderAndPopulateFields()
        })

        const assertEmptyFieldsErrorRendered = async (field:HTMLElement)=>{
                fireEvent.change(field, {target:{value: ''}})

                const nextBtn = screen.getByText('SAVE')
                UserEvent.click(nextBtn)

                const errorMsgElem = await screen.findByText('Please fill the field')
                expect(errorMsgElem).toBeInTheDocument()
        }

        describe('First Name field', ()=>{
            it('should display empty field error on empty field',async ()=>{
                const firstNameField = screen.getByLabelText('first-name')
                await assertEmptyFieldsErrorRendered(firstNameField)
                
            })
        })

        describe('Last Name field', ()=>{
            it('should display empty field error on empty field',async ()=>{
                const lastNameField = screen.getByLabelText('last-name')
                await assertEmptyFieldsErrorRendered(lastNameField)
            })
        })

        describe('Email Address field', ()=>{
            it('should display empty field error on empty field',async ()=>{
                const emailField = screen.getByLabelText('email')
                await assertEmptyFieldsErrorRendered(emailField)
            })

            it('should display invalid email error on invalid inputs',async ()=>{
                const assertEmailFieldShouldGiveErrorOnInput = async (input:string)=>{
                    const emailField = screen.getByLabelText('email')

                    fireEvent.change(emailField, {target:{value:''}})
                    UserEvent.type(emailField, input)

                    const nextBtn = screen.getByText('SAVE')
                    UserEvent.click(nextBtn)

                    const err = await screen.findByText('Invalid Email Address')
                    expect(err).toBeInTheDocument()
                }

                await assertEmailFieldShouldGiveErrorOnInput('randomtext')
                await assertEmailFieldShouldGiveErrorOnInput('test.com')
                await assertEmailFieldShouldGiveErrorOnInput('test@com')
                await assertEmailFieldShouldGiveErrorOnInput('test@.')
            })
        })

        describe('Phone Number field', ()=>{
            it('should display empty field error on empty field',async()=>{
                const phoneField = screen.getByLabelText('phone-number')
                await assertEmptyFieldsErrorRendered(phoneField)
            })

            it('should display nothing when non-number characters are typed', async ()=>{
                const phoneField = screen.getByLabelText('phone-number')
                fireEvent.change(phoneField, {target: {value: ''}})
                UserEvent.type(phoneField, 'randomtext')
                
                const btn = screen.getByText('SAVE')
                UserEvent.click(btn)

                const err = await screen.findByText('Phone Number must be a number')
                expect(err).toBeInTheDocument()
            })

            it('should display invalid phone number error on invalid inputs', async ()=>{
                const phoneField = screen.getByLabelText('phone-number')
                fireEvent.change(phoneField, {target: {value: ''}})

                UserEvent.type(phoneField, '9')

                const nextBtn = screen.getByText('SAVE')
                UserEvent.click(nextBtn)
                expect(await screen.findByText('Phone number should be 10 digits')).toBeInTheDocument()


                fireEvent.change(phoneField, {target: {value: ''}})
                UserEvent.type(phoneField, '9999999999999')
                UserEvent.click(nextBtn)
                expect(await screen.findByText('Phone number should be 10 digits')).toBeInTheDocument()
            })
        })

        describe('Language Inputs', ()=>{
            it('should have toggleable checkbox' , ()=>{
                const language = screen.getByLabelText('English') as HTMLInputElement
                const initialState = language.checked

                UserEvent.click(language)
                expect(language.checked).toBe(!initialState)

                UserEvent.click(language)
                expect(language.checked).toBe(initialState)

            })

            it('should display an error when no language is selected', async ()=>{
                // deselect language checkbox: selected by default in this test suit
                // setting other language field to empty string
                const language = screen.getByLabelText('English')
                UserEvent.click(language)

                const nextBtn = screen.getByText('SAVE')
                UserEvent.click(nextBtn)

                expect(await screen.findByText('Please select at least one language'))
                .toBeInTheDocument()
            })

            it('should display an error when Other language field is filled but not selected',async ()=>{
                const otherLanguageCheckBox
                = screen.getByLabelText('Other')
                UserEvent.click(otherLanguageCheckBox)

                const otherField = await screen.findByLabelText('other-language')
                expect(otherField).toBeInTheDocument()

                const saveBtn = screen.getByText('SAVE')
                UserEvent.click(saveBtn)

                expect(await screen.findByText('Please fill the field'))
                .toBeInTheDocument()
            })
        })
    })

    describe('when provided information meets the criteria', ()=>{
        it('should call onSubmit function', async ()=>{
        const mockOnSubmit = jest.fn()

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
            otherLanguageCheckBox,
            nextBtn
        } = createTestElements()


            UserEvent.type(firstNameField, mockDriverInputData.firstName)
            UserEvent.type(lastNameField, mockDriverInputData.lastName)
            UserEvent.type(emailField, mockDriverInputData.emailAddress)
            UserEvent.type(phoneField, mockDriverInputData.phoneNumber)
            UserEvent.click(language)
            UserEvent.click(otherLanguageCheckBox)
            UserEvent.type(await screen.findByLabelText('other-language'), mockDriverInputData.languageOther)

            await act(async ()=>{UserEvent.click(nextBtn)})

            expect(mockOnSubmit).toHaveBeenCalled()
        })

    })
})
