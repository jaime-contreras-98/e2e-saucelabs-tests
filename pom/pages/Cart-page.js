import { Selector } from "testcafe";

class CartPage {

    constructor() {
        this.checkoutButton = Selector("#checkout");
    }
}

export default new CartPage;