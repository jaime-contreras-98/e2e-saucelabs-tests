import { t } from "testcafe";
import LoginPage from "../pages/Login-page.js";
import InventoryPage from "../pages/Inventory-page.js";
import CartPage from "../pages/Cart-page.js";
import CheckoutOnePage from "../pages/Checkout-one-page.js";
import CheckoutTwoPage from "../pages/Checkout-two-page";

class PurchaseClass {

    async PurchaseProducts() {
        await LoginPage.loginForm("standard_user", "secret_sauce");
        await InventoryPage.purchaseProducts();
        await t.click(CartPage.checkoutButton);
        await CheckoutOnePage.checkoutForm("Jaime", "Contreras", "85000");
        await t.click(CheckoutTwoPage.finishPurchaseButton);
        await t.scroll(500, 0);
    }

}

export default new PurchaseClass;