"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(car) {
        this.car = car;
        this.isStarted = false;
        this.fuel = 0;
    }
    safety(feature) {
        throw new Error("Method not implemented.");
    }
    speed(km) {
        throw new Error("Method not implemented.");
    }
    engineType() {
        throw new Error("Method not implemented.");
    }
    engineSpec() {
        throw new Error("Method not implemented.");
    }
    fuelType() {
        throw new Error("Method not implemented.");
    }
    startEngine() {
        if (this.fuel > 0) {
            this.isStarted = true;
            console.log('mobil bisa jalan');
        }
        else {
            console.log('mobil tidak bisa jalan, isi bensin dulu');
        }
    }
    fillFuel(fuel) {
        this.fuel = fuel;
    }
    stopEngine() {
        this.isStarted = false;
    }
}
exports.Car = Car;
