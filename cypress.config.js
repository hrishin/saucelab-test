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
    async setupNodeEvents(on, config) {


      console.log(`Tests are running on ${config.env.environment} environment`);
	  
      on("task", {
        generateOTP: require("cypress-otp")
      })
	  
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      await registerReportPortalPlugin(on, config);

      return config;
    },
    experimentalSessionAndOrigin: true,
    specPattern: 'cypress/e2e/features/*.feature',
    
  }
  
})