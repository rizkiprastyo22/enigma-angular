"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseObservable = void 0;
const rxjs_1 = require("rxjs");
class PromiseObservable {
    create() {
        this.myPromise = new Promise((resolve, reject) => {
            console.log('Promise has created');
            resolve('Promise has emitted 1');
            resolve('Promise has emitted 2');
            reject('Error detected');
            resolve('Promise has emitted 3');
        });
        this.myObservable = new rxjs_1.Observable(observer => {
            console.log('Observable has created');
            observer.next('Observable has emitted 1');
            observer.next('Observable has emitted 2');
            observer.next('Observable has emitted 3');
            observer.complete();
        });
    }
    execute() {
        this.myPromise.then((data) => {
            console.log(data);
        });
        this.myObservable.subscribe((data) => {
            console.log(data);
        }, (error) => {
            console.log(error.message);
        }, () => console.log('Observable complete'));
    }
}
exports.PromiseObservable = PromiseObservable;
