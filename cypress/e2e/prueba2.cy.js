describe('Escenario 1', () => {
    it('Visits the Cypress', () => {
    
     cy.visit('https://cloud.cypress.io/login')
     cy.get('.btn-provider-email').click()
     cy.get('#email').type('cris@yopmail.com')
     cy.get('#password').type('P4ssw0rd123!')
     cy.contains('Log In').click()
     cy.get('.user-name').contains('Cris Cris')
        })
  })