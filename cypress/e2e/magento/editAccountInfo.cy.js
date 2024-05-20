import homePage from "../../pages/homePage"
import loginPage from "../../pages/loginPage"
import myAccountPage from "../../pages/myAccountPage"

describe('Magneto Edit Account Info', () => {
    
  beforeEach (() =>{
    cy.visit('')
  })

  it.only('Success', () => {
    homePage.clickOnSignin(),
    cy.fixture('usersValid.json').then((users) => {
      const userdata = users[0]
      loginPage.login(userdata.email, userdata.password)
      // myAccountPage.clickOnEditBtn()
      cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click(),
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/edit/')
    })
    
  })
  
  
})