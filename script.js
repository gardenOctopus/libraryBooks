// Empty Array for Storing Books
const books = [
    {title: 'Alice in Wonderland'},
    {title: 'Grapes of Wrath'},
    {title: 'The Second Sex'}
]

//Creates New Book Object
function createObject (title) {
    this.title = title
    return `${title}`
}

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

});

//Displays Existing Books
table();