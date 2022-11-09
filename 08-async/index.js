// proses synchronus berarti tiap task harus dikerjakan secara sert berururtan, dan jika terjadi kegagalan pada proses
// sebelumnya, proses setelahnya tidak akan dikerjakan

// sedangkan asynchronus, tiap task bisa dikerjakan secara paralel, sehingga bisa lebih menghemat waktu

// menggunakan set Timeout
// console.log("start...")
// setTimeout(() => {
//     console.log("processing...")
// }, 1000) // timeout 1 sekon
// console.log("finish....")

// const sayHello = () => {
//     console.log('log from sayHello')
//     setTimeout(() => {
//        console.log('hello Async')
//     }, 1000) // timeout 1 sekon
// }

// const finish = () => {
//     console.log('time to finish')
//     setTimeout(() => {
//         console.log('finish...')
//     }, 2000)
// }

// console.log('start..')
// console.log(sayHello())
// console.log('finish...')
// setTimeout(() => {
//     console.log('finish...')
// }, 2000)
// console.log(finish())

// const sayHelloAsync = () => {
//     console.log('Log untuk sayHelloAsync')
//     setTimeout(() => {
//         name = 'Moty'
//         greet = `Hi, my name is ${name}`
//         console.log(greet)
//     }, 1000)
// }

// const sayHelloAsync = () => {
//     console.log('Log untuk sayHelloAsync')
//     name = null
//     setTimeout(() => {
//         name = 'Moty'
//         greet = `Hi, my name is ${name}`
//     }, 1)
//     setTimeout(() => {
//         console.log(greet) // fungsi bernilai null karena program dijalankan synchronus
//     }, 1000)
// }

// return nya masih null
// const sayHelloAsync = () => {
//     console.log('Log untuk sayHelloAsync')
//     name = null
//     setTimeout(() => {
//         name = 'Moty'
//         name = `Hi, my name is ${name}`
//     }, 1000)
//     return name // fungsi bernilai null karena program dijalankan synchronus
// }

console.log('start..')
console.log(sayHelloAsync())
console.log('finish...')