// async-await adalah fitur untuk mempermudah penggunaan promise
function pesanMinuman(pesanan, kirimPesan){
    console.log(`Pesanan saya adalah: ${pesanan}`)
    setTimeout(() => {
        if (pesanan == 'teh'){
            kirimPesan(`pesanan ${pesanan} tidak tersedia`)
        }
        else{
            kirimPesan(null, `pesananan ${pesanan} sudah siap`)
        }
    }, 3000)
}

function minumKopi(reject, resolve) {
    return (error, output) => {
        if (error){
            reject(`Kecewa, ${error}`)
        }
        else{
            resolve(`Senang, ${output}`)
        }

    }
}

function pesanMinumanAsync(pesanan){
    // async-await harus ada promise
    return new Promise((resolve, reject) => {
        pesanMinuman(pesanan, minumKopi(reject, resolve))
    })
}

// async-await harus ada try-catch
// yang manggil yang async-await
// kalo sebelumnya, async-await di controller, promise nya baru di service
async function orderMinuman(){
    try{
        const order = await pesanMinumanAsync('latte')
        console.log(order)
    } catch(error){
        console.log(error)
    }
}

// kalo pake arrow function
// const orderMinuman = async () => {
//     try{
//         const order = await pesanMinumanAsync('latte')
//         console.log(order)
//     } catch(error){
//         console.log(error)
//     }
// }

orderMinuman()