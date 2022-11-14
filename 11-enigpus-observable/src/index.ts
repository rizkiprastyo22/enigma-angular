import Book from './model/book';
import PgLibraryService from './service/impl/pg-library.service';

let library = new PgLibraryService();
let book: Book = {
  code: "B001",
  title: "TypeScript itu keren",
  publisher: "Enigma Camp",
  year: 2021,
  author: "Adi"
}

const observer = {
  next: (result: any) => console.log(result),
  error: (error: any) => console.log(error.message),
  complete: () => console.log('Observer Complete')
  
}

// library.add(book).subscribe((result) => {
//   console.log(result);
// },
// (error) => {
//   console.log(error.message);
// });

library.add(book).subscribe(observer);

book = {
  code: "B002",
  title: "TypeScript itu keren",
  publisher: "Enigma Camp",
  year: 2022,
  author: "Adi Luhung"
}

// Add
// library.add(book).subscribe((result) => {
//   console.log(result);
// },
// (error) => {
//   console.log(error.message);
// });

library.add(book).subscribe(observer);

// GetAll
// library.getAll().subscribe((result) => {
//   console.log(result);
// },
// (error) => {
//   console.log(error.message);
// })

library.getAll().subscribe(observer)

// SearchByTitile
// library.searchByTitle('TypeScript itu').subscribe((result) => {
//   console.log(result);
// },
// (error) => {
//   console.log(error.message);
// });

library.searchByTitle('TypeScript itu').subscribe(observer);

// Remove B002
// library.remove('B003').subscribe((result: any) => {
//   console.log(result); 
// },
// (error) => {
//   console.log(error.message);
// });

library.remove('B003').subscribe(observer);

// Get All again
// library.getAll().subscribe((result) => {
//   console.log(result);
// },
// (error) => {
//   console.log(error.message);
// })

library.getAll().subscribe(observer)