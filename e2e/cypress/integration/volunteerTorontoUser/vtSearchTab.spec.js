describe('Login with Valid VT Credentials', function() {
    before(() =>{
       cy.login('admin@diglit.com','Password@123')
    })

    beforeEach(()=>{
        cy.findByLabelText("Driver Search").click()                        
        cy.focused().should('have.attr', 'name', 'Driver Search') 
    })

    const expandFilterRowByName = (input)=>{          // to expand search criteria row on the left hand of the page.
        cy.findByText(input).click({force: true})       
    }  

    const selectCheckBoxFilters = (a,tabName)=>{        // to check checkboxes under search criteria 

        expandFilterRowByName(tabName) 
    
         for (let i = 0; i != a.length; i++){
            
               if (tabName=="Police Check"){           
                    cy.findAllByLabelText(a[i]).eq(0).click({force: true})                                      
                }else if (tabName=="Driving Abstract"){     
                    cy.findAllByLabelText(a[i]).eq(1).click({force: true}) 
                }else{
                    cy.findByLabelText(a[i]).click({force: true})
                }
        }
    }
    const sendRequestInputs = (input)=>{                 // to check checkboxes on the send request to driver pop up

        for (let i = 0; i != input.length; i++){
           cy.findByText(input[i]).click({force: true})

        }

    } 

    const editProfile = (input)=>{                     // to edit checkboxes on the edit profile pop up
        
        for (let i = 0; i != input.length; i++){
           cy.get('input[type="checkbox"]').check([input[i]],{force: true})  // Will check all the checkboxes inside all values inside input array
        }
              
    }
    
    const editProfileComfortLeveOflDriver = (input)=>{  
        
        cy.get('input[type=range]').as('range')            // Code to change slider Value, Might need change in implementation post code is written.
          .invoke('val', input[0])
          .trigger('change')

        cy.get('@range').siblings().should('have.text', input[0])
              
    }

    const editProfileAvailabilityOfDriver = (input)=>{         // to check checkboxes under Availability 
        
        for (let i = 0; i != input.length; i++){
            cy.findByLabelText(input[i]).click({force: true})  // Will check all the checkboxes inside all values inside input array
        }
              
    }
      
    //Use case 1: Apply driver Search criteria and see search results accordingly- Driver Search Tab

         it('Clicking Search after applying search criteria should display results',function(){
            
            let Languages=['English','French','Farci']
            let location=['Downtown Toronto','East York/Beaches','South Etobicoke (South of 401)']
            let Availability=['Monday','Thursday','Saturday']
            let comfortLevel=['Being in contact with low risk clients']
            let policeCheck=['Has within the last 12 months','Not willing to get one']
            let drivingAbstract=['Has within the last 6 months','Willing to get one']
            let licenseClass=['B','G']
            let VehicleType=['Van','Cargo Van','Cube Van']
            let insurancePolicy=['Up to $1 Million']
            let willingToLift=['Up to 30lb']
            let packingAndSorting=['Both']

            
            
               selectCheckBoxFilters(Languages,'Language(s)')
               selectCheckBoxFilters(location,'Location')
               selectCheckBoxFilters(Availability,'Availability')
               selectCheckBoxFilters(comfortLevel,'Comfort Level')
               selectCheckBoxFilters(policeCheck,'Police Check')
               selectCheckBoxFilters(drivingAbstract,'Driving Abstract')            
               selectCheckBoxFilters(licenseClass,'License Class')
               selectCheckBoxFilters(VehicleType,'Vehicle Type')
               selectCheckBoxFilters(insurancePolicy,'Insurance Policy')
               selectCheckBoxFilters(willingToLift,'Willing to Lift')
               selectCheckBoxFilters(packingAndSorting,'Packing and Sorting')          

            
            cy.findByText("Search").click()
            cy.findByRole('driverCard')
                  .findAllByRole('driverName').first().parent()  // Picking first driver from Dashboard
                  .siblings()
                  .contains('button','View Full Profile')                              //View profile pop-up
                  .click()       
                  .findByLabelText('X').click()  
            cy.focused().should('have.attr', 'name', 'Driver Search')       
                     
       }) 

  // Use case 2: Send Email button from Dashboard - Driver Search Tab

        it('User should be able to send an Email to a Driver from dashboard',function(){
             let driverName= 'Henry ford'
             cy.findByRole('driverCard')
               .findAllByRole('driverName', { text: driverName }).first().parent()
               .siblings()
               .contains('button','Email')
               .should('have.attr', 'href').and('include', 'mailto:')          
        })

 //Use case 3: Delete button from Dashboard - Driver Search Tab

        it('User should be able to Delete Driver from dashboard ',function(){
            let driverName= 'Schrute, Dwight'
            cy.findByRole('driverCard')
              .findAllByRole('driverName', { text: driverName }).first().parent()
              .siblings()
              .contains('button','Delete')
              .click()
            cy.findByText('Are you sure you would like to Delete '+ driverName +' Profile?').should('exist')
            cy.findByText('Delete').click()                                 
            cy.focused().should('have.attr', 'name', 'Driver Search')    
        })

//Use case 4: Reset Password button from Dashboard - Driver Search Tab        

        it('User should be able to reset password for a Driver from dashboard ',function(){
            let driverName='Liz'
            cy.findByRole('driverCard')
              .findAllByRole('driverName', { text: driverName }).first().parent()
              .siblings()
              .contains('button','Reset Password')
              .click()
            cy.findByText("Email has been sent to registered email address")
            cy.findByText('Close').click()
            cy.focused().should('have.attr', 'name', 'Driver Search')        
        })

 //Use case 5: Edit Profile button from Dashboard - Driver Search Tab        

        it('User should be able to Edit Drivers profile from dashboard',function(){
           
            let driverName='Kevin'

            let editlicenseClass=['G']
            let editVehicleType=['Truck']
            let editComfortLevel=['Contact-less']
            let editDeliversWithin=['UpTown','MidTown','East End']
            let editAvailability=['Friday 12 PM','Wednesday 7 AM','Monday 3 PM','Monday 4 PM']
            let editDrivingAbstract=['Last 12 months']
            let editPoliceCheck=['Not willing to get one']
            let editwillingtoLift=['Up to 50lb']
            let editPackingAndSorting=['Sorting']
            let editLanguagesSpoke=['French','Dutch']
            let editInsurancePolicy=['Up to $2 Million']

            cy.findByRole('driverCard')
              .findAllByRole('driverName', { text: driverName }).first().parent()
              .siblings()
              .contains('button','Edit Profile')
              .click()     
              .findByText('Edit Profile').should('not.exist')      // Verifying Edit profile button does not appear on the edit profile screen
             
              editProfile(editlicenseClass)
              editProfile(editVehicleType)
              editProfileComfortLeveOflDriver(editComfortLevel)
              editProfile(editDeliversWithin)
              editProfileAvailabilityOfDriver(editAvailability)
              editProfile(editDrivingAbstract)
              editProfile(editPoliceCheck)
              editProfile(editwillingtoLift)
              editProfile(editPackingAndSorting)
              editProfile(editLanguagesSpoke)
              editProfile(editInsurancePolicy)

              cy.findByText('Save').click()
              cy.focused().should('have.attr', 'name', 'Driver Search')   
                  
        })

 //Use case 6: Send Email button from View full Profile - Driver Search Tab
        it('User should be able to send an Email to a Driver from View Full Profile Popup',function(){
            let driverName='Patrick'
            cy.findByRole("driverCard").first()
              .findAllByRole('driverName', { text: driverName }).first().parent()
              .siblings()
              .contains('button','View Full Profile')
              .click()
              .contains('button','Email')
              .should('have.attr','href').and('include', 'mailto:')         
        })

 //Use case 7: Delete button from View full Profile - Driver Search Tab
        it('User should be able to Delete Driver from View Full Profile Popup ',function(){
            let driverName='John,Smith'
            cy.findByRole('driverCard')
              .findAllByRole('driverName', { text: driverName }).first().parent()
              .siblings()
              .contains('button','View Full Profile')
              .click()
              .contains('button','Delete')
              .click()
            cy.findByText('Are you sure you would like to Delete '+ driverName +' Profile?').should('exist')
            cy.findByText('Delete').click()                                 
            cy.focused().should('have.attr', 'name', 'Driver Search')   
        })   
            
//Use case 8: Reset Password button from View full Profile - Driver Search Tab       

        it('User should be able to reset password for a Driver from View Full Profile Popup ',function(){
            let driverName='Neil'
             cy.findByRole('driverCard')
               .findAllByRole('driverName', { text: driverName }).first().parent()
               .siblings() 
               .contains('button','View Full Profile')
               .click()
               .contains('button','Reset Password')
               .click()
             cy.findByText("Email has been sent to registered email address").should('exist')
             cy.findByText('Close').click()
             cy.focused().should('have.attr', 'name', 'Driver Search')  
       })    

 // Use case 9: Edit Profile button from View full Profile - Driver Search Tab        

        it('User should be able to Edit Drivers profile from View Full Profile Popup',function(){
           
            let driverName='Paula'

            let editlicenseClass=['B']
            let editVehicleType=['Van']
            let editComfortLevel=['High Risk']
            let editDeliversWithin=['MidTown','East End']
            let editAvailability=['Monday 2 PM','Tuesday 7 AM']
            let editDrivingAbstract=['Last 6 months']
            let editPoliceCheck=['Willing to get one']
            let editwillingtoLift=['Up to 30lb']
            let editPackingAndSorting=['Packing']
            let editLanguagesSpoke=['portuguese','Dutch']
            let editInsurancePolicy=['Up to $2 Million']
            
            cy.findByRole('driverCard')
              .findAllByRole('driverName', { text: driverName }).first().parent()
              .siblings() 
              .contains('button','View Full Profile')
              .click()
              .contains('button','Edit Profile')
              .click()     
              .findByText('Edit Profile').should('not.exist')      // Verifying Edit profile button does not appear on the edit profile screen
             
              editProfile(editlicenseClass)
              editProfile(editVehicleType)
              editProfileComfortLeveOflDriver(editComfortLevel)
              editProfile(editDeliversWithin)
              editProfileAvailabilityOfDriver(editAvailability)
              editProfile(editDrivingAbstract)
              editProfile(editPoliceCheck)
              editProfile(editwillingtoLift)
              editProfile(editPackingAndSorting)
              editProfile(editLanguagesSpoke)
              editProfile(editInsurancePolicy)

              cy.findByText('Save').click()
              cy.focused().should('have.attr', 'name', 'Driver Search')   
                  
        })

//Use case 10: Send Request button from View full Profile - Driver Search Tab
       it('User should be able to send request to a Driver from View Full Profile Popup ',function(){

             let driverName='Harry Davis'
                 
               cy.findByRole('driverCard')
                 .findAllByRole('driverName', { text: driverName }).first().parent()
                 .siblings()
                 .contains('button','View Full Profile')
                 .click()
                 .siblings()
                 .contains('span','Send Request')
                 .click()
                 
                 .findByText('Messaging, '+driverName).should("be.visible")    //Pop up to send request
                  sendRequestInputs(sendRequestCheckboxes)                      // Enter  Rquest details on Pop-up           
                 .get('#day').select('15')   //update ID's post code is written 
                 .get('#month').select('Dec') //update ID's post code is written
                 .get('#year').select('2021')//update ID's post code is written
                 .get('#time').select('04:00')//update ID's post code is written
                 .get('#time_ampm').select('PM')//update ID's post code is written              
                  cy.contains('span','Send Request')
                 .click()
                 .findByText('Your request has been sent out to '+driverName).should("be.visible")    
                 .findByText("Close").click()   
                 cy.focused().should('have.attr', 'name', 'Driver Search')  
                
       })        
           

})


