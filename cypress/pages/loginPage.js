class loginPage{
    elements = {
        email : () => cy.get('#email'),
        password : () => cy.get('#pass'),
        signinBtn : () => cy.get('#send2')
    }

    login(email, password){
        this.elements.email().clear().type(email),
        this.elements.password().clear().type(password),
        this.elements.signinBtn().click()
    }
}

module.exports = new loginPage()
// https://magento.softwaretestingboard.com/customer/account/login/