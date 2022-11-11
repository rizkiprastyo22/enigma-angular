function randomElem(theArray) {
    let randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
let positions = ['20', '23', '34'];
let randomPositions = randomElem(positions);
console.log(randomPositions);
