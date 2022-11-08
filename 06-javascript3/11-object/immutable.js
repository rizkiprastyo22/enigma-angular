// mutable vs immutable object
// 1. Mutable
// secara default, object itu mutable
const car = {
    name: 'Toyota'
}

car.color = 'Red'
car.dimension = {
    height: 100,
    width: 200
}
console.log(car)

car.name = 'Honda'
const car2 = car // kalau pakai cara seperti ini, value dari car juga berubah
console.log(car2)
console.log(car) // car juga name nya Honda

// makanya harus pakai ini
car3 = Object.assign({}, car);
car3.name = 'Mitsubishi'
console.log(car3)

// cara di atas adalah cara jadul, jadi harus pakai begini
const car4 = {...car}
car4.name = 'Suzuki'

console.log(car4)

// 4. spread operator
const car5 = {...car, dimension: {...car.dimension}}
car5.dimension.width = 300
car5.name = 'Wuling'
console.log(car5)

// DESTRUCTING OBJECT

// variabel sudah independen, karena passing by value
// const {name, color, dimension} = car
// console.log(name) // name jadi variabel independen
// console.log(dimension.width)

// cara lain destructing
// const {name, color, dimension, dimension:{height, width} } = car
// console.log(name) // name jadi variabel independen
// console.log(width)

// cara lain lagi
// const {name, color, ...rest} = car // rest untuk mengambil sisanya yang belum diassign ke variabel baru
// console.log('rest', rest)
// console.log(rest.dimension.height)

// jika ingin ganti nama variabel
let {name: nama, color: warna, ...sisa} = car5
console.log(nama)

// immutable array
const arr = [-1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr2 = arr

// arr[0] = 10

// dua duanya berubah karena pass by reference
// console.log(arr)
// console.log(arr2)

// nah gimana biar pass by value
// 1. cara pertama
const arr3 = Array.from(arr)
// arr[0] = 2

// console.log(arr)
// console.log(arr2)
// console.log(arr3) // ini udah beda sendiri

// 2. cara lainnya bisa pakai spread operator
const arr4 = [...arr]

// console.log(arr)
// console.log(arr2)

// ini udah beda sendiri
// console.log(arr3)
// console.log(arr4)

// built in function

// 3. pakai for each
newArr = []
arr.forEach((element) => {
    newArr.push(element)
})

console.log('ini yang forEach', newArr)

// 4. pakai map
let map = arr.map((element) =>{
    return element
})

console.log('ini yang map', map)

// 5. filter
let filter = arr.filter((element) =>{
    return element > 2 // filter yang dirun hanya 3 ke atas
})

console.log('ini yang filter', filter)

// 6. find
let find = arr.find((element) =>{
    return element > 2 // hanya mencari satu nilai yang memenuhi saja cukup
})

console.log('ini yang find', find)

// find index
let findIndex = arr.findIndex((element) =>{
    return element > -3 // hanya ngeprint nilai indexnya (maksud kode: cari index paling awal suatu elemen yang nilainya lebih besar dari -3)
})

console.log('ini yang findIndex', findIndex)

// pake ini juga bisa
const [a, b, c, ...d] = arr
console.log(a)

const kendaraan = ['mobil', 'motor', 'bis', 'pesawat', 'kereta']

// function tampilin(){
//     for (let i = 0; i < kendaraan.length; i++) {
//         console.log(kendaraan[i])
//     }
// }

// tampilin()

// pake cara destructing
let [ satu, dua, tiga, empat, lima ] = kendaraan

function tampilin(){
    console.log(satu)
    console.log(dua)
    console.log(tiga)
    console.log(empat)
    console.log(lima)
}
tampilin()