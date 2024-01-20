class signUpPage{
    verifyPage(){
        cy.get('.btn.btn-primary[onclick="register()"]').should('be.visible');
    }
}
module.exports = new signUpPage;