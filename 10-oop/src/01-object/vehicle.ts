import { CarType } from "./car-type";

// kita buat tipe data baru namanya Vehicle dan atributnya sudah ditentukan
export type Vehicle = {
    id: string;
    name: string;
    brand: string;
    type: CarType;
    engine: string;
    // isStarted: boolean;
}