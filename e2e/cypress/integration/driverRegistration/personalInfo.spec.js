
const inputLabels = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email Address',
    phone: 'Phone Number',
    language: 'English',
    otherLanguage: 'Other',
    nextBtn: 'Next',
    otherLanguageTestId: 'other-language'
}

describe('PersonalInfo', ()=>{
    const populateFieldsWithValidData = ()=>{
        cy.findByLabelText(inputLabels.firstName).type('Pam')
        cy.findByLabelText(inputLabels.lastName).type('Beesley')
        cy.findByLabelText(inputLabels.email).type('pam@beesly.ca')
        cy.findByLabelText(inputLabels.phone).type('4444444444')
        cy.findByLabelText(inputLabels.language).click()    
        cy.findByPlaceholderText(inputLabels.otherLanguage).type("Arabic")
        cy.findByTestId(inputLabels.otherLanguageTestId).click()
    }

    describe('When providing information does not meet the criteria',()=>{

        beforeEach(()=>{
            cy.visit('/drivers-registration')
            populateFieldsWithValidData()
        })

        const assertEmptyFieldErrorShouldBeDefined = (fieldName)=>{
            cy.findByLabelText(fieldName).type('')
            cy.findByText(inputLabels.nextBtn)
            cy.findByText('Please fill the field')
            .should('exist')
        }

        describe('First Name Field', ()=>{
            it('should display empty field error on empty field', ()=>{
                assertEmptyFieldErrorShouldBeDefined(inputLabels.firstName)
            })
        })

        describe('Last Name Field', ()=>{
            it('should display empty field error on empty field', ()=>{
                assertEmptyFieldErrorShouldBeDefined(inputLabels.lastName)
            })
        })

        describe('Email Address Field', ()=>{
            it('should display empty field error on empty field', ()=>{
                assertEmptyFieldErrorShouldBeDefined(inputLabels.email)
            })

            it('should display invalid email error on invalid inputs', ()=>{
                const assertEmailFieldShouldGiveErrorOnInput = (input)=>{
                    cy.findByLabelText(inputLabels.email).type(input)
                    cy.findByText(inputLabels.nextBtn).click()
                    cy.findByText('Invalid Email Address').should('exist')
                }

                assertEmailFieldShouldGiveErrorOnInput('randomtext')
                assertEmailFieldShouldGiveErrorOnInput('test.com')
                assertEmailFieldShouldGiveErrorOnInput('test@com')
                assertEmailFieldShouldGiveErrorOnInput('test@.')
            })
        })

        describe('Phone Number field', ()=>{
            it('should display empty  field error on empty field', ()=>{
                assertEmptyFieldErrorShouldBeDefined()
            })

            it('should display nothing when non-number characters are typed', ()=>{
                cy.findByLabelText(inputLabels.phone).type('randomtext')
                .should('have.value', '')
            })

            it('should display phone number in right format', ()=>{
                cy.findByLabelText(inputLabels.phone).type('4444444444')
                .should('have.value', '(444)444-4444')
            })

            it('should display invalid phone number error on invalid inputs', ()=>{
                cy.findByLabelText(inputLabels.phone).type('9')
                cy.findByText('Invalid Phone Number').should('exist')

                cy.findByLabelText(inputLabels.phone).type('999999999999999')
                cy.findByText('Invalid Phone Number').should('exist')
            })
        })

        describe('Language Input', ()=>{
            it('should display an error when no language is selected', ()=>{
                // deselect language checkbox: selected by default in this test suit
                // setting other language field to empty string
                
                cy.findByLabelText(inputLabels.language)
                .click()

                cy.findByText(inputLabels.nextBtn)
                .click()

                cy.findByText('Language is not selected')
                .should('exist')
            })

            it('should display error when Other language is filled but not selected',()=>{
                cy.findByTestId(inputLabels.otherLanguageTestId).click() // deselecting selected checkbox
                cy.findByPlaceholderText(inputLabels.otherLanguage).type("Arabic")
                cy.findByTestId(inputLabels.otherLanguageTestId).click()
                cy.findByText(inputLabels.nextBtn).click()

                cy.findByText('Language is not selected')
                .should('exist')
            })
        })
    })

    describe('when provided information meets the criteria', ()=>{
        it('should move to next step', ()=>{
            cy.visit('/drivers-registration')
            
            populateFieldsWithValidData()
            
            cy.findByText(inputLabels.nextBtn).click()
            cy.findByText('Your Needs')
            .should('exist')
        })
    })
})