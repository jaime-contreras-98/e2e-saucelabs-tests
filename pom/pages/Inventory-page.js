import { Selector, t } from "testcafe";

class InventoryPage {

    constructor() {
        this.backPackProductButton = Selector("#add-to-cart-sauce-labs-backpack");
        this.boltTShirtProductButton = Selector("#add-to-cart-sauce-labs-bolt-t-shirt");
        this.shoppingCartButton = Selector(".shopping_cart_link");
    }

    async purchaseProducts() {
        await t
            .click(this.backPackProductButton)
            .click(this.boltTShirtProductButton)
            .click(this.shoppingCartButton);
    }
}

export default new InventoryPage;