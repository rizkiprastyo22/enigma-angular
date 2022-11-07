const input = 5;

let genap = [];
let ganjil = [];
let totalGanjil = 0;
let totalGenap = 0;

for (let i = 1; i <= input * 2; i++) {
    if (i % 2 == 0){
        genap.push(i);
        totalGenap += i;
    } else if (i % 2 == 1 && i < input){
        ganjil.push(i);
        totalGanjil += i;
    }
}

console.log(`Ganjil: ${ganjil.join(" + ")} = ${totalGanjil}`);
console.log(`Genap: ${genap.join(" + ")} = ${totalGenap}`);