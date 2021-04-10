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

    const getSaveBtn = ()=>screen.getByText('SAVE')
    const getFirstNameField = ()=>screen.getByLabelText('first-name')
    const getLastNameField = ()=>screen.getByLabelText('last-name')
    const getEmailField = ()=>screen.getByLabelText('email')
    const getPhoneField = ()=>screen.getByLabelText('phone-number')
    const getSpokenLanguageCheckBox = ()=>screen.getByLabelText('English')
    const getOtherLanguageCheckBox = ()=>screen.getByLabelText('Other')
    const getEmptyFieldErrElement = async ()=>await screen.findByText('Please fill the field')
    const getOtherLanguageField = async ()=>await screen.findByLabelText('other-language')

    describe('when provided information does not meet the criteria', ()=>{
        const renderComponent = ()=>{
            render(
                <Provider store={store}>
                    <PersonalInfoComponent onSubmit={mockOnSubmit}/>
                </Provider>
            )
        }

        const populateFields = ()=>{
            const fields = {
                firstNameField: getFirstNameField(),
                lastNameField: getLastNameField(),
                emailField: getEmailField(),
                phoneField: getPhoneField(),
                language: getSpokenLanguageCheckBox(),
                otherLanguageCheckBox: getOtherLanguageCheckBox(),
                nextBtn:getSaveBtn()
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

                const nextBtn =getSaveBtn()
                UserEvent.click(nextBtn)

                const errorMsgElem = await getEmptyFieldErrElement()
                expect(errorMsgElem).toBeInTheDocument()
        }

        describe('First Name field', ()=>{
            it('should display empty field error on empty field',async ()=>{
                const firstNameField = getFirstNameField()
                await assertEmptyFieldsErrorRendered(firstNameField)
                
            })
        })

        describe('Last Name field', ()=>{
            it('should display empty field error on empty field',async ()=>{
                const lastNameField = getLastNameField()
                await assertEmptyFieldsErrorRendered(lastNameField)
            })
        })

        describe('Email Address field', ()=>{
            it('should display empty field error on empty field',async ()=>{
                const emailField = getEmailField()
                await assertEmptyFieldsErrorRendered(emailField)
            })

            it('should display invalid email error on invalid inputs',async ()=>{
                const assertEmailFieldShouldGiveErrorOnInput = async (input:string)=>{
                    const emailField = getEmailField()

                    fireEvent.change(emailField, {target:{value:''}})
                    UserEvent.type(emailField, input)

                    const nextBtn =getSaveBtn()
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
                const phoneField = getPhoneField()
                await assertEmptyFieldsErrorRendered(phoneField)
            })

            it('should display nothing when non-number characters are typed', async ()=>{
                const phoneField = getPhoneField()
                fireEvent.change(phoneField, {target: {value: ''}})
                UserEvent.type(phoneField, 'randomtext')
                
                const btn =getSaveBtn()
                UserEvent.click(btn)

                const err = await screen.findByText('Phone Number must be a number')
                expect(err).toBeInTheDocument()
            })

            it('should display invalid phone number error on invalid inputs', async ()=>{
                const phoneField = getPhoneField()
                fireEvent.change(phoneField, {target: {value: ''}})

                UserEvent.type(phoneField, '9')

                const nextBtn =getSaveBtn()
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
                const language = getSpokenLanguageCheckBox() as HTMLInputElement
                const initialState = language.checked

                UserEvent.click(language)
                expect(language.checked).toBe(!initialState)

                UserEvent.click(language)
                expect(language.checked).toBe(initialState)

            })

            it('should display an error when no language is selected', async ()=>{
                // deselect language checkbox: selected by default in this test suit
                // setting other language field to empty string
                const language = getSpokenLanguageCheckBox()
                UserEvent.click(language)

                const nextBtn =getSaveBtn()
                UserEvent.click(nextBtn)

                expect(await screen.findByText('Please select at least one language'))
                .toBeInTheDocument()
            })

            it('should display an error when Other language field is filled but not selected',async ()=>{
                const otherLanguageCheckBox
                = getOtherLanguageCheckBox()
                UserEvent.click(otherLanguageCheckBox)

                const otherField = await getOtherLanguageField()
                expect(otherField).toBeInTheDocument()

                const saveBtn =getSaveBtn()
                UserEvent.click(saveBtn)

                expect(await getEmptyFieldErrElement())
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

            UserEvent.type(getFirstNameField(), mockDriverInputData.firstName)
            UserEvent.type(getLastNameField(), mockDriverInputData.lastName)
            UserEvent.type(getEmailField(), mockDriverInputData.emailAddress)
            UserEvent.type(getPhoneField(), mockDriverInputData.phoneNumber)
            UserEvent.click(getSpokenLanguageCheckBox())
            UserEvent.click(getOtherLanguageCheckBox())
            UserEvent.type(await getOtherLanguageField(), mockDriverInputData.languageOther)

            await act(async ()=>{UserEvent.click(getSaveBtn())})

            expect(mockOnSubmit).toHaveBeenCalled()
        })

    })
})

