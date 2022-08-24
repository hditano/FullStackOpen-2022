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
    cy.get('.notificationClass').should('have.css', 'color', 'rgb(255, 0, 0)')
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
describe('when logged in', () => {
      beforeEach(() => {
      const login = {
        name: 'hditano',
        password: '456'
      };
    cy.contains('Login');
    cy.get('#loginUsername').type(login.name);
    cy.get('#loginPassword').type(login.password);
    cy.get('#loginButton').click();

    cy.contains(`Welcome ${login.name}`)
    });
  it('A blog can be created', () => {
      const newBlog = {
        title: 'My Test',
        author: 'Hernan',
        url: 'www.google.com',
        likes: 10,
      }
    cy.contains('Create').click();
    cy.get('[name=title]').type(newBlog.title);
    cy.get('[name=author]').type(newBlog.author);
    cy.get('[name=url]').type(newBlog.url);
    cy.get('#button').click();
        })
    })



