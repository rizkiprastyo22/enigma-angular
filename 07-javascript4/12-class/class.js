// function constructor
function Car(name = 'Toyota', color = 'merah', engine = 'V8', width = 100, height = 200) {
    // property
    this.name = name
    this.color = color.toLowerCase()
    this.engine = engine
    this.dimension = {
        width: width,
        height: height
    }

    // method
    this.getInfo = function(){
        console.log(`Ini adalah mobil ${this.name} berwarna ${this.color} dengan mesin ${this.engine} yang berdimensi ${this.dimension.width} x ${this.dimension.height}`)
    }
}

const car = new Car('Honda', 'biru', 'V8', 150, 200)

// console.log(car)
car.getInfo()

// class (blueprint untuk membuat sebuah object)
class Animal{
    
    // constructor method yang pertama kali dijalankan
    // biasanya diisi properties
    constructor(name='cat', legs = 4, genus='mamalia', sound='meong'){
        this.name = name
        this.legs = legs
        this.genus = genus
        this.sound = sound
    }

    // method
    getInfo(){
        console.log(`This ${this.name} has ${this.legs} legs is ${this.genus}`)
    }

    animalSound(){
        console.log(`Sound: ${this.sound}!`)
    }

    // static method = method yang dipakai oleh class itu sendiri
    // jadi ini gabisa dipakai untuk object
    static getAnimal(){
        return 'Animal'
    }

}

const animal = new Animal('dog', 4, 'mamalia', 'woof')
// console.log(animal)
animal.getInfo()
animal.animalSound()

