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

  // it('Failed Create Account', () => {
  //   homePage.clickOnCreateAccount()
  //   createAccountPage.createAccount()
  // })

  it('Success Create Account', () => {
    homePage.clickOnCreateAccount(),
    cy.fixture('usersValid.json').then((users) => {
      const userdata = users[0]
      // cy.kasirlogin(userdata.email,userdata.passw)
      createAccountPage.createAccount(userdata.firstname, userdata.lastname, newUserEmail, userdata.password, userdata.confirm)
    })
    
  })
})

