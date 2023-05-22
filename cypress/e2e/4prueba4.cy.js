describe('Escenario 1', () => {
    it('Visits the Cypress', () => {
     cy.visit('https://www.cypress.io/')
     cy.contains('Pricing').click()
     cy.contains('Monthly').click({force: true})
    //cy.get('[data-cy="pricing-monthly-top"]').click()
    //cy.get('#Monthly-top').click({force: true})
   
     cy.contains('No credit card required').should('not.to.exist')
     cy.contains('75 $')
        })
  })