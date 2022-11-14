import { Observable, Observer } from 'rxjs';
import Book from '../../model/book';
import LibraryService from '../library.service';

class PgLibraryService implements LibraryService {
  books: Book[] = [];
  constructor() {
    this.books = [];
  }

  add(book): Observable<string> {
    console.log('Proses penambahan data');
    return new Observable<string>((observer: Observer<string>) => {
      if (this.books.push(book)) return observer.next('Proses penambahan data berhasil');
      return observer.error(new Error('tambah buku gagal'));
    })

  }

  getAll(): Observable<Book[] | string> {
    console.log('Proses pengambilan semua data');
    return new Observable<Book[]>((observer: Observer<Book[] | string>) => {
      if (this.books.length > 0) return observer.next(this.books);
      return observer.error(new Error('tidak ada buku'));
    })
  }

  searchByTitle(title: string): Observable<Book[] | string> {
    console.log('Proses pencarian data dengan judul: ' + title);
    return new Observable<Book[]>((observer: Observer<Book[] | string>) => {
      const books: Book[] = this.books.filter((book) => {
        if (book.title.toLocaleLowerCase() === title.toLocaleLowerCase()) return book;
      });
      if (books.length > 0) return observer.next(books);
      return observer.error(new Error('tidak ada judul'));
    })
  }

  remove(code: string): Observable<string> {
    console.log('Proses penghapusan data dengan code: ' + code);
    return new Observable<string>((observer: Observer<string>) => {
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
    })
  }
}

export default PgLibraryService;