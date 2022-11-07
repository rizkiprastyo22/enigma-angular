// counted loop
// bagian counted loop: for loop, foreach, repeat
// jumlah loop nya pasti

// 1. for loop
// for (let i=0; i < 100; i += 1){ // penjelasan i++
//     console.log('Saya berjanji tidak akan bolos sekolah lagi');
// }

// let count = 20;
// for (let i=0; i < count; i++){
//     console.log(`${i+1}. Saya berjanji tidak akan bolos sekolah lagi`);
// }

// for (let i = 0; i < count; i++){
//     if (i % 2 == 0) {
//         continue; //ini skip untuk i yang bisa dibagi 2
//     }

//     // keluar loop kalo i > 10
//     if(i > 10){
//         break;
//     }

//     console.log(i);
// }

// const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
// let newArray = [];

// for (let i = 0; i < arr.length; i += 2) {
//     newArray.push(arr[i]);
//     // console.log(newArray[i]);
// }

// ubah data string
// let str = 'ayam';
// let temp = [];

// for (let i = 0; i < str.length; i++) {
//     temp.push(str[i])
// }

// temp[1] = 'b';

// let result = ''
// for(let i = 0; i < temp.length; i++) {
//     result += temp[i];
// }

// console.log(result); // abam


// breakdown loop
// let i = 0;
// for (; i < arr.length;){
//     newArray.push(arr[i]);
//     i++;
// }

// console.log(newArray);

// nested loop
// let temp = '';
// for(let i = 1; i < 10; i++){
//     for(j = 1; j < i; j++){
//         temp += j + ' ';
//     }
//     temp += '\n';
// }

// for(let i = 1; i < 10; i++){
//     for(j = 1; j < i; j++){
//         temp += '*' + ' ';
//     }
//     temp += '\n';
// }

// for(let i = 1; i < 10; i++){
//     for(j = i; j < 10; j++){
//         temp += j + ' ';
//     }
//     temp += '\n';
// }

// console.log(temp);

// let angka1 = 2;
// let angka2 = 3;
// let angka3 = 0;
// let result = [];

// for (let i = 0; i < 10; i++) {
//     if (angka1 == i){
//         result.push(angka1);
//     }
//     for (let j = 0; j < 10; j++) {
//         if (angka2 == j){
//             result.push(angka2);
//         }
//         for (let k = 0; k < 10; k++) {
//             if (angka3 == k){
//                 result.push(angka3);
//             }
//         }
//     }
// }

// console.log(result);



// uncounted loop
// contoh uncounted loop: while, do-while
// jumlah loop nya tidak pasti (degnan cara lihat kondisi)

// 1. While loop
// melakukan pengecekan kondisi dulu, baru lakukan looping

// let counter = 0;

// while (counter < 10) {
//     console.log(counter);
//     counter++; // untuk menjaga agar tidak infinite loop
// }

// whileArray = ['a', 'b', 'c', 'd', 'e', 'f'];

// let i = 0;
// let results = '';

// while (whileArray[i]){ // selama masih ada isinya (terpenuhi kondisinya), looping terus dijalankan
//     results += whileArray[i] + '\n';
//     i++; // untuk menjaga agar tidak infinite loop
// }

// while (whileArray[i]){ // selama masih ada isinya (terpenuhi kondisinya), looping terus dijalankan
//     i++; // mulainya dari index ke 1
//     results += whileArray[i] + '\n'; // di ending ada undefined, karena kondisi masih memenuhi tapi indexnya ditambah 1 yang isinya undefined
// }

// console.log(results);

// 2. do-while
// melakukan loop sekali dulu (do), baru cek kondisi untuk loop selanjutnya
// do-while akan menjalankan loop minimal sekali walaupun kondisi salah

// let counter = 0;
// do{
//     console.log(counter);
//     counter++;
// } while(counter < 5);

// perbandingan while dan do-while
// let counter = 0;
// do{
//     console.log(counter);
//     counter++;
// } while(counter < 0);

// hasilnya ada 0

// while(counter < 0){
//     console.log(counter);
//     counter++;
// }

// ga memberi hasil