// Observer ada 3
// 1. .next (buat berhasil kayak resolve nya promise)
// 2. .error (buat gagal kayak reject nya promise)
// 3. .complete (buat hasil akhir kayak finally nya resolve)

import { Observable } from "rxjs";

export class PromiseObservable{
    myObservable: any;
    myPromise: any;

    create(){
        this.myPromise = new Promise<string>(resolve => {
            console.log('Promise has created');
            resolve('Promise has emitted');
        });

        this.myObservable = new Observable<string>(observer => {
            console.log('Observable has created');
            observer.next('Observable has emitted');
        })
    }

    execute(){
        this.myPromise.then((data: any) => { // data: any merujuk pada data di create (console.log/resolve/observer.next)
            console.log(data);
        })

        this.myObservable.subscribe((data: any) => {
            console.log(data);
        })
    }

    // bedanya .subscribe sama .then?
    // 1. .then pada promise, .subscribe pada observable
    // 2. .then, itu kalo digambarin aliran datanya udah terbuka, beda sama .subscribe, kalo belum .subscribe aliran datanya masih tertutup
}