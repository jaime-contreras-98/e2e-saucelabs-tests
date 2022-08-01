/* eslint-disable no-empty */
/* eslint-disable indent */
import { Selector, t } from "testcafe";

class InventoryPage {

    constructor() {
        this.backPackProductButton = Selector("#add-to-cart-sauce-labs-backpack");
        this.bikeLightProductButton = Selector("#add-to-cart-sauce-labs-bike-light");
        this.boltTShirtProductButton = Selector("#add-to-cart-sauce-labs-bolt-t-shirt");
        this.fleeceJacketProductButton = Selector("#add-to-cart-sauce-labs-fleece-jacket");
        this.onesieProductButton = Selector("#add-to-cart-sauce-labs-onesie");
        this.redTShirtProductButton = Selector("button[id='add-to-cart-test.allthethings()-t-shirt-(red)']");
        this.shoppingCartButton = Selector(".shopping_cart_link");
    }

    async purchaseProducts() {
        await this.randomChooser();
        await t.click(this.shoppingCartButton);
    }

    async randomChooser() {
        var productNo1 = [];

        for (var i = 0; i < 2; i++) {

            var randomNumber = Math.floor(Math.random() * 5); //5

            if (productNo1.includes(randomNumber))
                randomNumber++;

            switch (randomNumber) {
                case 0:
                    await t.click(this.backPackProductButton);
                    break;
                case 1:
                    await t.click(this.bikeLightProductButton);
                    break;
                case 2:
                    await t.click(this.boltTShirtProductButton);
                    break;
                case 3:
                    await t.click(this.fleeceJacketProductButton);
                    break;
                case 4:
                    await t.click(this.onesieProductButton);
                    break;
                case 5:
                    await t.click(this.redTShirtProductButton);
                    break;
                default:
                    console.log("Invalid number!");
                    break;
            }

            if (i === 0) {
                productNo1.push(randomNumber);
                console.log(productNo1);
            } else {
                productNo1.push(randomNumber);
                console.log(productNo1);
            }
        }
    }
}

export default new InventoryPage;