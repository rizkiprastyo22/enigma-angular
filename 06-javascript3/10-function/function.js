// function adalah satu blok kode yang kita beri nama

// declare function
function sayHello(){
    return 'Hello World'; // return berfungsi untuk mengembalikan nilai dan menghentikan function
    console.log('ini tidak dijalankan'); // ini tidak dijalankan
}

// console.log(sayHello());

// parameter function
function sayHello2(nama){
    return `Hello my name is ${nama}`;
}

// console.log(sayHello2('Rizki'));
// console.log(sayHello2()); // parameter tidak diisi jadi undefined

function sumNum(num1, num2){
    return num1 + num2;
}

// console.log(sumNum(1, 2));
// console.log(sumNum(1)); // hasilnya NaN, karena 1 + undefined tidak bisa dijumlahkan

// hasil dari function bisa disimpan di dalam variabel
let jumlahAngka = sumNum(1, 2);
console.log(jumlahAngka);

// bisa buat variabel yang di dalamnya function (function as expresion)
// const variabelHello = function(nama){
//     console.log(`nama saya ${nama}`)
// }

// variabelHello('Rizki');

// bikin variabel function yang bisa langsung dipanggil tanpa memasukkan parameter (instant info function)
const variabelHello = function(nama){
    return `nama saya ${nama}`;
}('Dimas tanpa h');

// cara lain
(function luasPersegi(p, l){
    console.log(p * l)
})(10, 9)

console.log(variabelHello);

// function juga memiliki sifat hoisting (bisa dipanggil sebelum kode fungsinya)
// katakanHalo()

// function katakanHalo(){
//     console.log('Halo')
// }

// jika ingin menghindari sifat hoisting dari fungsi, assign fungsi ke dalam variabel
// fungsi TIDAK BISA DIHOISTING jika sudah di assign ke dalam variabel

// console.log(halo); // ini error

const halo = function (){
    console.log('Halo')
}

console.log(halo); // ini benar

// dalam conditional function, tidak perlu memasukkan else

// jika function yang memiliki parameter dipanggil tanpa memberikan argumen, nilai parameter akan undefined
// gunakan default value
function namaku(nama = 'Rizki'){
    return `namaku ${nama}`;
}

console.log(namaku());

// optional argument
function sayMyName2(name, age){
    name = name || 'Ginanjar';
    age = age || 55;
    return `Youre ${name}, ${age} years old`;
}

console.log(sayMyName2());


// function as parameter/nested function/ fungsi bisa dilempar sebagai argumen (callback function)
function reffSing(){
    console.log('uuuuu');
}

function sing(add){
    console.log('aaaaaa');
    console.log('iiiiii');
    add() // memanggil function
    console.log('eeeeee');
    console.log('oooooo');
}

// sing(reffSing) // mengassign function
sing(() => console.log('dumdes')); // cara lain

// arrow function (membuat penulisan menjadi lebih singkat)
const printName = (name) => {
    console.log(`print name: ${name}`);
}

printName('Rizki');

// cara lain
const printName2 = (name) => `print name: ${name}`;

console.log(printName2('Rizki2'));

// variabel yang dideklarasikan di dalam function, hanya berlaku di dalam function itu saja

// variabel this merujuk pada suatu object
function printNameThis(name, func){
    if ( typeof func === 'function'){
        name = func.call(this, name) // this sebagai argumen untuk method call
    }
    return name;
}

console.log(printNameThis('Rizki', function(name){
    return `Hello ${name}`
}))

// contoh lain
let name = 'Dimas'; // ini tidak akan dipanggil oleh fungsi dalam obj di bawah
const obj = {
    name: 'Rizki',
    func: function(){
        console.log(this.name); // referensi this.name adalah name yang ada di dalam obj
    }
}

obj.func()

// jadi this digunakan untuk menekankan kalo object yang dimau adalah yang ada di dalam blok