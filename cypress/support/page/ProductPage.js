class ProductPage{
    nameProduct(){return cy.get('.product-content .name');}
    btnAddToCart(){return cy.get('a:contains("Add to cart")');}
    deleteProduct(){return cy.get('#tbodyid tr a');}
    price(){return cy.get('.product-content .price-container :not(small)');}
}
module.exports = new ProductPage();