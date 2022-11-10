// typescript (typely stronger) membutuhkan tipe data

// kenapa pakai typescript? selain karena lebih strict, ketika kita ngoding, error dikasih tau dulu sebelum kita harus running
// strict nya itu yang ngebuat kita lebih mudah debugging

// let fullName: string = 5; // langsung kasih tau errornya

// data type

// 1. string
let myName: string = 'Rizki';

// 2. number
let myNumber: number = 5;

// 3. boolean
let isTrue: boolean = true;

// 4. undefined
let  und: undefined = undefined;

// 5. null
let nul: null = null;

// 6. array
let arrNumber: number[] = [1,2,3,4,5];
let arrString: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// kalo gatentu (tapi tidak disarankan)
let arrAny: any[] = ['a', 2, undefined, 4, 'e'];

// kalo bukan array
let any: any = 'Mandiri';
let unk: unknown = 123;

