import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import PageMethods from "../../../support/PageMethods";

Given('I visit the homepage',()=>{
    cy.visit('/');
})
When('I click {string} to change the page.',(page)=>{
    PageMethods.changePage(page);
})
Then('I should be on {string} Page.',(page)=>{
    PageMethods.verifyPage(page);
})