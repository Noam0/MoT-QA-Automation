describe('register functionallity', () => {
  it('should load the homepage and perform a search', () => {

    cy.visit('/')


    cy.get('#username').type('admin');
    cy.get('#password').type('Aa123456!');
    cy.get('button.fuse-mat-button-large.bg-primary').click();

    
    cy.get('a[href="/audit"]').click();
    cy.get('tr[role="row"][mat-row]').first().within(() => {
      cy.get('.mat-column-username').should('contain', 'admin');
      cy.get('.mat-column-role').should('contain', 'Admin');
      cy.get('.mat-column-action').should('contain', 'User logged in');
  });


  });




});

describe('register functionallity', () => {
  it('should load the homepage and perform a search', () => {

    cy.visit('/')


    cy.get('#username').type('admin');
    cy.get('#password').type('Aa123456!');
    cy.get('button.fuse-mat-button-large.bg-primary').click();

    
    cy.get('a[href="/audit"]').click();
    cy.get('tr[role="row"][mat-row]').first().within(() => {
      cy.get('.mat-column-username').should('contain', 'admin');
      cy.get('.mat-column-role').should('contain', 'Admin');
      cy.get('.mat-column-action').should('contain', 'User logged in');
  });


  });




});