describe('register functionallity with wrong credentials', () => {
  it('should display an unauthorized message with invalid credentials', () => {

    cy.visit('/')
    cy.get('#username').type('admin2');
    cy.get('#password').type('Aa976521!');
    cy.get('button.fuse-mat-button-large.bg-primary').click();
    cy.get('.fuse-alert-message').should('contain', 'Unauthorized - Invalid user credentials');
  });


});