import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import ProductListPage from '../../pages/productListPage';

const productListPage = new ProductListPage();

Then('I should see the logout link in the product list page menu', () => {
    productListPage.clickMenuButton();
    productListPage.verifyLogoutLink();
});

Then('I should able to logout successfully', () => {
    productListPage.clickLogoutLink();
})