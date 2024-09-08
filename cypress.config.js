const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    projectId: 'berac9',
    chromeWebSecurity: false,
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    },
    defaultCommandTimeout: 10000,
  },
})

