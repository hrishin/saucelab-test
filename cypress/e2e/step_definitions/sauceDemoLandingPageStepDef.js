import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import SauceDemoLandingPage from '../../pages/sauceDemoLandingPage';
import ProductListPage from '../../pages/productListPage';

const sauceDemoLandingPage = new SauceDemoLandingPage();
const productListPage = new ProductListPage();

Given('I visit sauce demo login page', function () {
    cy.visit('https://www.saucedemo.com/');
});

When('I login with valid username Password', () => {
    sauceDemoLandingPage.verifyHeaderLogo();
    sauceDemoLandingPage.fillUserName('standard_user');
    sauceDemoLandingPage.fillPassword('secret_sauce');
    sauceDemoLandingPage.clickLoginButton();

});

Then('The page title should be visible', () => {
    sauceDemoLandingPage.verifyPageTitle('Swag Labs');
});

Then('The accepted username list should be visible', () => {
    sauceDemoLandingPage.verifyUserNameList('Accepted usernames are', 'standard_user');
});

Then('The password for all users should be visible', () => {
    sauceDemoLandingPage.verifyPasswordList('Password for all users', 'secret_sauce');
});


When('click Login button', () => {
    sauceDemoLandingPage.clickLoginButton();
})

Then('Fill username textbox', () => {
    sauceDemoLandingPage.fillUserName('standard_user');
})

Then('I should see the username textbox required field validation message', () => {
    sauceDemoLandingPage.verifyValidationError('Username is required');
})

Then('I should see the password textbox required field validation message', () => {
    sauceDemoLandingPage.verifyValidationError('Password is required');
})


Then('Fill username textbox with invalid username', () => {
    sauceDemoLandingPage.fillUserName('invalidUserName');
})

Then('Fill password textbox with invalid password', () => {
    sauceDemoLandingPage.fillPassword('invalidPassword');
})

Then('I should see Username and password do not match any user in this service', () => {
    sauceDemoLandingPage.verifyValidationError('Username and password do not match any user in this service');
})

