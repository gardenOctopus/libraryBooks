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

const babies = [1, 2, 3];

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
        //Adds Row to Bottom of Table
        const row = table.insertRow(-1);
        for (let key in book) {
            //Adds Title Column to Table
            const title = row.insertCell(-1);
            title.innerHTML = `${book[key]}`;
        }
    })
}

//Open Form 
const addBookBtn = document.getElementById('add-book').addEventListener('click', () => {
    //Open Form on Button Click
    const form = document.getElementById('book-form-container');
    form.style.display = 'block';
    //Close Form When X is Clicked
    document.getElementById('form-close').addEventListener('click', () => {
        form.style.display = 'none';
    })
});

//Displays Existing Books
table();