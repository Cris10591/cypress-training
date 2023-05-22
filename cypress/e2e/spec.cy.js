
describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://app.luxurycoders.com')
    cy.get('#username').type('apisciolari@luxurypresence.com')
    cy.get('#password').type('P1sc10l4r!')
    cy.contains('Continue').click()
  })
})
