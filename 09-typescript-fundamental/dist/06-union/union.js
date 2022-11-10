let userid = '123';
userid = 2;
function getMahasiswa(margin) {
    return margin;
}
function giveColor(color) {
    return color;
}
function getNarrowAge(input = '123') {
    if (typeof input === 'number') {
        return 'youre inputed a number';
    }
    return 'youre inputed a string';
}
console.log(getNarrowAge(123));
