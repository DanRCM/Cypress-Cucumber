class AboutUsPage{
    verifyPage(){
        cy.get('h5#videoModalLabel').should('have.text', 'About us');
    }
}
module.exports = new AboutUsPage;