describe('Blog App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })
  it('Logs in correctly', () => {
    cy.contains('Login');
    cy.get('#loginUsername').type('hditano');
    cy.get('#loginPassword').type('456');
    cy.get('#loginButton').click();

    cy.contains('Welcome hditano')
      })
  })
