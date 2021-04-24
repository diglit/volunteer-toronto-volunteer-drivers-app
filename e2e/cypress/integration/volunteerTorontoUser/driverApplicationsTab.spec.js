//Remove this file from IgnoreTestFiles after code is written
const Labels = {
    reviewApplication: 'Review Application',
    approveButton:'Approve',
    rejectButton:'Reject',
    comments:'Comments',
    back:'Back'    
       
  }
  
  describe('Login with Valid VT Credentials', function() {
        before(() =>{
            cy.login('admin@diglit.com','Password@123')
         })

         const selectTableRowWithName = (input)=>{
          cy.get('table').find('td').contains(input).parent().as('row')
          cy.contains('td', input)  
             .siblings()                                             // gives you all the other cells in the row
             .contains('button', 'Review Application')               // finds the Review Application button
             .click()                                                // Clicks the Review Application button for given Username
          }  
       
       //Use case 1: Review Application for Drivers by VT User - Approve Scenario
             it('VT member should be able to Review and Approve Driver Application' ,function(){
                  selectTableRowWithName('Anderson,Rose') 
                  cy.findByText('Application Review').should('exist') 
                  cy.findByText(Labels.approveButton).click()
                  cy.findByText('You would like to approve Anderson,Rose to the volunteer driver list.').should('exist')
                  cy.findByText(Labels.approveButton).click()
                  cy.focused().should('have.attr', 'name', 'Driver Applications')                           
             }) 

        //Use case 2: Review Application for Drivers by VT User - Reject Scenario
             it('VT member should be able to Review and Reject Driver Application' ,function(){
                  selectTableRowWithName('Pam') 
                  cy.findByText('Application Review').should('exist') 
                  cy.findByText(Labels.rejectButton).click()
                  cy.findByText('Are you sure you would like to reject this applicant?').should('exist')
                  cy.findByText(Labels.comments).type('Not enough information')
                  cy.findByText(Labels.rejectButton).click()
                  cy.focused().should('have.attr', 'name', 'Driver Applications')                           
             }) 
        // Review Application for Drivers by VT User – Back Button Scenario     
             it('VT member should be able to Review and go back to dashboard after clicking on back button' ,function(){
                  selectTableRowWithName('Henry') 
                  cy.findByText('Application Review').should('exist') 
                  cy.findByText(Labels.back).click()
                  cy.focused().should('have.attr', 'name', 'Driver Applications')                           
              }) 

    })      
