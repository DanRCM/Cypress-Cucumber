class LogInPage{
    LogInPageItems={
        inUsername:'#loginusername',
        inPassword: '#loginpassword',
        btnLogIn: '#logInModalbutton:contains("Log in")',
        btnClose: '#logInModal button:contains("Close")',
        modal: '#logInModal'
    }
    usernameInput(){return cy.get(this.LogInPageItems.inUsername);}
    passwordInput(){return cy.get(this.LogInPageItems.inPassword);}
    logInButton(){return cy.get(this.LogInPageItems.btnLogIn);}
    closeButton(){return cy.get(this.LogInPageItems.btnClose);}
    modal(){return cy.get(this.LogInPageItems.modal);}
    
    verifyPage(){this.modal().should('have.css','display','block');}
}

module.exports = new LogInPage();