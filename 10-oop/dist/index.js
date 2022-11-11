"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_coffee_1 = require("./03-async/order-coffee");
const cafe = new order_coffee_1.default();
const orders = [
    'cafe latte',
    'cappuccino',
    'kopi susu keluarga',
    'black tea',
    'hazelnut',
    'ice cream',
    'teh',
];
async function orderProcess() {
    const result = [];
    for (const order of orders) {
        try {
            const takeOrder = await cafe.orderCoffeeWithAsync(order);
            result.push(takeOrder);
        }
        catch (error) {
            console.log(`Pesanan ${order} tidak berhasil, karena ${error}`);
        }
    }
    return result;
}
orderProcess()
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.error(error);
});
