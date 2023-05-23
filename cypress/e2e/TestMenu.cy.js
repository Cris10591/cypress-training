describe('Test Menu', () => {
    beforeEach(() => {
     cy.visit('https://app.luxurycoders.com');

     cy.fixture('user.json').then((credentials) => {
     const { email, password } = credentials;
     cy.login(email, password);
      });
    });
  
    it('Test Menu Account', () => {
     
    
      cy.get('[data-test-id="nav-item-Accounts"]').click()
      cy.url().should('contain', 'https://app.luxurycoders.com/admin/accounts');
      cy.get('[data-test-id="accounts-add-new-button"]').should('exist');
    })
    it('Test Menu Website', () => {
     
      cy.get('[data-test-id="nav-item-Websites"]').click()
      cy.url().should('contain', 'https://app.luxurycoders.com/admin/elements');
      cy.contains('Add element').should('exist');
      
    
    });
    it('Test Menu MLS Tools', () => {
     
      cy.get('[data-test-id="nav-item-MLS Tools"]').click()
      cy.url().should('contain', 'https://app.luxurycoders.com/admin/mls-providers');
      cy.contains('Add new').should('exist');
          
    });
    it('Test Menu Listing Feeds', () => {
     
      cy.get('[data-test-id="nav-item-Listing Feeds"]').click()
      cy.url().should('contain', 'https://app.luxurycoders.com/admin/networks');
      cy.contains('Add Feed').should('exist');
        
    });
    it('Test Menu Curate Media', () => {
     
      cy.get('[data-test-id="nav-item-Curated Media"]').click()
      cy.url().should('contain', 'https://app.luxurycoders.com/admin/accounts');
      cy.contains('Media Gallery').should('exist');
     
    });
  });