import { Car } from "./01-object/car";
import { CarType } from "./01-object/car-type";
import { Vehicle } from "./01-object/vehicle";
import Cafe from "./03-async/order-coffee";

// 01-object
// ini gaperlu dilakukan kalau sudah punya interface
// // cara manual
// const sedan: Car = new Car();
// sedan.id = '1';
// sedan.name = 'Civic';
// sedan.brand = 'Honda';
// sedan.type = CarType.SEDAN;
// sedan.engine = '1.SL';
// // sedan.fuel = 10000; // ini gabisa dilakuin karena fuel sudah private
// console.log(sedan);

// // starter mobil
// sedan.startEngine(); // mobil gabisa jalan karena bensin masih kosong
// console.log(sedan);

// // isi bensin
// sedan.fillFuel(10);
// sedan.startEngine(); // sekarang mobil bisa jalan
// console.log(sedan);

// bikin object mobil baru
// const newCar: Vehicle = {
//     id: '1',
//     name: 'Teslax',
//     brand: 'Tesla',
//     type: CarType.SEDAN,
//     engine: '1.SL'
// }

// const teslax: Car = new Car(newCar);
// console.log(teslax);

// teslax.fillFuel(10);
// teslax.startEngine();

// console.log(teslax);


// 03-async
const cafe: Cafe = new Cafe();
const orders: string[] = [
    'cafe latte',
    'cappuccino',
    'kopi susu keluarga',
    'black tea',
    'hazelnut',
    'ice cream',
    'teh',
];

// pertama
// const takeOrder = (error: any, coffee: string) => {
//   if (error) console.log(error);
//   else console.log(coffee);
// }

// cafe.orderCoffee(orders[1], (error: any, coffee: string) => {
//   takeOrder(error, coffee);
//   cafe.orderCoffee(orders[0], (error: any, coffee: any) => {
//     takeOrder(error, coffee);
//   })
// })

// kedua
// const takeOrder: Promise<string>[] = orders.map((order) => {
//   return cafe.orderCoffeeWithAsync(order);
// });

// Promise.all(takeOrder)
//     .then((result: string[]) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     })

// ketiga
async function orderProcess(): Promise<string[]> {
    const result: string[] = [];
    for (const order of orders) {
      try {
        const takeOrder: string = await cafe.orderCoffeeWithAsync(order);
        result.push(takeOrder);
      } catch (error) {
        console.log(`Pesanan ${order} tidak berhasil, karena ${error}`);
      }
    }
    return result;
  }
  
  orderProcess()
    .then((result: string[]) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    })

// RxJS untuk dokumentasi observable