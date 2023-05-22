describe('Escenario 1', () => {
    it('Visits the Cypress', () => {
     cy.visit('https://www.cypress.io/')
     cy.contains('Log In').click()
     cy.visit('https://cloud.cypress.io/login')
     cy.get('.btn-provider-email').click()
     cy.get('#email').type('cris@yopmail.com')
     cy.get('#password').type('incorrecto!')
     cy.contains('Log In').click()
cy.get('.error-message').contains('Incorrect email address or password')
    //cy.contains('Incorrect email address or password').should('exist')

        })
  })