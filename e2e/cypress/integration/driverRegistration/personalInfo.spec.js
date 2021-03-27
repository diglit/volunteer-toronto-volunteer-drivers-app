
const inputLabels = {
    firstName: 'first-name',
    lastName: 'last-name',
    email: 'email',
    phone: 'phone-number',
    language: 'English',
    otherLanguage: 'Other',
    otherLanguageField: 'other-language',
    nextBtn: 'SAVE',
}

describe('PersonalInfo', ()=>{
    const populateFieldsWithValidData = ()=>{
        cy.findByLabelText(inputLabels.firstName).type('Pam')
        cy.findByLabelText(inputLabels.lastName).type('Beesley')
        cy.findByLabelText(inputLabels.email).type('pam@beesly.ca')
        cy.findByLabelText(inputLabels.phone).type('4444444444')
        cy.findByLabelText(inputLabels.language).click()    
        cy.findByLabelText(inputLabels.otherLanguage).click()
        cy.findByLabelText(inputLabels.otherLanguageField).type("Arabic")
    }

    describe('When providing information does not meet the criteria',()=>{

        beforeEach(()=>{
            cy.visit('/drivers-registration')
            populateFieldsWithValidData()
        })

        const assertEmptyFieldErrorShouldBeDefined = (fieldName)=>{
            cy.findByLabelText(fieldName).clear()
            cy.findByText(inputLabels.nextBtn).click()
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
                    cy.findByLabelText(inputLabels.email)
                    .clear()
                    .type(input)
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
                assertEmptyFieldErrorShouldBeDefined(inputLabels.phone)
            })

            it('should display nothing when non-number characters are typed', ()=>{
                cy.findByLabelText(inputLabels.phone).clear()
                .type('randomtext')
                cy.findByText(inputLabels.nextBtn).click()
                cy.findByText('Phone Number must be a number')
                .should('exist')
            })

            it('should display invalid phone number error on invalid inputs', ()=>{
                cy.findByLabelText(inputLabels.phone)
                .clear()
                .type('9')
                cy.findByText(inputLabels.nextBtn).click()
                cy.findByText('Phone number should be 10 digits').should('exist')

                cy.findByLabelText(inputLabels.phone).clear().type('999999999999999')
                cy.findByText(inputLabels.nextBtn).click()
                cy.findByText('Phone number should be 10 digits').should('exist')
            })
        })

        describe('Language Input', ()=>{
            it('should display an error when no language is selected', ()=>{
                // deselect language checkbox: selected by default in this test suit
                // setting other language field to empty string
                
                cy.findByLabelText(inputLabels.language)
                .click()
                cy.findByLabelText(inputLabels.otherLanguage).click()

                cy.findByText(inputLabels.nextBtn)
                .click()

                cy.findByText('Please select at least one language')
                .should('exist')
            })

            it('should display error when Other language is filled but not selected',()=>{
                cy.findByLabelText(inputLabels.language).click() // deselecting selected checkbox
                cy.findByLabelText(inputLabels.otherLanguageField).clear()
                cy.findByText(inputLabels.nextBtn).click()

                cy.findByText('Please fill the field')
                .should('exist')
            })
        })
    })

    describe('when provided information meets the criteria', ()=>{
        it('should move to next step', ()=>{
            cy.visit('/drivers-registration')
            
            populateFieldsWithValidData()
            
            cy.findByText('Next').click()
            cy.findByText('Your Needs')
            .should('exist')
        })
    })
})