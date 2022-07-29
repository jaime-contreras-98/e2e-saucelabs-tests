import { Selector, t } from "testcafe";

class CheckoutOnePage {

    constructor() {
        this.firstNameInput = Selector("#first-name");
        this.lastNameInput = Selector("#last-name");
        this.zipCodeInput = Selector("#postal-code");
        this.continueButton = Selector("#continue");
    }

    async checkoutForm(firstName, lastName, zipCode) {
        await t
            .typeText(this.firstNameInput, firstName)
            .typeText(this.lastNameInput, lastName)
            .typeText(this.zipCodeInput, zipCode)
            .click(this.continueButton);
    };

}

export default new CheckoutOnePage;