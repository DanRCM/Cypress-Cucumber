import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import ProductSelection from "../../../support/ProductSelection";

Before(() => {
    cy.fixture('UserInf.json').as('Data');
  });

Given('I visit the homepage',()=>{
    cy.visit('/');
})

When('Select the first product for add to cart.',()=>{
    ProductSelection.SelectProduct1();
})

When('Select Phone Categorie.',()=>{
    ProductSelection.SelectItem();
})

And('Select the second product for add to cart.',()=>{
    ProductSelection.SelectProduct2();
})

And('Select the third product for add to cart.',()=>{
    ProductSelection.SelectProduct3();
})

And('View Detail of Product and then add.',()=>{
    ProductSelection.AddProducts();
})

And('Accept product.', () => {
    //for the alert in web page
    cy.on('window:alert', (text) => {
      cy.log('Add Product');
      cy.on('uncaught:exception', (err, runnable) => {
        return false;
      }).then(() => {
        return true;
      });
      expect(text).to.include('Product added');
    });
    MethodsForPages.clickOnPage('Cart');
});

And('I am going to the place order.',()=>{
    ProductSelection.PlaceOrder();
  })

And('Enter and send customer purchase information.',()=>{
    cy.get('@Data').then((Data) => {
        ProductSelection.FillInformation(Data.name,Data.country, 
            Data.city,Data.card,Data.month, Data.year)
      });
    ProductSelection.clickPurchaseBtn();
})

But('Return to Home Page.',()=>{
    MethodsForPages.clickOnPage('Home');
})

But('Remove product number {int} from the cart list.',(nlist)=>{
    ProductSelection.DeleteProduct(nlist);
})

Then('I verify that there are {int} product(s) added in the cart.', (expectedProducts) => {
    ProductSelection.CheckProductsInCart(expectedProducts);
});

Then('I verify successful message.', () => {
    ProductSelection.CheckPurchase();
});