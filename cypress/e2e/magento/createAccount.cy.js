import homePage from "../../pages/homePage"
import createAccountPage from "../../pages/createAccountPage"

describe('Magento create account', () => {
  function randomEmail(){
    const randomString = Math.random().toString(36).substring(2,10)
    const email = randomString + "@gmail.com"
    return email
  }

  let newUserEmail = randomEmail()

  beforeEach (() =>{
    cy.visit('')
  })

  it('Success Create Account', () => {
    homePage.clickOnCreateAccount(),
    cy.fixture('usersValid.json').then((users) => {
      const userdata = users[0]
      createAccountPage.createAccount(userdata.firstname, userdata.lastname, newUserEmail, userdata.password, userdata.confirm)
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/'),
      cy.get('.message-success').should('contain', 'Thank you for registering with Main Website Store.'); 
      const fullName = `${userdata.firstname} ${userdata.lastname} ${userdata.email}`
      // cy.get('.box-content > p').should('contain', fullName) //masih pr
    })
    
  })

  it('Fail Create Account - same email', () => {
    homePage.clickOnCreateAccount(),
    cy.fixture('usersValid.json').then((users) => {
      const userdata = users[0]
      createAccountPage.createAccount(userdata.firstname, userdata.lastname, userdata.email, userdata.password, userdata.confirm)
    })
    cy.get('.message-error > div').should('contain','There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
  })

  it('Fail Create Account - Empty firstname', () => {
    homePage.clickOnCreateAccount(),
    cy.fixture('usersValid.json').then((users) => {
      const userdata = users[0]
      createAccountPage.createAccount(' ', userdata.lastname, newUserEmail, userdata.password, userdata.confirm)
    })
    cy.get('#firstname-error').should('contain','This is a required field')
  })

  it('Fail Create Account - Empty lastname', () => {
    homePage.clickOnCreateAccount(),
    cy.fixture('usersValid.json').then((users) => {
      const userdata = users[0]
      createAccountPage.createAccount(userdata.firstname, ' ', newUserEmail, userdata.password, userdata.confirm)
    })
    cy.get('#lastname-error').should('contain','This is a required field')
  })

  it('Fail Create Account - Empty email', () => {
    homePage.clickOnCreateAccount(),
    cy.fixture('usersValid.json').then((users) => {
      const userdata = users[0]
      createAccountPage.createAccount(userdata.firstname, userdata.lastname, ' ', userdata.password, userdata.confirm)
    })
    cy.get('#email_address-error').should('contain','This is a required field')
  })

  it('Fail Create Account - incorrect email format', () => {
    homePage.clickOnCreateAccount(),
    cy.fixture('usersValid.json').then((users) => {
      const userdata = users[0]
      createAccountPage.createAccount(userdata.firstname, userdata.lastname, userdata.firstname, userdata.password, userdata.confirm)
    })
    cy.get('#email_address-error').should('contain','Please enter a valid email address (Ex: johndoe@domain.com)')
  })

  it('Fail Create Account - Empty password', () => {
    homePage.clickOnCreateAccount(),
    cy.fixture('usersValid.json').then((users) => {
      const userdata = users[0]
      createAccountPage.createAccount(userdata.firstname, userdata.lastname, newUserEmail, ' ', ' ')
    })
    cy.get('#password-error').should('contain','This is a required field')
    cy.get('#password-confirmation-error').should('contain','This is a required field')
  })

  it('Fail Create Account - incorrect confirmation', () => {
    homePage.clickOnCreateAccount(),
    cy.fixture('usersValid.json').then((users) => {
      const userdata = users[0]
      createAccountPage.createAccount(userdata.firstname, userdata.lastname, newUserEmail, userdata.password, ' ')
    })
    cy.get('#password-confirmation-error').should('contain','This is a required field')
  })
})

