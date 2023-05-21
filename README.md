# Cypress (cucumber) tests for saucelab login functionality and page navigation

# Developer setup

## Development environment
IDE Installation: Visual Studio code / VS code

Suggested extensions: https://docs.cypress.io/guides/tooling/IDE-integration#Visual-Studio-Code

### Prerequisites
- cypress requires [NPM](https://www.npmjs.com) v18+ to be installed

### Setup Cypress
You will need to install cypress and link with NPM
```bash 
npm install --save-dev
npm link
npm link cypress-cucumber-preprocessor
```

## Running tests
You have to run the following command to run the test
```bash
npx cypress open - To run the test in browser
```

```bash
npx cypress run - To run the test in command line
```

## Project Structure:
Created the POM structure:

a. Inside the project directory, created the following folders:

cypress/e2e: This folder contains the features directory and step_definitions directory.

a. Inside the cypress/e2e/features folder, created the feature files for each regression scenario. For example:

sauceDemoLogin.feature: Contains test cases related to the login functionality.

b. Inside the cypress/e2e/step_definitions folder, created the step definition for the feature file scenarios.

cypress/pages: This folder contains page object classes.

productList.js: Contains methods and elements related to the products page.
sauceDemoLandingPage.js: Contains methods and elements related to the login page.
