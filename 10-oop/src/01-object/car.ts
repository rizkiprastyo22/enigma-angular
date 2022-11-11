import { CarFeature, CarSpec } from "./car-feature";
// import { CarType } from "./car-type";
import { Vehicle } from "./vehicle";

export class Car implements CarFeature, CarSpec{ // kita gaperlu Vehicle karena dibawah sudah implement tipe data Vehicle
    // id: string;
    // name: string;
    // brand: string;
    // type: CarType;
    // engine: string;
    isStarted: boolean = false; // kasih default value
    private fuel: number = 0; // private digunakan biar variabel ini hanya bisa diakses oleh class Car saja (default dari property adalah public)

    // ? berarti parameter car bersifat opsional
    // dibuat private readonly biar inisialisasi property cuma bisa dilakukan dengan method, gaboleh dari luar
    constructor(private readonly car?: Vehicle){ 

        // kalo ada isi car, jalankan ini
        // ini di uncomment kalau gapake private readonly
        // if (car){
        //     this.id = car.id;
        //     this.name = car.name;
        //     this.brand = car.brand;
        //     this.type = car.type;
        //     this.engine = car.engine;
        //     this.isStarted = car.isStarted;
        // }

    }
    safety(feature: string[]): void {
        throw new Error("Method not implemented.");
    }
    speed(km: number): void {
        throw new Error("Method not implemented.");
    }
    engineType(): string {
        throw new Error("Method not implemented.");
    }
    engineSpec(): string {
        throw new Error("Method not implemented.");
    }
    fuelType(): string {
        throw new Error("Method not implemented.");
    }

    startEngine(): void{
        if(this.fuel > 0){
            this.isStarted = true;
            console.log('mobil bisa jalan');
        }
        else{
            console.log('mobil tidak bisa jalan, isi bensin dulu');
        }
    }

    fillFuel(fuel: number): void{
        this.fuel = fuel;
    }

    stopEngine(): void{
        this.isStarted = false;
    }
}