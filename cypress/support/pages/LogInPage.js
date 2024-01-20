class LoginPage{
    verifyPage(){
        cy.get('.btn.btn-primary[onclick="logIn()"]').should('be.visible');
    }
}
module.exports = new LoginPage;