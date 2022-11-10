// bersifat mengikat
// bisa kasih tipe data
// pembuatannya mirip kayak typealias

interface People{
    id: number,
    nama: string,
    alamat: string,
    umur: number
}

// ambil interface dari People
const employee: People = {
    id: 1,
    nama: 'Rizki',
    alamat: 'Jl. Pegangsaan Cimahi',
    umur: 30
}