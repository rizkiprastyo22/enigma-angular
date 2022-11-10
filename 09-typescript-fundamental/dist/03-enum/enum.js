var MyStringEnum;
(function (MyStringEnum) {
    MyStringEnum[MyStringEnum["A"] = 0] = "A";
    MyStringEnum[MyStringEnum["B"] = 1] = "B";
    MyStringEnum[MyStringEnum["C"] = 2] = "C";
    MyStringEnum["D"] = "test";
})(MyStringEnum || (MyStringEnum = {}));
let x = MyStringEnum.D;
console.log(x);
