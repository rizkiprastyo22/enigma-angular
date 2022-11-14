"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class PgLibraryService {
    constructor() {
        this.books = [];
        this.books = [];
    }
    add(book) {
        console.log('Proses penambahan data');
        return new rxjs_1.Observable((observer) => {
            if (this.books.push(book))
                return observer.next('Proses penambahan data berhasil');
            return observer.error(new Error('tambah buku gagal'));
        });
    }
    getAll() {
        console.log('Proses pengambilan semua data');
        return new rxjs_1.Observable((observer) => {
            if (this.books.length > 0)
                return observer.next(this.books);
            return observer.error(new Error('tidak ada buku'));
        });
    }
    searchByTitle(title) {
        console.log('Proses pencarian data dengan judul: ' + title);
        return new rxjs_1.Observable((observer) => {
            const books = this.books.filter((book) => {
                if (book.title.toLocaleLowerCase() === title.toLocaleLowerCase())
                    return book;
            });
            if (books.length > 0)
                return observer.next(books);
            return observer.error(new Error('tidak ada judul'));
        });
    }
    remove(code) {
        console.log('Proses penghapusan data dengan code: ' + code);
        return new rxjs_1.Observable((observer) => {
            if (this.books.length > 0) {
                let i = 0;
                for (let book of this.books) {
                    if (book.code.toLowerCase() === code.toLowerCase()) {
                        this.books.splice(i, 1);
                        return observer.next(`Buku dengan code: ${code} berhasil di hapus`);
                    }
                    i++;
                }
                return observer.error(new Error('hapus buku gagal'));
            }
            return observer.error(new Error('tidak ada buku yang bisa dihapus'));
        });
    }
}
exports.default = PgLibraryService;
