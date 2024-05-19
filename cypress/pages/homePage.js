class homePage{
    elements = {
        signinBtn : () => cy.get('.panel > .header > .authorization-link > a'),
        createAccountBtn : () => cy.get('.panel > .header > :nth-child(3) > a') //masih pr sebenernya
    }

    clickOnSignin(){
        this.elements.signinBtn().click()
    }

    clickOnCreateAccount(){
        this.elements.createAccountBtn().click()
    }
}

module.exports = new homePage();