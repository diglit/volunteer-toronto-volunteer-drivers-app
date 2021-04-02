describe('loginTestSuite',()=>{
    before(function(){
        cy.visit('/signin'),
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
        cy.findByLabelText(inputLabels.username).clear()
        cy.findByLabelText(inputLabels.password).type("password")
        cy.findAllByText('Sign In').last().click() // clicking on Sign In button
        cy.focused().should('have.attr', 'name', 'username')
               
    })
    
     it('requires Password',()=>{
        cy.findByLabelText(inputLabels.username).type("username")
        cy.findByLabelText(inputLabels.password).clear()
        cy.findAllByText('Sign In').last().click()   // clicking on Sign In button
        cy.focused().should('have.attr', 'name', 'password')
        
    })
    
  /* Test to validate Invalid login 
   it('requires valid username and password',()=>{
        cy.findByLabelText(inputLabels.username).type(this.data.invalidUsername)
        cy.findByLabelText(inputLabels.password).type(this.data.invalidPassword)
        cy.findAllByText('Sign In').last().click()  
        cy.contains('Unable to log in')
        
    })
    
     Test to validate Valid login 
    it('naviagates to next page after sucessfull login',()=>{
        cy.findByLabelText(inputLabels.username).type(this.data.validUsername)
        cy.findByLabelText(inputLabels.password).type(this.data.validPassword)
        cy.findAllByText('Sign In').last().click() 
        cy.url().should('include','/drivers-search')
    })
    */
    
    })
    