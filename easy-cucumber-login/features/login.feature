Feature: Login Page

  Scenario: Successful login
    Given I open the login page
    When I enter valid username and password
    And I click the login button
    Then I should see the appointment page