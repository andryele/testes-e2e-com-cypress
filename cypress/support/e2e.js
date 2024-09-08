import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep()
import 'cypress-iframe'
import 'cypress-mailosaur'
import './commands'


// Alternatively you can use CommonJS syntax:
// require('./commands')