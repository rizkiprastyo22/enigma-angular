// Observer ada 3
// 1. .next (buat berhasil kayak resolve nya promise)
// 2. .error (buat gagal kayak reject nya promise)
// 3. .complete (buat hasil akhir kayak finally nya resolve)

import { Observable, ReplaySubject } from "rxjs";

export class PromiseObservable{
    myObservable: any;
    myPromise: any;

    create(){
        this.myPromise = new Promise<string>((resolve, reject) => {
            console.log('Promise has created');

            // sebanyak apapun data yang dikirim, yang pertama aja yang diterima
            // kalo mau semua data dikerjakan, method harus dilakukan berulang
            resolve('Promise has emitted 1');
            resolve('Promise has emitted 2');
            reject('Error detected'); // error ga ngaruh sama sekali
            resolve('Promise has emitted 3');
        });

        this.myObservable = new Observable<string>(observer => {
            console.log('Observable has created');

            // ini semua disampaikan karena observable dia menerima stream data
            // pengiriman datanya berurutan
            observer.next('Observable has emitted 1');
            observer.next('Observable has emitted 2');
            // observer.error(new Error('Error detected from observable')); // error membuat .next selanjutnya gaakan dijalankan
            observer.next('Observable has emitted 3');
            observer.complete(); // complete wajib disimpan di akhir, karena sebagai penanda data terakhir yang diterima

        })
    }

    execute(){
        this.myPromise.then((data: any) => { // data: any merujuk pada data di create (console.log/resolve/observer.next)
            console.log(data);
        })

        this.myObservable.subscribe((data: any) => {
            console.log(data);
        }, 

        // nah pembuatan error seperti ini membuat error lebih enak dibaca
        (error) => {
            console.log(error.message);
        }, 

        // complete tidak menerima inputan apapun, jadi kita bisa menulisnya dengan parameter kosong
        () => console.log('Observable complete'));
    }

    // bedanya .subscribe sama .then?
    // 1. .then pada promise, .subscribe pada observable
    // 2. .then, itu kalo digambarin aliran datanya udah terbuka, beda sama .subscribe, kalo belum .subscribe aliran datanya masih tertutup
}