Feature: Navigate to the main page
  As a user, I want to land on the main web page and check footer, navigation links and safety links

  Background: Navigate to the main page and verify the title
    Given a user clicks on the URL and accepts all cookies
    Then the user verifies that the safety title exists

  @check-barfooter
  Scenario: Check navigation bar and footer
    When user verifies all tabs in the navigation bar are displayed and clickable
    Then user checks footer

  @check-links
  Scenario: Check all links under the Safety title
    Given user checks all links under the Safety title