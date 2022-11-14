# JS hanya menyediakan promise
1. JS hanya menyediakan Promise. Ketika kita ngirim data, promise langsung menerima dengan kata kunci then
2. Promise hanya bisa menerima data satu kali
3. Hal ini tidak masalah, karena masih bisa dipake
4. Sebenernya paradigma imperative dan deklaratif sama aja, terserah gimana menuangkan code ke paradigma

# typescript masuk ke paradigma deklaratif (karena OOP)
1. observable muncul karena paradigma reactive

# data string adalah aliran data
1. dimana setiap data yang dikirim itu seperti antrian
2. setiap data yang mengantri tidak saling dulu duluan
3. maka harirlah paradigma reactive programming
4. karena JS gapunya bawaan paradigma ini, dibutuhkan library RxJS

# RxJS
1. observable
2. observer
3. scheduler

# kegunaan npm
1. test
2. watch
3. start (menjalankan program utama)

# Observer ada 3
1. .next (buat berhasil kayak resolve nya promise)
2. .error (buat gagal kayak reject nya promise)
3. .complete (buat hasil akhir kayak finally nya resolve)

# bedanya .subscribe sama .then?
1. .then pada promise, .subscribe pada observable
2. .then, itu kalo digambarin aliran datanya udah terbuka, beda sama .subscribe, kalo belum .subscribe aliran datanya masih tertutup