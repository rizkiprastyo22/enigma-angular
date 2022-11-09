// 4. callback bekerja tergantung fungsi pesanKopi
// jika callback dipanggil callback(isi) berarti callback menjalankan if
// jika callback dipanggil callback(null, isi) berarti callback menjalankan else
function minumKopi(error, output){
    if(error){
        console.log(`Kecewa, ${error}`)
    }

    else{
        console.log(`Terima kasih, ${output} rasanya enak`)
    }
}

function pesanKopi(pesanan, kirimPesan){

    // 1. setiap kali ada pesanan baru, akan dimulai di sini
    console.log(`Pesanan saya adalah ${pesanan}`)

    // 2. proses ini dijeda 1 sekon lalu mengecek apakah pesenan teh atau bukan
    setTimeout(() => {
        if(pesanan === 'teh'){
            kirimPesan(`Pesanan ${pesanan} tidak tersedia`, null) // 3. panggil fungsi callback minumKopi
        }
    
        else{
            const hasil = `Kopi ${pesanan}`
            kirimPesan(null, hasil)
        }
    }, 1000)
}

// kalo mau multiple
// function pesanKopi(pesanan, kirimPesan){

    // 1. setiap kali ada pesanan baru, akan dimulai di sini
//     console.log(`Pesanan saya adalah ${pesanan}`)

    // 2. proses ini dijeda 1 sekon lalu mengecek apakah pesenan teh atau bukan
//     setTimeout(() => {
//         for (let i=0; i<pesanan.length; i++){
//             if(pesanan[i] === 'teh'){
//                 kirimPesan(`Pesanan ${pesanan[i]} tidak tersedia`) // 3. panggil fungsi callback minumKopi
//             }
    
//             else{
//                 const hasil = `Kopi ${pesanan[i]}`
//                 kirimPesan(null, hasil)
//             }
//         }
//     }, 1000)
// }

// cara anak TK
let pesan = ['teh', 'arabica', 'luwak', 'kopsu']
// let timeout = 0
// for (let i = 0; i < pesan.length; i++){
//     setTimeout(() => {
//         pesanKopi(pesan[i], minumKopi)
//     }, timeout);
//     timeout += 2000
// }

// cara pakai callback hell
pesanKopi(pesan[0], (error, pesanan) => {
    minumKopi(error, pesanan)
    pesanKopi(pesan[1], (error, pesanan) => {
        minumKopi(error, pesanan)
        pesanKopi(pesan[2], (error, pesanan) => {
            minumKopi(error, pesanan)
        })
    })
})

// panjang kan? makanya digunakan PROMISE

// pesanKopi('teh', minumKopi)
// setTimeout(() => {
//     pesanKopi('arabica', minumKopi)
// }, 2000)
// setTimeout(() => {
//     pesanKopi('luwak', minumKopi)
// }, 4000)
// setTimeout(() => {
//     pesanKopi('kopsu', minumKopi)
// }, 6000)
// pesanKopi(['arabica', 'espresso', 'teh'], minumKopi)