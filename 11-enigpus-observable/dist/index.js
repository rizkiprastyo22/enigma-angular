"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_library_service_1 = require("./service/impl/pg-library.service");
let library = new pg_library_service_1.default();
let book = {
    code: "B001",
    title: "TypeScript itu keren",
    publisher: "Enigma Camp",
    year: 2021,
    author: "Adi"
};
const observer = {
    next: (result) => console.log(result),
    error: (error) => console.log(error.message),
    complete: () => console.log('Observer Complete')
};
library.add(book).subscribe(observer);
book = {
    code: "B002",
    title: "TypeScript itu keren",
    publisher: "Enigma Camp",
    year: 2022,
    author: "Adi Luhung"
};
library.add(book).subscribe(observer);
library.getAll().subscribe(observer);
library.searchByTitle('TypeScript itu').subscribe(observer);
library.remove('B003').subscribe(observer);
library.getAll().subscribe(observer);
