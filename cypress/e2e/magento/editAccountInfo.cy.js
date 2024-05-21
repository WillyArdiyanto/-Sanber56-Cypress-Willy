import homePage from "../../pages/homePage"
import loginPage from "../../pages/loginPage"
import myAccountPage from "../../pages/myAccountPage"
import editAccountPage from "../../pages/editAccountPage"

describe('Magneto Edit Account Info', () => {
    
  beforeEach (() =>{
    cy.visit('')
  })

  it.only('Success change Name', () => {
    homePage.clickOnSignin(),
    cy.fixture('usersValid.json').then((users) => {
      const userdata = users[0]
      const userdataEdit = users[1]
      loginPage.login(userdata.email, userdata.password)
      homePage.clickOnMyAccount()
      myAccountPage.clickOnEditBtn()
      // editAccountPage.editAccountName(userdataEdit.firstname, userdataEdit.lastname)
      // cy.get('.message-success > div').should('contain', 'You saved the account information.')
      // const fullNameEdit = `${userdataEdit.firstname} ${userdataEdit.lastname}`
      // cy.get('.box-content > p').should('contain', fullNameEdit)
    })
    
  })
  
  
})
