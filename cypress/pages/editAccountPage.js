class editAccountPage{
    elements = {
        firstname : () => cy.get('#firstname'),
        lastname : () => cy.get('#lastname'),
        email : () => cy.get('#email_address'),
        password : () => cy.get('#password'),
        confirmPassword : () => cy.get('#password-confirmation'),
        currentPassword : () => cy.get('#current-password'),
        changeEmailCheck : () => cy.get('#change-email'),
        changePasswordCheck : () => cy.get('#change-password'),
        saveBtn : () => cy.get('#form-validate > .actions-toolbar > div.primary > .action')
    }

    editAccount(firstname, lastname){
        this.elements.firstname().clear().type()
    }
}