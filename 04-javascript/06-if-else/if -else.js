let penentu = 2;

// menampilkan jika sesuai kondisi
if(penentu === 1){
    console.log('satu');
}

else if(penentu === 2){
    console.log('dua')
}

// menampilkan jika tidak ada kondisi yang benar
else{
    console.log('bukan satu')
}

let nilai = 70;
if(nilai < 70){
    console.log('Tidak lulus');
}
else{
    console.log('Lulus')
}

// tipe data yang bersifat falsy
// undefined
// null
// NaN
// 0
// ""
// false

const falsy = '';
const truthy = 'hello';

// if (truthy){
//     console.log('truthy'); // print truthy
// }

if(falsy){
    console.log('truthy'); // tidak diprint apa apa
}

let nilaiPraktikum = 70;
let nilaiUjian = 80;

if(nilaiPraktikum >= 80){
    console.log('Anda Lulus'); // tidak diprint
    if(nilaiUjian >= 80){
        console.log('Nilai A'); // ini gaakan dijalankan gara gara condition yang pertama aja udah salah
    }
}

// nilai di dalam if selalu true kalo tidak ada condition yang ditulis
if(true){
    console.log('hasilnya true'); // tidak diprint
}

// kalo bikin program menentukan suatu bilangan punya pembagi 3, 4 dan tidak
// function MenentukanKelipatan(num){
//     if (num%3===0){
//         console.log('Angka merupakan kelipatan 3');
//     }
//     else if (num%4===0){
//         console.log('Angka merupakan kelipatan 4');
//     }
//     else{
//         console.log('Angka bukan kelipatan 3/4');
//     }
// }

// MenentukanKelipatan(3);
// MenentukanKelipatan(5);

let nomorKelipatan = 12
if(nomorKelipatan%3===0){
    console.log('Angka merupakan kelipatan 3');
}
else{
    console.log('Angka bukan kelipatan 3');
}

if(nomorKelipatan%4===0){
    console.log('Angka merupakan kelipatan 4');
}
else{
    console.log('Angka bukan kelipatan 4');
}

// cuman untuk 2 kondisi, true or false (tenering)
(nomorKelipatan % 3 === 0) ? console.log('kelipatan 3') : console.log('bukan kelipatan 3');