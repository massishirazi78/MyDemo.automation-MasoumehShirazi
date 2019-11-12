//Elements
const usernameTxtField= '#login'
const passwordTxtfield= '#senha'
const submitButtonLogin='#loginBtn'
const LoginFormLabel= 'Please, login!'


//functioner

function performLogin(cy,Username,Password){
    cy.get(usernameTxtField).clear()
    cy.get(passwordTxtfield).clear()
    cy.get(usernameTxtField).type(Username)
    cy.get(passwordTxtfield).type(Password)
    cy.get(submitButtonLogin).click()
}

function checkLoginLable(cy){
    cy.contains(LoginFormLabel)
}


//Exports
module.exports={
    performLogin,checkLoginLable
}