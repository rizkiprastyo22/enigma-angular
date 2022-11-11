import Book from "../model/book";

export default interface LibraryService{
    add(book: Book): void;
    getAll(): Book[];
    searchByTitle(title: string): Book[];
    remove(id: number): void;
}