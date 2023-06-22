// Empty Array for Storing Books
const books = [
    {
        number: 1, 
        title: 'Alice in Wonderland',
        author: 'Lewis Carroll',
        read: 'Finished',
        score: 'Masterpiece'
    },
    {
        number: 2,
        title: 'Grapes of Wrath',
        author: 'John Steinbeck',
        read: 'Not Started',
        score: 'Not Rated'
    },
    {
        number: 3,
        title: 'The Second Sex',
        author: 'Simone de Beauvoir',
        read: 'Finished',
        score: 'Masterpiece'
    }
]

//Counts Number of Books Added
let number = 3;

//Creates New Book Object
function createObject (number, title, author, read, score) {
    this.number = number
    this.title = title
    this.author = author
    this.read = read
    this.score = score
}

//Creates Table from Existing Books in Database
function createTable() {
    //Gets Table
    const table = document.getElementById('table');
    //Empty Array for Storing Book Titles
    //Loops Over Book Titles in Objects
    books.forEach(book => {
        //Adds Row to Bottom of Table
        const row = table.insertRow(-1);
        for (let key in book) {
            //Adds Title Column to Table
            const title = row.insertCell(-1);
            title.innerHTML = `${book[key]}`;
        }
    })
}

//Add New Row to Table
function newRow(newBook) {
    const table = document.getElementById('table');
    const row = table.insertRow(-1);
    for (let key in newBook) {
        const title = row.insertCell(-1);
        title.innerHTML = `${newBook[key]}`;
    }
}

//Open Form 
const addBookBtn = document.getElementById('add-book').addEventListener('click', () => {
    //Open Form on Button Click
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    //Close Form When X is Clicked
    document.getElementById('form-close').addEventListener('click', () => {
        modal.style.display = 'none';
    })
});

//Displays Existing Books
createTable();

//Get Form Data
document.getElementById('submit').addEventListener('click', () => {
    number += 1;
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let read = document.getElementById('read').value;
    let score = document.getElementById('score').value;
    let newBook = new createObject(number, title, author, read, score);
    books.push(newBook);
    newRow(newBook);
})
