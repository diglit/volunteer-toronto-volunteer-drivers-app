//Remove this file from IgnoreTestFiles after code is written
const inputLabel = {
    createNewOrg: 'Create New Org',
    createNewUser:'Create New User',
    email: 'Email',
    delete:'Delete',
    resetPassword:'Reset Password'
       
  }
  
  describe('Login with Valid VT Credentials', function() {
        before(() =>{
          cy.login('admin@diglit.com','Password@123')
         })
  
        beforeEach(()=>{
            cy.get('[placeholder=Search]').clear()                      
        })
  
  
        const assertSearchBoxValidValueResults = (input)=>{
          cy.get('[placeholder=Search]').clear().type(input)
          cy.get('table').find('td').contains(input).parent().as('row')        
        }    
  
        const assertSearchBoxInValidValueResults = (input)=>{
            cy.get('[placeholder=Search]').clear().type(input)
            cy.contains('p','No Member to show')
        }     
      
      
       // Use case 1: User Searches with Valid Names in VT Members Tab  
            it('Entering valid Name in the search box should display results',function(){
                assertSearchBoxValidValueResults('Sam') // Capital Letter Name
                assertSearchBoxValidValueResults('Henry Ford')  // Name with spaces
                assertSearchBoxValidValueResults('sam') // Lower case Name           
            }) 
           
        
      // Use case 2: User Searches with Invalid Name VT Members Tab   
            it('Entering invalid username in the search box should not display results',function(){
                assertSearchBoxInValidValueResults('Dwight') 
            }) 
       

      // Use case 3: User deletes a VT Member     
            it('VT User should be able to delete a VT Member',function(){
                cy.get('[placeholder=Search]').clear().type('Bam')
                cy.findByText(inputLabel.delete).click()
                assertSearchBoxInValidValueResults('Bam')
            }) 
      
      // Use case 4: User Emails a VT Member     
            it('VT User should be able to Email a VT Member',function(){
                cy.get('[placeholder=Search]').clear().type('Henry')
                assertSearchBoxValidValueResults('Henry') 
                cy.findByText(inputLabel.email).should('have.attr', 'href').and('include', 'mailto:')              
            }) 

      //  Use case 5: User creates a new User via VT Members Tab
            it('VT User should be able to create a new User',function(){
                cy.findByText(inputLabel.createNewUser).click()              
                         
            }) 

     //  Use case 6: User creates a new Organization via VT Members Tab
            it('VT User should be able to create a new Organization',function(){
                cy.findByText(inputLabel.createNewOrg).click()              
                 
            }) 
    //  Use case 7: User Resets a password for a VT member
            it('VT User should be able to reset password for VT Member',function(){
                cy.get('[placeholder=Search]').clear().type('Henry')
                cy.findByText(inputLabel.resetPassword).click           
            }) 


  }) 
