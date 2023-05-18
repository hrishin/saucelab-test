class ProductListPage {

    btnMenu = `.bm-burger-button`;
    logoutLink = `#logout_sidebar_link`;
  

    clickMenuButton() {
        cy.log('clickMenuButton');
        cy.get(this.btnMenu).click();
    }

    verifyLogoutLink() {
        cy.log('verifyLogoutLink');
        cy.get(this.logoutLink).should('exist');
    }

    clickLogoutLink() {
        cy.log('clickLogoutLink');
        cy.get(this.logoutLink).contains('Logout').click();
    }


}
export default ProductListPage