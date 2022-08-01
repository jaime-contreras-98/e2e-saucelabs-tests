import { t } from "testcafe";
import { CREDENTIALS, STRINGS } from "../data/constants.js";
import { v4 as uuidv4 } from "uuid";
import LoginPage from "../pages/Login-page.js";
import InventoryPage from "../pages/Inventory-page.js";
import CartPage from "../pages/Cart-page.js";
import CheckoutOnePage from "../pages/Checkout-one-page.js";
import CheckoutTwoPage from "../pages/Checkout-two-page";

class PurchaseClass {

    async PurchaseProducts() {
        const firstName = STRINGS.F_NAME + uuidv4();
        const lastName = STRINGS.L_NAME + uuidv4();
        const zipCode = Math.floor(Math.random() * 25000).toString();

        await LoginPage.loginForm(CREDENTIALS.STD_USER.USERNAME, CREDENTIALS.STD_USER.PASSWORD);
        await InventoryPage.purchaseProducts();
        await t.click(CartPage.checkoutButton);
        await CheckoutOnePage.checkoutForm(firstName, lastName, zipCode);
        await t
            .click(CheckoutTwoPage.finishPurchaseButton)
            .scroll(500, 0);
    }
}

export default new PurchaseClass;