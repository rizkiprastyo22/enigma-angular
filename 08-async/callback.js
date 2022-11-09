const sayHelloAsync = (callback) => {
    // console.log('Log untuk sayHelloAsync')
    // let name = null
    setTimeout(() => {
        name = 'Moty' // variabel name adalah variabel bawaan js yang kosong dan bisa diisi apa saja
        // callback(`Hi, my name is ${name}`)
        console.log(callback(`Hi, my name is ${name}`)) // yang bawah harus return (jelasin argumen untuk fungsi callback di sini)
    }, 1000)
}

const finish = (callback) =>{
    // console.log('Time to act')
    setTimeout(() => {
        // callback('finish...')
        console.log(callback('finish...')) // yang bawah harus return (jelasin argumen untuk fungsi callback di sini)
    }, 2000)
}

// callback digunakan agar urutan prosesnya dilakukan secara berurutan
function sayHelloCallback(name) {
    // console.log(name) // yang atas JANGAN console.log()
    return name // di atas HARUS console.log()
}

console.log('start..')
sayHelloAsync(sayHelloCallback) // kenapa callback ga ngasih argumen? karena argumen dijelasin di dalam fungsi sayHelloAsync
finish(sayHelloCallback)