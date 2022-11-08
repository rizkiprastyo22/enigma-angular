class Genus{
    constructor(genusName = 'Mamalia', habit = 'Vivipar'){
        this.genusName = genusName
        this.habit = habit
    }

    getGenus(){
        return this.genusName
    }

    getHabit(){
        return this.habit
    }
}

// Aminal diwariskan method yang dimiliki Genus
class Animal extends Genus{
    constructor(name = 'cat'){
        super('mamalia', 'ovipar') // function yang harus digunakan sebelum mengakses derived class (urutannya mengikuti di parameter pada constructor)
        this.name = name
    }
}

const animal = new Animal('dog')
console.log(animal.getHabit())