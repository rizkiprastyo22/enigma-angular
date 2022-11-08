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

