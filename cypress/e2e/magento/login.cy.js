import homePage from "../../pages/homePage"
import loginPage from "../../pages/loginPage"

describe('Magneto login', () => {
  function randomEmail(){
    const randomString = Math.random().toString(36).substring(2,10)
    const email = randomString + "@gmail.com"
    return email
  }

  let newUserEmail = randomEmail()
  
  beforeEach (() =>{
    cy.visit('')
  })

  it('Success login', () => {
    homePage.clickOnSignin(),
    cy.fixture('usersValid.json').then((users) => {
      const userdata = users[0]
      loginPage.login(userdata.email, userdata.password)
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/');
      // Menggabungkan firstname dan lastname
      const fullName = `${userdata.firstname} ${userdata.lastname}`;
      cy.get(':nth-child(2) > .greet > .logged-in').should('contain', fullName);
    })
    
  })
  
  it('Fail login - not a registered email', () => {
    homePage.clickOnSignin(),
    cy.fixture('usersValid.json').then((users) => {
      const userdata = users[0]
      loginPage.login(newUserEmail, userdata.password)
      cy.get('.message-error > div').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later');
    })
    
  })
  
  it('Fail login - no password', () => {
    homePage.clickOnSignin(),
    cy.fixture('usersValid.json').then((users) => {
      const userdata = users[0]
      loginPage.login(userdata.email, ' ')
      cy.get('#pass-error').should('contain', 'This is a required field');
    })
    
  })
  
  it('Fail login - nothing', () => {
    homePage.clickOnSignin(),
    cy.fixture('usersValid.json').then((users) => {
      const userdata = users[0]
      loginPage.login(' ', ' '),
      // cy.get('#email-error').should('contain', 'This is a required field'),
      // cy.get('#pass-error').should('contain', 'This is a required field');
      cy.get('.message-error > div').should('contain', 'A login and a password are required');
    })
    
  })
  
  it('Fail login - Password no email', () => {
    homePage.clickOnSignin(),
    cy.fixture('usersValid.json').then((users) => {
      const userdata = users[0]
      loginPage.login(' ', userdata.password),
      // cy.get('#email-error').should('contain', 'This is a required field'),
      // cy.get('#pass-error').should('contain', 'This is a required field');
      cy.get('.message-error > div').should('contain', 'A login and a password are required');
    })
    
  })
})