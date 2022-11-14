import { PromiseObservable } from './data/promise-observable'

// kalo sudah pakai package.json yang sudah ada, bisa tinggal npm run watch
// liat list library di package.json
// kalo dependencies tinggal npm install
// tapi kalo mau dev-dependencies (digunakan untuk development aja). Jadi ketika library dipush, dev ini gaakan keikut
// ^7.6.5 berarti ketika ada versi baru (misal 7.7.1) berarti dengan adanya ^ nanti bisa auto update ( jika update, lakukan update, namun hanya update jika MINOR dan PATH berubah)
// kalo tandanya ~ berarti jika ada update, lakukan update, namun hanya update jika PATCH berubah (tapi gaboleh update mayor)

const promiseObservable: PromiseObservable = new PromiseObservable();

promiseObservable.create();
promiseObservable.execute();

// unsubscribe setelah 5 detik
setTimeout(() => {
    promiseObservable.canceled();
}, 5000)