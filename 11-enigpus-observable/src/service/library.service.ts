import { Observable } from "rxjs";
import Book from "../model/book";

export default interface LibraryService{
    add(book: Book): Observable<string>;
    getAll(): Observable<Book[] | string>; // jangan lupa beri union karena pesan error bentuknya string
    searchByTitle(title: string): Observable<Book[] | string>; // jangan lupa beri union karena pesan error bentuknya string
    remove(code: string): Observable<string>;
}