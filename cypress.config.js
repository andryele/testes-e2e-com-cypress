const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    defaultCommandTimeout: 60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})

