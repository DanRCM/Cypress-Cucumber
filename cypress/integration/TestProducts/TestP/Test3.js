import {Before, Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import MethodsForPages from "../../../support/MethodsForPages"

Before(() => {
    cy.fixture('DataInf.json').as('DataUser');
  });

Given('I am on the home page',()=>{
    cy.visit('/');
})
When('Select a product in home page.',()=>{
    MethodsForPages.selectProduct1();
})
When('Select Phone Categories.',()=>{
    MethodsForPages.selectPhoneCat();
})
And('Select the second product in home page.',()=>{
    MethodsForPages.selectProduct2();
})
And('Add a phone to cart.',()=>{
    MethodsForPages.selectProduct1();
})
And('I view the detail product and add product to cart.',()=>{
    MethodsForPages.addProductToCart();
})
And('I click on the add to cart button to save my purchase.', () => {
    cy.on('window:alert', (text) => {
      cy.on('uncaught:exception', (err, runnable) => {
        return false;
      }).then(() => {
        return true;
      });
      expect(text).to.include('Product added');
    });
    MethodsForPages.changePage('Cart');
  });
  And('I want to place my order.',()=>{
    MethodsForPages.placeOrder();
  })
  And('Enter and send my personal data.',()=>{
    cy.get('@DataUser').then((DataUser) => {
        MethodsForPages.fillInformation(DataUser.name,DataUser.country, 
            DataUser.city,DataUser.card,DataUser.month, DataUser.year)
      });
    MethodsForPages.clickPurchaseButton();
  })
  And('Return to Home Page.',()=>{
    MethodsForPages.changePage('Home');
  })
  But('Remove product #{int} from the list.',(number)=>{
    MethodsForPages.deleteProduct(number);
  })
  Then('I verify the cart has {int} product(s).', (expectedProducts) => {
    MethodsForPages.checkProductsInList(expectedProducts);
  });
  Then('I must display a successful purchase message.', () => {
    MethodsForPages.checkPurchase();
  });