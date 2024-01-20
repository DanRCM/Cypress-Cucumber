import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import MethodsForPages from '../../../support/MethodsForPages';
Given('I am on the home page', () => {
    cy.visit('/');
});

When('I click on {string} button bar', numBar =>{
    MethodsForPages.SelectButtonCarousel(numBar);
})

When('I click on side {string} button', side =>{
    MethodsForPages.SelectSideCarousel(side);
})

When('I click on {string} button bar', numBar =>{
    MethodsForPages.SelectButtonCarousel(numBar);
})

Then('I see the product #{int}', number =>{
    MethodsForPages.VerifyVisibleProductBar(number);
})