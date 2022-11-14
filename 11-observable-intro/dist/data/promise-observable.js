"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseObservable = void 0;
const rxjs_1 = require("rxjs");
class PromiseObservable {
    create() {
        this.myPromise = new Promise(resolve => {
            console.log('Promise has created');
            resolve('Promise has emitted');
        });
        this.myObservable = new rxjs_1.Observable(observer => {
            console.log('Observable has created');
            observer.next('Observable has emitted');
        });
    }
    execute() {
        this.myPromise.then((data) => {
            console.log(data);
        });
        this.myObservable.subscribe((data) => {
            console.log(data);
        });
    }
}
exports.PromiseObservable = PromiseObservable;
