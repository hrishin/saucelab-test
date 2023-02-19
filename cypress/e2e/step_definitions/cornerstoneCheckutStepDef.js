import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I am on home page', function () {
    cy.visit('https://cornerstone-light-demo.mybigcommerce.com/');

});

When('I search for {string}', (searchTerm) => {
    cy.get('#quick-search-expand').click();
    cy.get('#nav-quick-search').type(searchTerm).type('{enter}');
});

When('I add the first search result to my cart', () => {
    cy.get('[class="card-title"]').first().click();
    cy.get('#form-action-addToCart').click();
});

When('I proceed to checkout', () => {
    cy.get('[href="/checkout"]').click()
});

When('I enter customer information', () => {
    const uuid = () => Cypress._.random(0, 1210)
    const id = uuid()
    const guestEmail = `guest-${id}@test.com`
    cy.get('#email').clear().type(guestEmail);
    cy.get('[class="form-fieldset checkout-privacy-policy"]').find('[type="checkbox"]').check({force: true})
    cy.get('[data-test="customer-continue-as-guest-button"]').click()
});

When('I enter my shipping information', () => {
    cy.get('[data-test="firstNameInput-text"]').type('John');
    cy.get('[data-test="lastNameInput-text"]').type('Doe');
    cy.get('[data-test="addressLine1Input-text"]').type('123 Main St');
    cy.get('[data-test="cityInput-text"]').type('Stevenage');
    cy.get('[data-test="postCodeInput-text"]').type('sg2 7df');
    cy.get('[data-test="phoneInput-text"]').type('1234567890')
    cy.get('#checkout-shipping-continue').click();
});

When('I enter my billing information with credit card number {string}, cvv {string}, and expiration {string}', (creditCardNumber, cvv, expiration) => {
    cy.get('#ccNumber').type(creditCardNumber);
    cy.get('#ccName').type('John Doe');
    cy.get('#ccExpiry').type(expiration);
    cy.get('#ccCvv').type(cvv);
    
});

When('I complete the checkout process', () => {
    cy.get('#checkout-payment-continue').click();
});

Then('I should see a confirmation message', () => {
    cy.get('[data-test="order-confirmation-order-number-text"] > span').should('contain', 'Your order number is');
});