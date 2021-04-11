const inputLabels = {
    emailButton: 'send-email',
    driverPopup: 'driver-popup'
}

describe('Email Popup', () => {

    it('When email icon is clicked', () => {
        cy.visit('/drivers-search')
        cy.findByLabelText(inputLabels.emailButton).click()
        cy.findByLabelText(inputLabels.driverPopup).should('exist')
    })
})

