// 3 kondisi utama dalam promise
// fulfilled
// rejected
// pending => bisa jadi fulfilled/rejected

// promise adalah object
// cara membuat promise

const username = 'admin'
const password = '12345'

const janji = new Promise((resolve, reject) => {
    let id = '1234'
    setTimeout(() => {

        // jika benar, dikasih id
        if(username === 'admin' && password === '12345'){
            resolve(id) // parameter yang digunakan untuk mengirimkan data ketika promise terpenuhi (pending => fulfilled)
        }

        // jika salah dikasih pesan error
        else{
            reject('Username atau password salah') // parameter ketika promise tidak terpenuhi lalu memberikan reason (pending => rejected)
        }
    }, 3000)
})

// fungsi ketika berhasil
function onfulfilled(resolveValue){
    console.log(resolveValue)
}

// fungsi ketika gagal
function onrejected(rejectValue){
    console.log(rejectValue)
}

// cara panggil promise ada 3 cara
// 1. kalo default
// janji.then(onfulfilled, onrejected) // .then() higher order function, kayak fungsi setelah menjalankan promise lakukan apa?

// 2. dipisah
// janji
    // .then(onfulfilled)
//     .then(null, onrejected)

// 3. then-catch-finally
// cara ini lebih enak dan rapih dibanding pakai callback
janji
    .then(onfulfilled)
    .catch(onrejected)
    .finally(() => {
        console.log('selesai')
    })