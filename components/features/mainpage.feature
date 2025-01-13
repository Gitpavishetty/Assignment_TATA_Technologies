Feature: Navigate to main page 
  As an user, I want to land on the main web page

  Background: Navigate to main page and verify title
    Given a user clicks on the URL and accepts all cookies
    Then the user verifies that the safety title exists

  Scenario: Check navigation bar and footer
    When user verifies all tabs in navigation bar are displayed and clickable
    Then user checks footer