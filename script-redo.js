/*----- app's state (variables) -----*/

let books = (function () {
    let books = [
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
    ];
    return books;
})();


//Counts Number of Books Added
let number = (function () {
    let number = 3;
    return number;
})();



/*----- cached element references -----*/

//Gets Table
const TABLE = (function () {
    const TABLE = document.getElementById('table');
    return TABLE;
})();



/*----- classes -----*/

//Creates New Book Object
class createObject {
    constructor (number, title, author, read, score) {
    this.number = number
    this.title = title
    this.author = author
    this.read = read
    this.score = score
}};



/*----- functions -----*/

// Adds New Row
function createRow(b) {

    // Creates New Row at the End of the Table
    let row = TABLE.insertRow(-1);

    // Loops Over Each Item in Books || New Book Item
    for (let key in b) {

        //Adds New Column to Table
        let col = row.insertCell(-1);

        // Populates New Column with Content  
        col.innerHTML = `${b[key]}`; 

    };

    //Adds Edit Button to Last Column
    let btn = row.insertCell(-1);
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    btn.appendChild(editBtn);
    editBtn.addEventListener('click', openForm);

    //Adds Edit Button to Last Column
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    btn.appendChild(removeBtn);
    removeBtn.addEventListener('click', () => {
        let num = b.number;
        TABLE.deleteRow(num);
        books = books.filter(e => e !== b);
        return books;
    });
};


//Opens Form when Edit Button is Clicked
function openForm() {
    //Open Form on Button Click
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    //Close Form When X is Clicked
    document.getElementById('form-close').addEventListener('click', () => {
        modal.style.display = 'none';
    });
};


// Creates Table from Existing Books
function createTable() {
    books.forEach(book => {
        createRow(book);
    })
};
    

// Adds New Row to Table
function newRow(b) {
    createRow(b);
};


/*----- event listeners -----*/

//Adds Event Listener to Button to Open Form
const addBookBtn = document.getElementById('add-book').addEventListener('click', openForm);

//Get Form Data
document.getElementById('submit').addEventListener('click', () => {
    // Gets Information
    number += 1;
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let read = document.getElementById('read').value;
    let score = document.getElementById('score').value;
    // Verifies Information
    const titleV = document.getElementById('title');
    const authorV = document.getElementById('author');
    if (!titleV.checkValidity()) {
        titleV.style.border = 'solid #a81c07 3px';
        number -= 1;
    } else if (!authorV.checkValidity()) {
        authorV.style.border = 'solid #a81c07 3px';
        number -= 1;
    } else {
    // Adds New Object to Table
        let newBook = new createObject(number, title, author, read, score);
        books.push(newBook);
        newRow(newBook);
    }
});



// Creates Table on Page Open
createTable();

