# Cypress (cucumber) tests for saucelab login functionality and page navigation

# Developer setup

## Development environment
IDE Installation: Visual Studio code / VS code

Suggested extensions: https://docs.cypress.io/guides/tooling/IDE-integration#Visual-Studio-Code

### Dependencies
cypress requires [NPM](https://www.npmjs.com) (version at least 6.14.14) to be installed

### Setup Cypress
You will need to install cypress and link with npm
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
