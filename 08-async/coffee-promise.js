// promise

// object stock
stock = {
    bijiKopi: 100,
    air: 20
}

// filter pesanan
function pesanKopi(pesanan){
    console.log(`Pesanan saya adalah: ${pesanan}`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(pesanan == 'teh'){
                reject(`pesanan ${pesanan} tidak tersedia`)
            }
            else{
                const hasil = `kopi ${pesanan} sedang diproses`
                resolve(hasil)
            }
        }, 1000)
    })
}

// cek stok
function cekStock(){
    console.log('cek stock ...')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stock.bijiKopi > 0 && stock.air > 0){
                resolve('cek stock')
            }
            else{
                reject('stock kopi tidak tersedia')
            }
        }, 1000)
    })

}

// kedua fungsi di bawah pasti bisa jalan selama stok ada, jadi gaada reject
function memanaskanAir(){
    console.log(`air sedang dipanaskan`)
    // kondisi = Math.random(0,1)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // if(kondisi==0){
            //     reject('air tumpah, masak air lagi')
            // }
            resolve(`air sudah dipanaskan`)
        }, 2000)
    })
}

function menggilingKopi(){
    console.log(`kopi sedang digiling`)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`kopi sedang digiling`)
        }, 4000) // yang 2000 bakal nunggu yang 4000 baru bisa jalan ke yang selanjutnya
    })
}

// seduh kopi
function seduhkopi(pesanan){
    console.log(`memasukkan kopi ${pesanan} ke dalam mesin`)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Kopi ${pesanan} sudah siap`)
        }, 1000)
    })
}

// program utama
function pesanMinuman(pesanan){
    pesanKopi(pesanan)
    .then(result => {
        console.log(result)
        return cekStock()
    })
    .then(result => {
        console.log(result)
        return Promise.all([memanaskanAir(), menggilingKopi()]) // proses ini dijalankan bersamaan secara paralel maksudnya
    })
    .then(result => {
        console.log(result)
        return seduhkopi(pesanan)
    })
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        console.log('terima kasih sudah memesan')
    })
}

pesanMinuman('kopi')