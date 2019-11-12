//Elements

const DashboardDownDra = '.fa-caret-down'
const DashboardDownDraButton = '.dropdown-menu > li > a'
const DashbordPgTitle= 'Dashboard'
const NavPageTxt= 'List'

const ClientCreatePageTxt= 'Create New Client'
const ClientCreateButton= '#j_idt50 > a.btn.btn-primary'
const ClientName = '#name'
const ClientMail= '#email'
const ClientGender='#gender > tbody > tr > td:nth-child(1) > label'
const ClientTel ='#socialSecurityNumber'  
const SaveButton='#j_idt52 > a.btn.btn-primary'
const ClientViewTxt= 'View'
const BacktoDashboardSidan='#j_idt51 > a:nth-child(14)'

const ClientEditButton='#j_idt50 > table > tbody > tr:nth-child(1) > td:nth-child(7) > a:nth-child(2)'
const ClientEditSave ='.btn-primary'

const ClientErrorMessage='A persistence error occurred.'
const ClientBacktoDashboardPage='#j_idt52 > [href="/hotel/faces/index.xhtml"]'

//functioner


function checkDashboardtxt(cy){
    cy.contains(DashbordPgTitle)
 } 
function performLogaut(cy){
    cy.get(DashboardDownDra).click()
    cy.get(DashboardDownDraButton).click()
}
function navigateToPage(cy,PageName){
    cy.get(PageName).click()
    cy.contains(NavPageTxt)   
  
}
// Client

function checkViewPageTxt(cy){
    cy.contains(ClientViewTxt) 
    cy.get(BacktoDashboardSidan).click()
}

function createNewClient(cy,Cname,Cmail,Ctel){

    cy.get(ClientCreateButton).click() 
    cy.contains(ClientCreatePageTxt)   
    cy.get(ClientName).type(Cname)
    cy.get(ClientMail).type(Cmail)
    cy.get(ClientGender).click()
    cy.get(ClientTel).type(Ctel)
    cy.get(SaveButton).click()
    
   }

function editFirstClient(cy,newClientTel){
    cy.get(ClientEditButton).click()
    cy.get(ClientTel).clear()
    cy.get(ClientTel).type(newClientTel)
    cy.get(ClientEditSave).click()
   
   }
function errorMessageClientPage(cy){
    cy.contains(ClientErrorMessage)
    cy.get(ClientBacktoDashboardPage).click()
}



//Exports
module.exports={
   
    checkDashboardtxt,
     performLogaut,
    navigateToPage,
    createNewClient,
    editFirstClient,
    checkViewPageTxt,
    errorMessageClientPage
    
}