class ContactPage{
    verifyPage(){
        cy.get('.btn.btn-primary[onclick="send()"]').should('be.visible');
    }
}
module.exports = new ContactPage;