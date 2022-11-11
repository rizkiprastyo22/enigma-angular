import LibraryService from "../library.service";

export class LibraryImplService implements LibraryService{
    books: Book[] = [];

    constructor(){
        this.books = [];
    }

    add(book): void{
        this.books.push(book);
    }
}