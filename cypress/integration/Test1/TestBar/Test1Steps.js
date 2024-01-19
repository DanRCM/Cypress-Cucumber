import MethodsForPages from "../../../support/MethodsForPages";
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('I visit the HomePage', () =>{
    cy.visit('/');
});

When('I click on the {string}.', (element) => {
    MethodsForPages.clickBarNext(element);
});

When('I click on the {string} button.', (element) => {
    MethodsForPages.clickBarPrevious(element);
});

When('I click on the {string} bar button.', (element) => {
    MethodsForPages.clickBtnBar(element);
});

Then('Carousel image changes to the {string} image', (element) => {
    MethodsForPages.verifyImageNumber(element)
})