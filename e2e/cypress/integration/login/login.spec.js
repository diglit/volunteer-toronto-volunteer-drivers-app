describe('loginTestSuite',()=>{
    beforeEach(()=>{
        cy.visit('/signin')
        cy.fixture('login').then(function(data){
            this.data=data
        })
    })

    const inputLabels = {
        username: 'Username',
        password: 'Password',
        signin: 'Sign In'
        
    }
    
    it('Should greet with Welcome Message',()=>{
        cy.contains('h6','Welcome to Volunteer Driver Search')
    })
    
    it('Link to Forgot your Password',()=>{
        cy.contains('Forget your password?')
        .should('have.attr','href','#')
    })
    
    it('Link to Apply to Drive',()=>{
        cy.contains('Apply to Drive!')
        .should('have.attr','href','/signup')
    })
    
    it('requires username',()=>{
        cy.findByLabelText(inputLabels.password).type(this.data.validPassword)
        cy.findByLabelText(inputLabels.signin).click()
        cy.findByText('Invalid email').should('exist')
        
    })
    
    it('requires Password',()=>{
        cy.findByLabelText(inputLabels.username).type(this.data.validUsername)
        cy.findByLabelText(inputLabels.signin).click()
        cy.findByText('Invalid password!').should('exist')
        
    })
    
    it('requires valid username and password',()=>{
        cy.findByLabelText(inputLabels.username).type(this.data.invalidUsername)
        cy.findByLabelText(inputLabels.password).type(this.data.invalidPassword)
        cy.findByLabelText(inputLabels.signin).click()
        cy.contains('Unable to log in')
        
    })
    
    it('naviagates to next page after sucessfull login',()=>{
        cy.findByLabelText(inputLabels.username).type(this.data.validUsername)
        cy.findByLabelText(inputLabels.password).type(this.data.validPassword)
        cy.findByLabelText(inputLabels.signin).click()
        cy.url().should('include','/drivers-registration')
    })
    
    
    })
    