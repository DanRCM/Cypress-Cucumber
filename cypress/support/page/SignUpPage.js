class SignUpPage{
    SignUpPageElements={
        usernameInput:'#sign-username',
        passwordInput: '#sign-password',
        signUpButton: '#signInModal button:contains("Sign up")',
        closeButton: '#signInModal button:contains("Close")',
        modal: '#signInModal'
    }
    usernameInput(){return cy.get(this.SignUpPageElements.usernameInput);}
    passwordInput(){return cy.get(this.SignUpPageElements.passwordInput);}
    modal(){return cy.get(this.SignUpPageElements.modal);}
    signUpButton(){return cy.get(this.SignUpPageElements.signUpButton);}
    closeButton(){return cy.get(this.SignUpPageElements.closeButton);}

    verifyPage(){this.modal().should('have.css','display','block');}
}
module.exports = new SignUpPage();