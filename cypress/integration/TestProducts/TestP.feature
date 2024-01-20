@fullregression @checkout
Feature: add, remove and other products interactions

Background: 
    Given I am on the home page

Scenario: Add a product to cart
    When Select a product in home page.
    And I view the detail product and add product to cart.
    And I click on the add to cart button to save my purchase.
    Then I verify the cart has 1 product.

Scenario: Remove products to cart
    When Select a product in home page.
    And I view the detail product and add product to cart.
    And I click on the add to cart button to save my purchase.
    And Return to Home Page.
    And Select the second product in home page.
    And I view the detail product and add product to cart.
    And I click on the add to cart button to save my purchase.
    Then I verify the cart has 2 products.
    But Remove product #1 from the list.
    Then I verify the cart has 1 product.

Scenario: Buy a Phone
    When Select Phone Categories.
    And Add a phone to cart.
    And I view the detail product and add product to cart.
    And I click on the add to cart button to save my purchase.
    Then I verify the cart has 1 product.
    And I want to place my order.
    And Enter and send my personal data.
    Then I must display a successful purchase message.
