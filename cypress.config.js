const { defineConfig } = require("cypress");
const grep = require("@cypress/grep/src/plugin");

module.exports = defineConfig({
  projectId: "6sbhfb",
  e2e: {
    setupNodeEvents(on, config) {
      grep(config)
      // implement node event listeners here
    },
  },
  component: {
    setupNodeEvents(on, config) {},
  },
  env: {
    grepFilterSpecs: true,
  },
});
