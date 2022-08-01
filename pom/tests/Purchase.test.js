/* eslint-disable no-undef */
import PurchasePage from "../workflows/Purchase.js";
import CheckoutCompletePage from "../pages/Checkout-complete-page";
import { MESSAGES, URL } from "../data/constants.js";

fixture("Purchase process with TestCafe on saucedemo.com")
    .page(URL.PROD_URL)

    .beforeEach(async t => {
        await t.maximizeWindow();
    })

    .afterEach(async t => {
        await t.wait(1500);
    });

test("As a user I want to login using my credentials, add 2 products, visualize my products and purchase them.", async t => {
    await PurchasePage.PurchaseProducts();

    await t.expect(CheckoutCompletePage.successOrderLabel.innerText).eql(MESSAGES.ORDER_COMPLETED);
});