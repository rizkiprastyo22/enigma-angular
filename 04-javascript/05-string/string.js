// string sifatnya immutable, datanya tidak bisa diubah
// const string = 'Hello World';
// const nama = 'Rizki!'
let string = 'Hello world';
let nama = 'Rizki!';

// gedein semua string
console.log(string.toUpperCase());

// kecilin semua string
console.log(string.toLowerCase());

// kapital
console.log(string.split(' ')); // ['Hello', 'World']

// substring
console.log(string.substring(6, 10)); // worl

// concat
const strConcat = string.concat(', ', nama);
console.log(strConcat); // Hello World, Rizki!

strGab = string + ', ' + nama;
strGab2 = '${string} ${nama}';

string[4] = 'a' // tidak mengubah elemen ke-5

console.log(strGab); // Hello World, Rizki!
