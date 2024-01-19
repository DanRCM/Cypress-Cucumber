@fullregression @checkout
Feature: Multiples interactions with products

Background: 
    Given I visit the HomePage

Scenario: Add one product
    When Select the first product for add to cart.
    And View Detail of Product and then add.
    And Accept product.
    Then I verify that there are 1 product added in the cart.

Scenario: Remove products from the cart
    When Select the first product for add to cart.
    And View Detail of Product and then add.
    And Accept product.
    But Return to Home Page.
    And Select the second product for add to cart.
    And View Detail of Product and then add.
    And Accept product.
    Then I verify that there are 2 products added in the cart.
    But Remove product number 2 from the cart list.
    Then I verify that there are 1 product added in the cart.

Scenario: Buy Phones
    When Select Phone Categorie.
    And Add a laptop to cart.
    And View Detail of Product and then add.
    And Accept product.
    Then I verify that there are 1 product added in the cart.
    And I am going to the place order.
    And Enter and send customer purchase information.
    Then I verify successful message.