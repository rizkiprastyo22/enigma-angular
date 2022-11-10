// bisa lebih dari satu jenis tipe data untuk suatu variabel
let userid: string | number = '123';
userid = 2; // tidak error

// void berarti fungsi ini tidak perlu mereturn apa apa
// function getMahasiswa (margin: string | number) : void{
    
// }

// hasil return bisa string/number
function getMahasiswa (margin: string | number) : string | number {
    return margin;
}

type Color = 'red' | 'green' | 'blue';

function giveColor(color: Color | string): string {
    return color;
}

function getNarrowAge(input: number | string = '123'): string{
    if (typeof input === 'number'){
        return 'youre inputed a number'
    }
    return 'youre inputed a string'
}

console.log(getNarrowAge(123))