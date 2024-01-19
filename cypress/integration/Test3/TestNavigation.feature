@smoke
Feature: Test Navigation Bar Button

Background: 
    Given I visit the HomePage

Scenario: Open Contact Page
    When I click 'Contact' to change the page.
    Then I should be on 'Contact' Page.

Scenario: Open About us Page
    When I click 'About us' to change the page.
    Then I should be on 'About us' Page.

Scenario: Open Cart Page
    When I click 'Cart' to change the page.
    Then I should be on 'Cart' Page.

Scenario: Open Log In Page
    When I click 'Log in' to change the page.
    Then I should be on 'Log in' Page.

Scenario: Open Sign Up Page
    When I click 'Sign up' to change the page.
    Then I should be on 'Sign up' Page.