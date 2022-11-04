function heroCheck(nama, peran) {
    if(!nama && !peran){
        return 'Nama dan Peran harus diisi';
    }
    else if(!nama){
        return 'Nama harus diisi';
    }
    else if(!peran){
        return 'Peran harus diisi';
    }
    else if(nama && peran=='superhero'){
        return 'Selamat datang di Dunia Proxytia, ${nama}';
    }
    else if(nama && peran=='monster'){
        return 'Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf';
    }
    else if(nama && peran != 'superhero' || peran != 'monster'){
        return 'Tidak ada peran selain Superhero dan Monster';
    }
}

nama = 'budi';
peran = 'Superhero';

console.log(heroCheck(nama, peran.toLowerCase()));