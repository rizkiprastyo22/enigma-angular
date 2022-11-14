"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PgLibraryService {
    constructor() {
        this.books = [];
        this.books = [];
    }
    add(book) {
        console.log('Proses penambahan data');
        this.books.push(book);
        console.log('Proses penambahan data berhasil');
    }
    getAll() {
        console.log('Proses pengambilan semua data');
        if (this.books.length > 0)
            return this.books;
        return [];
    }
    searchByTitle(title) {
        console.log('Proses pencarian data dengan judul: ' + title);
        const books = this.books.filter((book) => {
            if (book.title.toLocaleLowerCase() === title.toLocaleLowerCase())
                return book;
        });
        if (books.length > 0)
            return books;
        return [];
    }
    remove(code) {
        console.log('Proses penghapusan data dengan code: ' + code);
        if (this.books.length > 0) {
            let i = 0;
            for (let book of this.books) {
                if (book.code.toLowerCase() === code.toLowerCase()) {
                    this.books.splice(i, 1);
                    return `Buku dengan code: ${code} berhasil di hapus`;
                }
                i++;
            }
        }
    }
}
exports.default = PgLibraryService;
