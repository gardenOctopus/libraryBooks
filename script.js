// Empty Array for Storing Books
const books = [
    {title: 'Alice in Wonderland'},
    {title: 'Grapes of Wrath'},
    {title: 'The Second Sex'}
]

//Counts Order of When Books Were Added
let number = 0;

//Creates New Book Object
function createObject (title) {
    this.title = title
    return `${title}`
}

// //Displays Books
// function displayBooks() {
//     const shelf = document.getElementById('book-display');
// let book = [];
// books.forEach(book => {
//     for (let key in book) {
//         book.push(`${book[key]}`);
//     }
// })
// shelf.innerHTML = book;
// }

function table() {
    //Gets Table
    const table = document.getElementById('table');
    //Empty Array for Storing Book Titles
    //Loops Over Book Titles in Objects
    books.forEach(book => {
        for (let key in book) {
            //Adds Row to Bottom of Table
            const row = table.insertRow(-1);
            //Adds Number Column to Table
            const number = row.insertCell(0);
            number.innerHTML = 0;
            //Adds Title Column to Table
            const title = row.insertCell(1);
            //Adds Book Title to Cell
            title.innerHTML = `${book[key]}`;
        }
    })
}

//Attaches addBook Function to Nav Link
const addBookBtn = document.getElementById('add-book').addEventListener('click', () => {
    // Ask User for Book
    const userBook = prompt('Please choose a book to add to the library.');
    // Takes User Feedback and Creates New Book Object
    let title = new createObject(userBook);
    // Pushes New Book Object into the Books Array
    books.push(title);
    // Displays the New Book
    table();
    //For Book Number
    //let increaseNumber = ++number;
    //table(increaseNumber);
});

//Displays Existing Books
table();