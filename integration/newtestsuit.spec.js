import * as indexPg from '../page/index'
import * as dashboadPg from '../page/dashboard'


const NavBedroom= ':nth-child(3) > a'
const NavBil= ':nth-child(4) > a'
const NavClient= ':nth-child(5) > a'
const NavReservation= ':nth-child(6) > a'
const NavUser= ':nth-child(7) > a'

const PageButtonIndex= '#j_idt50 > [href="/hotel/faces/index.xhtml"]'

describe('Test suit ' ,function(){
   

    before(() => {
        cy.log('before the whole test suite')
        cy.log('Prepare database')
      })  
    beforeEach(() => {
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        indexPg.checkLoginLable(cy)
      })
      
      afterEach(() => {
        dashboadPg.checkDashboardtxt(cy)
        dashboadPg.performLogaut(cy)
        indexPg.checkLoginLable(cy) 
      })


   // test case 1
    it ('Testcase 1-Login and logout with correct data',function(){
       
        indexPg.performLogin(cy,'jp','1010')      
      
    })

    //Test case 2
    it ('Testcase 2-Login and logut with correct data admin',function(){
        indexPg.performLogin(cy,'marc','1010')
    })

    //Test case 3
    it ('Testcase 3-logain click to Reservation and logout ',function(){
        indexPg.performLogin(cy,'jp','1010')  
        dashboadPg.navigateToPage(cy,NavReservation)
        cy.get(PageButtonIndex).click()
      
    })

    //Test case 4
    it ('Testcase 4-logain click to Bil and logout ',function(){
        indexPg.performLogin(cy,'jp','1010')  
        dashboadPg.navigateToPage(cy,NavBil)
        cy.get(PageButtonIndex).click()

    })

    //Test case 5
    it ('Testcase 5-logain click to Client and logout ',function(){
        indexPg.performLogin(cy,'jp','1010')  
        dashboadPg.navigateToPage(cy,NavClient)
        cy.get(PageButtonIndex).click()
      
    })

    //Test case 6
    it ('Testcase 6-logain click to User and logout ',function(){
        indexPg.performLogin(cy,'jp','1010')  
        dashboadPg.navigateToPage(cy,NavUser)
        cy.get(PageButtonIndex).click()

    })


    //Test case 7
    it ('Testcase 7-logain click to Bedroom and logout ',function(){
        indexPg.performLogin(cy,'jp','1010')  
        dashboadPg.navigateToPage(cy,NavBedroom)
        cy.get(PageButtonIndex).click()
    })
    
     //Test case 8
     it ('Testcase 8-login and create new Client and logout' ,function(){
        indexPg.performLogin(cy,'marc','1010')
        dashboadPg.navigateToPage(cy,NavClient)
        dashboadPg.createNewClient(cy,'Sofia','Sofia@gmail.com','763333')
        dashboadPg.checkViewPageTxt(cy)
    
    })
    
        
    //Test case 9
     it ('Testcase 9-login and edit first Client and logout' ,function(){
        indexPg.performLogin(cy,'marc','1010')
        dashboadPg.navigateToPage(cy,NavClient)
        dashboadPg.editFirstClient(cy,'534226')
        dashboadPg.checkViewPageTxt(cy)
    
    })
    //Test case 10
    it ('Testcase 10-login and create a repeat Client and logout' ,function(){
        indexPg.performLogin(cy,'marc','1010')
        dashboadPg.navigateToPage(cy,NavClient)
        dashboadPg.createNewClient(cy,'Sofia','Sofia@gmail.com','763333')
        dashboadPg.errorMessageClientPage(cy)

      
    })
})

































/**describe('Test suit ' ,function(){
    it ('Testcase 1-Login and logout with correct data',function(){
        cy.log('test setup')
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
       
        cy.contains('Please, login!')
        cy.get('#login').type('jp')
        cy.get('#senha').type('1010')
        cy.get('#loginBtn').click()
       
        cy.contains('Hotel Accommodadion')
        cy.get('.fa-caret-down').click()
        cy.get('.dropdown-menu').click()
        cy.contains('Please, login!')      
       

    })
})*/