// onject
// object juga bisa memiliki banyak properties dan method
// object bersifat mutable
const obj = {

    // properties
    name: 'Dimas',
    umur: 20,

    // method
    tampilNama: function(){
        console.log(this.name);
    },
    tampilUmur: function(){
        console.log(this.umur);
    }

}

// kita bisa menambahkan properti di luar
obj.hobi = 'makan';

// kita juga bisa mengganti isi properties (reassign properties)
obj.name = 'Feri'

console.log(obj);

// kenapa obj, array itu mutable?
// karena selain mereka non-primitive, mereka juga 'passing by reference' (masih menggunakan variabel yang sama/ memori yang sama)
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
let arr2 = arr;

console.log(arr); // sama kayak arr
console.log(arr2); // sama kayak arr

arr[0] = 10;

console.log(arr); // arr[0] jadi 10
console.log(arr2); // arr[0] jadi 10

// sedangkan string, number, dll yang primitive itu immutable 'passsing by value' (variabel yang digunakan menggunakan memori yang baru/tidak sama dengan yang telah diassign sebelumnya)
// contoh passing by value:
let name = 'Dimas';
let name2 = name;

console.log(name); // Dimas
console.log(name2); // Dimas

name = 'Rini';

console.log(name); // Rini
console.log(name2); // Dimas

// cara biasa membuat object
// student = {
//     id: 1,
//     nama: 'Dimas',
//     usia: 16,

// property juga bisa berupa object
//     alamat: {
//         kota: 'Jakarta',
//         distrik: 'Pasar Minggu',
//         jalan: 'Jl. Raya Pasar Minggu'
//     },

// bisa memiliki method tanpa perlu mengetik function
//     getInfo(){
//         console.log(`namaku ${this.nama}, umurku ${this.usia} tahun, alamat saya di ${this.alamat.jalan}`)
//     }
// }

student = {
    id: 1,
    nama: 'Dimas',
    usia: 16,

    // property juga bisa berupa object
    alamat: {
        kota: 'Jakarta',
        distrik: 'Pasar Minggu',
        jalan: 'Jl. Raya Pasar Minggu'
    }
}  

// pengen nyetak object student
function getInfo(){
    console.log(`namaku ${this.nama}, umurku ${this.usia} tahun`)
}

getInfo.apply(student) // hanya bisa menerima dalam bentuk array
getInfo.call(student) // menerimanya dalam bentuk variadik

// akan tetapi, cara di atas gabisa object di dalam object. Bisanya begini:
function getInfo2(){
    console.log(`namaku ${this.nama}, tinggalku di ${this.alamat.jalan}`)
}

getInfo2.apply(student, [student.alamat]) // atau
getInfo2.call(student, student.alamat)

// cara lain lagi adalah menggunakan bind
const info = getInfo2.bind(student) // harus diassign ke sebuah fungsi yang baru
info()

// cara lain menggunakan bind
getInfo2.bind(student)(student.address) // menggunakan instant function
// bisa juga menerima dalam bentuk array
getInfo2.bind(student)([student.address])

// melihat list keys pada student
// console.log(Object.keys(student));

// melihat list value pada student
// console.log(Object.values(student));

// 1. cara membuat object baru dengan referensi object yang sudah ada dengan cara lama
// kloning dulu objectnya, lalu ganti propertinya
// const student2 = Object.create(student);
// student2.nama = 'Bulan';
// student2.id = 2;

// cek menggunakan method object
// student.getInfo();
// student2.getInfo();

// 2. cara membuat object baru dengan referensi object yang sudah ada dengan cara baru
// const student3 = {}
// student3.__proto__ = student;
// student3.nama = 'Rini';
// student3.getInfo();

// const objectBatu = {}
// objectBatu.__proto__ = { object: 'Batu' }
// console.log(objectBatu.object)