// switch case
// siwtch-case dipakai untuk mengeksekusi conditional yang banyak
const nilai = 'd';

switch (nilai.toUpperCase()){
    case 'A':
        console.log('Sangat Baik');
        break;
    case 'B':
        console.log('Baik');
        break;
    case 'C':
        console.log('Cukup');
        break;
    default:
        // karena sudah di akhir program, jadi default ga perlu break
        console.log('Tidak Lulus');
}
