import { Selector } from "testcafe";

class CheckoutTwoPage {

    constructor() {
        this.finishPurchaseButton = Selector("#finish");
    }
}

export default new CheckoutTwoPage;