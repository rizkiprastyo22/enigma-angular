"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cafe {
    orderCoffee(order, callback) {
        console.log(`mohon menunggu, pesanan ${order} sedang diproses`);
        setTimeout(() => {
            if (order === 'teh') {
                callback(`maaf, kami tidak melayani pesanan ${order}`);
            }
            else {
                callback(null, `pesanan ${order} sudah siap`);
            }
        }, 3000);
    }
    callbackPromise(order, resolve, reject) {
        this.orderCoffee(order, (error, result) => {
            if (error) {
                reject(new Error);
            }
            else {
                resolve(result);
            }
        });
    }
    orderCoffeeWithAsync(order) {
        return new Promise((resolve, reject) => {
            this.callbackPromise(order, resolve, reject);
        });
    }
}
exports.default = Cafe;
