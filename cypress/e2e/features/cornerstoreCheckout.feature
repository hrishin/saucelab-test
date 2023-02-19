
Feature: Add a product Cart and complete checkout

Scenario: Add a product to Cart and complete checkout with credit card
  Given I am on home page
  When I search for "Scrub brush"
  When I add the first search result to my cart
  When I proceed to checkout
  When I enter customer information
  When I enter my shipping information
  When I enter my billing information with credit card number "4111111111111111", cvv "123", and expiration "03/26"
  When I complete the checkout process
  Then I should see a confirmation message