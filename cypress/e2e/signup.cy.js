import { faker } from '@faker-js/faker/locale/en'

describe('Sign up', () => {
  const emailAddress = `${faker.datatype.uuid()}@${Cypress.env('MAILOSAUR_SERVER_ID')}.mailosaur.net`
  const password = Cypress.env('USER_PASSWORD')
  beforeEach(() => {
    cy.intercept('GET', '**/notes').as('getNotes')
    cy.visit('/signup')
    cy.get('#email').type(Cypress.env('USER_EMAIL')) // Use environment variable or some valid test email
    cy.get('#password').type(Cypress.env('USER_PASSWORD'), { log: false })
    cy.get('#confirmPassword').type(Cypress.env('USER_PASSWORD'), { log: false })
    cy.get('button[type="submit"].LoaderButton', { timeout: 10000 }).should('be.disabled').and('be.visible').click()
    cy.get('#confirmationCode').should('be.visible')
    cy.mailosaurGetMessage(Cypress.env('MAILOSAUR_SERVER_ID'), {
      sentTo: Cypress.env('USER_EMAIL')
    }).then(message => {
      const confirmationCode = message.html.body.match(/\d{6}/)[0]
      cy.get('#confirmationCode').type(${confirmationCode}{enter})
      cy.wait('@getNotes')
    })
  })
  it('successfully signs up using confirmation code sent via email', () => {
    cy.contains('h1', 'Your Notes').should('be.visible')
    cy.contains('a', 'Create a new note').should('be.visible')
  })
})