// array, datanya mutable (datanya bisa berubah)
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stringArray = ['a', 'b', 'c', 'd', 'e', 'f'];
const objArr = [
    {
        a: 1,
        b: 2,
        c: 3
    }
]

// hapus data terakhir
delete stringArray[stringArray.length - 1]; // kalo ini data terakhir jadi null
stringArray.pop(); // kalo ini data terakhir hilang

// hapus data pertama
stringArray.shift();

// tambah data terakhir
stringArray[stringArray.length] = "g";
stringArray.pop("g");
stringArray.unshift("g");

// mengambil data
stringArray.slice(2, 5); // ambil data index 2 sampe 4

// mengganti data array
stringArray.splice(2, 5, "x", "y", "z"); // mengganti data index 2 sampe 4 dengan xyz

// nampilin data tiap elemen
for (let i=0; i < stringArray.length; i++){
    console.log(stringArray[i]);
}
