const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

const registerReportPortalPlugin = require("@reportportal/agent-js-cypress/lib/plugin");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 30000,
  execTimeout: 60000,
  watchForFileChanges: false,
  requestTimeout: 15000,
  responseTimeout: 15000,
  reporter: 'cypress-multi-reporters',
  viewportWidth: 1900,
  viewportHeight: 1080,
  waitForAnimation: true,
  videoUploadOnPasses : false,
  retries: {
    runMode: 1,
  },
  e2e: {
    
    experimentalSessionAndOrigin: true,
    specPattern: 'cypress/e2e/features/*.feature',
    
  }
  "testFiles": "**/*.feature"
  
})
