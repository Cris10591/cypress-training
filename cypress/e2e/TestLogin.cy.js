
describe('Test Login', () => {

  beforeEach(() => {

    cy.visit('https://app.luxurycoders.com');
  });

  it.only('Test Login Correcto', () => {

    cy.get('#username').type('apisciolari@luxurypresence.com')
    cy.get('#password').type('P1sc10l4r!')
    cy.contains('Continue').click()
    cy.get('[data-test-id="accounts-add-new-button"]').should('exist')
   
  })

  it('Test Login Password Incorrecta', () => {
    cy.get('#username').type('apisciolari@luxurypresence.com')
    cy.get('#password').type('P1sc10l444r!')
    cy.contains('Continue').click()
    cy.contains('Wrong email or password').should('exist')
  });

  it('Test Login Forgot Password', () => {
    cy.contains('Forgot password?').click()
    cy.get('#email').type('crruso@luxurypresence.com')
    cy.contains('Continue').click()
    cy.contains('Check your inbox').should('exist')
    cy.contains('A link to reset your password was sent to your email').should('exist')
    cy.contains('Return to log in').should('exist')
  });
});


