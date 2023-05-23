describe('Test Login', () => {

    beforeEach(() => {
  
      cy.visit('https://app.luxurycoders.com');
    });
  
    it('Test Menu', () => {
  
      
      cy.fixture('user.json').then((credentials) => {
        const { email, password } = credentials;
  
        cy.login(email, password)
     
     
    })
    })
   
  });