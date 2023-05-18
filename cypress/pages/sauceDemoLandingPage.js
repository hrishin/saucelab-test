class SauceDemoLandingPage {

    headerLogo = `.login_logo`;
    tbUserName = `[data-test="username"]`;
    tbPassword = `[data-test="password"]`;
    btnLogin = `[data-test="login-button"]`;
    validationError = `[data-test="error"]`;
    usernameList = '#login_credentials';
    passwordList = `.login_password`;


    verifyHeaderLogo() {
        cy.log('Verify header logo');
        cy.get(this.headerLogo).contains('Swag Labs').should('be.visible');
    }

    verifyPageTitle(pageTitle) {
        cy.log('verifyPageTitle');
        cy.title().should('eq', pageTitle);
    }

    fillUserName(userName) {
        cy.log('fillUserName');
        cy.get(this.tbUserName).clear().type(userName);
    }

    fillPassword(password) {
        cy.log('password');
        cy.get(this.tbPassword).clear().type(password);
    }

    clickLoginButton() {
        cy.log('clickLoginButton');
        cy.get(this.btnLogin).click();
    }

    verifyValidationError(error) {
        cy.log('validationError');
        cy.get(this.validationError).contains(error).should('be.visible');
    }

    verifyUserNameList(title, userName) {
        cy.log('validationError');
        cy.get(this.usernameList).contains(title).should('be.visible');
        cy.get(this.usernameList).contains(userName).should('be.visible');
    }

    verifyPasswordList(title, password) {
        cy.log('validationError');
        cy.get(this.passwordList).contains(title).should('be.visible');
        cy.get(this.passwordList).contains(password).should('be.visible');
    }

}
export default SauceDemoLandingPage