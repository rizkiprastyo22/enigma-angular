// input
let input = 5;

// pembuatan array genap
let arrGenap = [];
genap = 0;
for (let i = 0; i < input; i++) {
  genap += 2;
  arrGenap.push(genap);
}

// pembuatan array ganjil
let arrGanjil = [];
ganjil = 1;
while (ganjil < input) {
  arrGanjil.push(ganjil);
  ganjil += 2;
}

// inisialisasi hasil
let hasilGenap = 0;
let hasilGanjil = 0;

// perhitungan hasil
for (let i = 0; i < arrGenap.length; i++) {
  hasilGenap += arrGenap[i];
}


for (let i = 0; i < arrGanjil.length; i++) {
    hasilGanjil += arrGanjil[i];
}

console.log("Genap: " + arrGenap.join("+")+'='+ hasilGenap);
console.log("Ganjil: " + arrGanjil.join("+")+'='+ hasilGanjil);
