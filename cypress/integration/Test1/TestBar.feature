@smoke
Feature: Test Carousel Features Next or Previous Button

Background: 
    Given I visit the HomePage

    Scenario: From First to Second Image with next Button
        When I click on the 'next button'.
        Then Carousel image changes to the 'second' image

    Scenario: From First to third Image with left side button
        When I click on the 'left' button.
        Then Carousel image changes to the 'third' image

    Scenario: From First to Third Image with the Button Bar
        When I click on the 'third' bar button.
        Then Carousel image changes to the 'third' image