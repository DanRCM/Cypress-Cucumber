@smoke
Feature: Test the product carousel

Background: 
    Given I am on the home page

Scenario: 
    When I click on "first" button bar
    Then I see the product #1

Scenario: 
    When I click on "second" button bar
    Then I see the product #2

Scenario:
    When I click on side "next" button
    Then I see the product #2
