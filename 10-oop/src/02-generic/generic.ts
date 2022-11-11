// fungsi menampilkan data suatu elemen secara acak
// T memberi kita kesempitan tipe data pada suatu variable secara implisit
// Huruf T ini ga wajib, bisa jadi B (tapi biasanya generic pake T simbol dari Type)
function randomElem<T>(theArray: T[]): T{
    // buat random index
    let randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex]
}

let positions = ['20', '23', '34'] // udah implisit string[]
let randomPositions =  randomElem(positions)

console.log(randomPositions)