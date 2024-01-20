class CartPage{
    listProducts(){return cy.get('#tbodyid tr', { timeout: 10000 });}
    deleteButton(){return cy.get('#tbodyid tr a');}
    verifyPage(){
        cy.get('.col-lg-8 h2').should('have.text', 'Products');
    }
    successLabel(){return cy.get('h2:contains("Thank you for your purchase!")')}
    placeOrderBtn(){return cy.get('#page-wrapper button');}
    name(){return cy.get('#name');}
    country(){return cy.get("#country");}
    city(){return cy.get('#city');}
    card(){return cy.get('#card');}
    monthCard(){return cy.get('#month');}
    yearCard(){return cy.get('#year');}
    purchaseButton(){return cy.get('.modal-footer button[onclick="purchaseOrder()"]');}
    verifyPurchase(){return this.successLabel().should('exist');}
}
module.exports = new CartPage;