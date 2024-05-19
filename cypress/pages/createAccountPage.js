class createAccountPage{
    elements = {
        firstnameText : () => cy.get('#firstname'),
        lastnameText : () => cy.get('#lastname'),
        emailText : () => cy.get('#email_address'),
        passwordText : () => cy.get('#password'),
        confirmText : () => cy.get('#password-confirmation'),
        createBtn : () => cy.get('#form-validate > .actions-toolbar > div.primary > .action'),
        message : () => cy.get('.message-success'),
        accountInfo : () => cy.get('.box-content > p')
    }

    createAccount(firstnameText, lastnameText, emailText, passwordText, confirmText){
        this.elements.firstnameText().clear().type(firstnameText),
        this.elements.lastnameText().clear().type(lastnameText),
        this.elements.emailText().clear().type(emailText),
        this.elements.passwordText().clear().type(passwordText),
        this.elements.confirmText().clear().type(confirmText),
        this.elements.createBtn().click()
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/'),
        this.elements.message().should('contain', 'Thank you for registering with Main Website Store.'), //masih pr
        this.elements.accountInfo().should('contain', `${firstnameText} ${lastnameText} ${emailText}`)

    }
}
module.exports = new createAccountPage();

// cy.get('.message-success > div')