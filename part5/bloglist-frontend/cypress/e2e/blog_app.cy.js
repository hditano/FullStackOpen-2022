describe('Blog App', () => {
  
  const failedLogin = {
    name: "hditano",
    password: "446"
  }

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
  it('Logs incorrectly', () => {
    cy.contains('Login');
    cy.get('#loginUsername').type(failedLogin.name);
    cy.get('#loginPassword').type(failedLogin.password);
    cy.get('#loginButton').click();

    cy.contains('Username or Password invalid')
    })
  it.skip('Can create user', () => {
    const user = {
      username: "zoeci",
      name: "Zoe",
      password: "123"
    }

    cy.request('POST', 'http://localhost:3001/api/user/', user)
    })
     it('fails login on BackEnd', () => {
    cy.request({method: 'POST', url: 'http://localhost:3001/api/login', body: failedLogin, failOnStatusCode: false})
      .then((res) => {
        expect(res.status).equal(400)
      })
    })
  })
