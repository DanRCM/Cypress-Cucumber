import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import MethodsForPages from '../../../support/MethodsForPages';
Given('I am on the home page', () => {
    cy.visit('/');
});

When('I click on {string} button', page =>{
    MethodsForPages.changePage(page);
})

Then('I comprobate {string} page', page =>{
    MethodsForPages.verifyCurrentPage(page);
})