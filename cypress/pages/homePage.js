class homePage{
    elements = {
        signinBtn : () => cy.get('.panel > .header > .authorization-link > a'),
        createAccountBtn : () => cy.get('.panel > .header > :nth-child(3) > a'), //masih pr sebenernya
        dropdownBtn : () => cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action'),
        myAccountBtn : () => cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a'),
        myAccountBtn2 : () => cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action'),
        
    }

    clickOnSignin(){
        this.elements.signinBtn().click()
    }

    clickOnCreateAccount(){
        this.elements.createAccountBtn().click()
    }

    clickOnMyAccount(){
        this.elements.dropdownBtn().click()
        this.elements.myAccountBtn().click()
    }
}

module.exports = new homePage();