// 1. VAR
// nulis variabel camel case
// var bisa redeclare dan reasign
var myString = "Hello, world!";

// var bisa di hoisting
a = 5;
var a;
console.log(a); // hasilnya 5

// var bisa diambil walaupun di luar fungsi, sehingga bisa terjadi error seperti ini
var nomor = 7;
function myfunction(){
    var nomor = 20;
    console.log(nomor); // hasilnya 20
    return nomor;
}

console.log(myfunction()); // hasilnya 20

myfunction();
console.log(nomor); // hasilnya 7, karena var nomor di dalam fungsi hanya berguna di dalam fungsi

console.log(myString); // Hello world

// ini redeclare
var myString = 'diganti'
console.log(myString); // diganti

// ini reasign
myString = 'baru'
console.log(myString); // baru

// 2. LET
// let tidak bisa diambil jika di luar fungsi
let myNumber = 10;

// nilainya tetap
const myBoolean = true;

console.log(myNumber); // 10
console.log(myBoolean); // true

// let tidak bisa diredeclare
// let myNumber = 7; // ini tidak bisa diredeclare. Inilah yang membuat let lebih preventif untuk error

// let bisa direassign
console.log(myNumber); // 10
myNumber = 12;
console.log(myNumber); // 12

// let gabisa hoisting
// myLet = 10;
// let myLet;
// console.log(myLet); // ini bakal error

// perbedaan function scope dan block scope
// function scope
console.log("function scope");
var f = 2
for (var f = 0; f < 10; f++){
    console.log(f)
}

// block scope
console.log("block scope");
let b = 2
for(let b = 0; b < 10; b++){
    console.log(b);
}

// 3. CONST
const gravitasi = 9.8;

function ubahAngka(){
    const gravitasi = 4;
    console.log(gravitasi); // 4
}

ubahAngka(); // 4

// perbedaan redeclare dan tidak di dalam fungsi
let test = 5;

function testLet(){
    test = 10; // kalo kayak gini, nilai yang console log luar 10
    let test = 5; // kalo kayak gini, nilai yang console log luar 5
}

testLet();
console.log(test); // 10
