const merah = 'Berhenti'
const kuning = 'Hati-hati'
const hijau = 'Jalan'

function Merah(){
    setTimeout(() => {
        console.log(merah)
    }, 1000)
}

function Hijau(error, output){
    if (error){
        console.log(error)
    }
    else{
        console.log(output)
    }
}

function Kuning(callback){
    setTimeout(() => {
        callback(kuning, null)
    }, 2000)
    setTimeout(() => {
        callback(null, hijau)
    }, 3000)
}

Merah()
Kuning(Hijau)

// master

// const merah = "Berhenti"
// const kuning = "Hati-hati"
// const hijau = "Jalan"

// const Merah = () => {
//     setTimeout(() => {
//         console.log(merah)
//     }, 1000)
// }

// const Kuning = (callback) => {
//     setTimeout( () => {
//         console.log(kuning)
//         callback()
//     }, 2000)
// }

// const Hijau = () => {
//     setTimeout(()=> {
//         console.log(hijau)
//     }, 1000)
// }

// Merah()
// Kuning(Hijau)