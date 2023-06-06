//Empty Array for Storing Books
let books = [];

function Book() {
    //The Constructor
}

function addBook() {
    //Ask User for Book
    let userBook = prompt('Please choose a book to add to the library.');
    //Push Book into Array
    books.push(userBook);

    console.log(books);
}

addBook();
