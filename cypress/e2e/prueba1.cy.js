describe('Escenario 1', () => {
    it('Visits the Cypress', () => {
      cy.visit('https://www.cypress.io/')
      cy.get('#dropdownProduct').click()
      cy.get('a[href="/app"]').eq(0).click()
      cy.contains('Test modern apps directly in your browser').should('exist');
      
        })
  })