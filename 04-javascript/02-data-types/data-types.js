// integer, double, float

const a = 1.0;
const b = 2.0;
const c = a+b;
console.log(c);

// big int
angka = 100000000000000000000000000000000n;
console.log(angka);

// string
let string = 'string';

// boolean
let bool = true;

// null
let nul = null;

// undefined
let und = undefined;
let und2

// object
let obj = {
    nama: 'budi',
    umur: 20,
    sebutNama: () => { 
        console.log("nama budi");
    }
}

console.log(obj.nama)
obj.sebutNama()

// array
let arr = [[1, 2, 3], 2, "Fizz", 4, "Buzz", 6, 7, {obj: "namaku"}];
console.log(arr[2])

// symbol
let sym = Symbol('a')
