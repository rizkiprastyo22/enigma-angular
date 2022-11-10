// enum = membatasi input
enum MyStringEnum{
    A,
    B,
    C,
    D = 'test'
}

let x: MyStringEnum = MyStringEnum.D;
console.log(x);