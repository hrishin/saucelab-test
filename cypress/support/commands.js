// report portal integration
require('@reportportal/agent-js-cypress/lib/commands/reportPortalCommands')

// gnore client side javascript failures because we see a lot of new relic errors
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})