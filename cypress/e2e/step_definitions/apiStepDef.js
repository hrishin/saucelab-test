import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
const baseUrl = 'https://restful-booker.herokuapp.com';
const username = 'admin';
const password = 'password123';
let authToken;
let bookingId;

Given('I am authenticated', () => {
  cy.request({
    method: 'POST',
    url: `${baseUrl}/auth`,
    body: {
      username,
      password
    }
  }).its('body.token').then((token) => {
    authToken = token;
    cy.log(`Token: ${authToken}`);
  });
});

When('I send a {string} request to {string}', (method, url) => {
  const updatedUrl = url.replace('{{bookingId}}', bookingId);
  cy.request({
    method,
    url: `${baseUrl}${updatedUrl}`,
    auth: {
      username,
      password
    }
  }).as('response');
  cy.get('@response').then((response) => {
    cy.log(`Response: ${JSON.stringify(response.body)}`);
  });
});

When('I send a {string} request to {string} with request body:', (method, url, requestBody) => {
    cy.request({
      method,
      url: `${baseUrl}${url}`,
      auth: {
        username,
        password
      },
      body: JSON.parse(requestBody)
    }).as('response');
  });

When('I send a {string} request to {string} with request body from fixture {string}', (method, url, fixtureName) => {
  cy.fixture(fixtureName).then((fixtureData) => {
    cy.request({
      method,
      url: `${baseUrl}${url}`,
      auth: {
        username,
        password
      },
      body: fixtureData
    }).as('response');
    cy.get('@response').then((response) => {
      cy.log(`Response: ${JSON.stringify(response.body)}`);
    });
  });
});

When('I send a DELETE request to {string}', (url) => {
  const updatedUrl = url.replace('{{bookingId}}', bookingId);
  cy.request({
    method: 'DELETE',
    url: `${baseUrl}${updatedUrl}`,
    auth: {
      username,
      password
    }
  }).as('response');
  cy.get('@response').then((response) => {
    cy.log(`Response: ${JSON.stringify(response.body)}`);
  });
});

Then('the response status code should be {int}', (statusCode) => {
  cy.get('@response').its('status').should('equal', statusCode);
});

Then('the response should have the booking ID', () => {
  cy.get('@response').its('body.bookingid').should('exist').then((id) => {
    bookingId = id;
    cy.log(`Booking ID: ${bookingId}`);
  });
});