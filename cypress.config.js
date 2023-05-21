const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  // Register preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  // ES Build loader
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  return config;
}

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
    setupNodeEvents,
  }
})
