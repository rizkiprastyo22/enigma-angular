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
library.add(book);
book = {
    code: "B002",
    title: "TypeScript itu keren",
    publisher: "Enigma Camp",
    year: 2022,
    author: "Adi Luhung"
};
library.add(book);
console.log(library.getAll());
const findBook01 = library.searchByTitle('TypeScript itu keren');
console.log(findBook01);
library.remove('B002');
console.log(library.getAll());
