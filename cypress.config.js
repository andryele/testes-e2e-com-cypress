const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    projectId: 'berac9',
    chromeWebSecurity: false,
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    defaultCommandTimeout: 70000,
  },
})

