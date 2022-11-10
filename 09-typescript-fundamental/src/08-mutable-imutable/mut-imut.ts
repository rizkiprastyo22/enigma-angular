// let arrayOfNumber = [1,2,3,4,5]; // secara implisit arrayOfNumber secara auto didefinisikan number karena isinya number semua
// let arrayOfNumber = [1,'2',3,4,5]; // kecuali mau gini dibuat union

// arrayOfNumber[0] = 'Mandiri Sekali'; // ini gabisa kalo arrayOfNumber isinya number semua
// arrayOfNumber[0] = 3; // ini bisa kalo arrayOfNumber isinya number semua


let arrayOfNumber: Readonly<number[]> = [1,2,3,4,5];
// arrayOfNumber[0] = 2; // ini gabisa, kalo readonly tidak bisa direassign si index
arrayOfNumber = [2,3,4,5]; // tapi kita bisa reassign satu arraynya sekalian

// bedanya sama const apa?
// const arrayOfString = ['apa', 'ini'];
// arrayOfString[0] = 'bisa ganti'; // ini bisa
// arrayOfString = ['gabisa direassign satu array', 'tidak bisa reasign'] // ini gabisa

// kalo const readonly, gabisa direassign baik secara index atau keseluruhan array
const arrayOfString: Readonly<string[]> = ['apa', 'ini'];
// arrayOfString[0] = 'bisa ganti'; // sekarang ini gabisa
// arrayOfString = ['gabisa direassign satu array', 'tidak bisa reasign'] // ini juga gabisa