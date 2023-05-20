Feature: API Tests

  Scenario: GET /booking/{bookingId}
    Given 1. I am authenticated
    When 1. I send a "GET" request to "/booking/1"
    Then 1. the response status code should be 200

  Scenario: POST /booking
    Given 1. I am authenticated
    When 1. I send a "POST" request to "/booking" with request body from fixture "bookingData"
    Then 1. the response status code should be 200
    And 1. the response should have the booking ID

  Scenario: PUT /booking/{bookingId}
    Given 1. I am authenticated
    When 2. I send a "PUT" request to "/booking/1" with request body:
      """
      {
    "firstname" : "Jameshgj",
    "lastname" : "Brownhgjg",
    "totalprice" : 1116,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfastd"
}
      """
    Then 1. the response status code should be 200

  Scenario: PATCH /booking/{bookingId}
    Given 1. I am authenticated
    When 2. I send a "PATCH" request to "/booking/1" with request body:
      """
      {
        "lastname": "Updated"
      }
      """
    Then 1. the response status code should be 200

  Scenario: DELETE /booking/{bookingId}
    Given 1. I am authenticated
    When 1. I send a "DELETE" request to "/booking/{{bookingId}}"
    Then 1. the response status code should be 201