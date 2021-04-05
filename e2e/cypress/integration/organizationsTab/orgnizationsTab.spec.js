const inputLabels = {
  organizations: 'Organizations',
  search:'Search',
  pauseAccount: 'Pause Account',
  pausedAccount:'Paused Account',
  deleteAccount:'Delete',
  addUserToOrg: 'Add User to Org',
  
}

describe('Login with Valid VT Credentials', function() {
      before(() =>{
        cy.login('admin@diglit.com','Password@123')
      })

      beforeEach(()=>{
        cy.findByLabelText(inputLabels.organizations).click()
        cy.focused().should('have.attr', 'name', 'Organizations') 
      })


      const assertSearchBoxValidValueResults = (input)=>{
        cy.findByLabelText(inputLabels.search).clear()
        cy.type(input)
        cy.contains(input, { timeout: 500})
      }    

      const assertSearchBoxInValidValueResults = (input)=>{
        cy.findByLabelText(inputLabels.search).clear()
        cy.type(input)
        cy.findByLabelText().should('not.exist');
      }
    
    
//Use case 1: VT User trying Search Query in Organizations tab – Valid Username Scenario

      describe('search query with valid username',function(){
          it('Entering valid username in the search box should display results',function(){
            cy.findByLabelText(inputLabels.organizations).click()
            cy.focused().should('have.attr', 'name', 'Organizations') 
            assertSearchBoxValidValueResults('Anderson,Rose')
            assertSearchBoxValidValueResults('Anderson')  
            assertSearchBoxValidValueResults('Rose') 
          })     
        
          it('Entering invalid username in the search box should not display results',function(){
            cy.findByLabelText(inputLabels.organizations).click()
            cy.focused().should('have.attr', 'name', 'Organizations') 
            assertSearchBoxValidValueResults('@@')
            assertSearchBoxValidValueResults('#Anderson#')  
          }) 
      })
        
//Use case 2: VT User trying Search Query in Organizations tab with– Valid Job Title scenario  
      describe('Search by Job Title',function(){
          it('Entering valid job title in the search box should display results',function(){
            cy.findByLabelText(inputLabels.organizations).click()
            cy.focused().should('have.attr', 'name', 'Organizations') 
            assertSearchBoxValidValueResults('Recruitement')
            assertSearchBoxValidValueResults('Manager of Operations')  
          })  
        })
      
//Use case 3: VT User trying Search Query in Organizations tab with - Valid Organization scenario    
      describe('Search by Organization',function(){
          it('Entering valid Organization name in the search box should display results',function(){
            assertSearchBoxValidValueResults('Food Bank')
            assertSearchBoxValidValueResults('NFS')  
          })  
      })

//Use case 4: VT User in Organizations tab with – Pause Account Scenario      
      describe('Pause Account',function(){
          it('VT User trying Search Query in Organizations tab – Pause Account',function(){
            assertSearchBoxValidValueResults('Mig,Bruce')
            cy.findByText(inputLabels.pauseAccount).click()
            cy.findByText(inputLabels.pausedAccount).should('exist')       
          })
      })

//Use case 5: VT User in Organizations tab with – Delete Account Scenario
      describe('Delete Account',function(){
          it('User should be able to delete an account ',function(){
            assertSearchBoxValidValueResults('Forst,Emma')
            cy.findByText(inputLabels.deleteAccount).click()
            assertSearchBoxInValidValueResults('Forst,Emma')
          })
      })

//Use case 6: VT User in Organizations tab with – Email Scenario
      describe('Email User',function(){
          it('User should be able to email selected user',function(){
            assertSearchBoxValidValueResults('Mig,Bruce')
            cy.findByText(inputLabels.email).click()
            cy.findByText('Mig,Bruce').should('have.attr', 'href').and('include', 'contact')
            //TBD           
          })
      })

//Use case 7: VT User in Organizations tab with – Add User to Org Scenario     
      describe('Add User to Organization',function(){
          it('User should be able add a new user to the organization',function(){
            assertSearchBoxValidValueResults('Mig,Bruce')
            cy.findByText(inputLabels.addUserToOrg).click()
            //TBD           
          })
      })
}) 
    