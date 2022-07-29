import { Selector } from "testcafe";

class CheckoutCompletePage {

    constructor() {
        this.successOrderLabel = Selector(".complete-header");
    }
}

export default new CheckoutCompletePage;