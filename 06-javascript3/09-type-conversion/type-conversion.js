let num = 10;
console.log(typeof num);

// from everything to string
let numStr = num.toString();
console.log(typeof numStr);

// from stringNumber to number
let strNum = Number(numStr);
console.log(typeof strNum);

// mau itu float atau int, js hanya mengerti number
let decNum = '10.5';
console.log(typeof decNum);
let decNum2 = parseFloat(decNum);
console.log(typeof decNum2);

// bool
let val;
let bool = Boolean(val); // bool bernilai false karena val undefined
console.log(bool);
console.log(typeof bool);