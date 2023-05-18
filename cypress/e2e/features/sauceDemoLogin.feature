
Feature: User login and logout validation

  Scenario: Landing page title and text validation
    Given I visit sauce demo login page
    Then The page title should be visible
    And The accepted username list should be visible
    And The password for all users should be visible

  Scenario: Successful user login validation
    Given I visit sauce demo login page
    When I login with valid username Password
    Then I should see the logout link in the product list page menu

  Scenario: Logout functionality for logged in user
    Given I visit sauce demo login page
    When I login with valid username Password
    Then I should see the logout link in the product list page menu
    And I should able to logout successfully

  Scenario: Login page username textbox required field validation
    Given I visit sauce demo login page
    When click Login button
    Then I should see the username textbox required field validation message


  Scenario: Login page password textbox required field validation
    Given I visit sauce demo login page
    When Fill username textbox
    And click Login button
    Then I should see the password textbox required field validation message

  Scenario: Login page invalid username password validation
    Given I visit sauce demo login page
    When Fill username textbox with invalid username
    And Fill password textbox with invalid password
    And click Login button
    Then I should see Username and password do not match any user in this service

