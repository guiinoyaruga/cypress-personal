const { defineConfig } = require("cypress");
const grep = require("@cypress/grep/src/plugin");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      grep(config);

      return config;
    },
  },
  component: {
    setupNodeEvents(on, config) {},
  },
  env: {
    grepFilterSpecs: true,
  },
  chromeWebSecurity: false,
  projectId: "6sbhfb",
});
