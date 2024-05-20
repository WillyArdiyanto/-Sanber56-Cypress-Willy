class myAccountPage{
    elements = {
        editBtn : () => cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span'),
        changePasswordBtn : () => cy.get('.change-password'),
        manageAddressBtn : () => cy.get('.block-title > .action > span'),
        billingAddressBtn : () => cy.get('.box-billing-address > .box-actions > .action > span'),
        shippingAddressBtn : () => cy.get('.box-shipping-address > .box-actions > .action > span')
    }

    clickOnEditBtn(){
        this.elements.editBtn().click(),
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/edit/')
    }

    clickOnChangePasswordBtn(){
        this.elements.changePasswordBtn().click(),
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/edit/changepass/1/')
    }
    
    clickOnManageAddressBtn(){
        this.elements.manageAddressBtn().click(),
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/address/new/')
    }

}