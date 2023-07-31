const submit = document.getElementById("submit");
submit.addEventListener("click", addBookToLibrary);

let myLibrary = [];

function newBook(author, title, pages, read) {
    // the constructor... 
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(event) {
    // do stuff here
    event.preventDefault();
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    const book = new newBook(author, title, pages, read)
    myLibrary.push(book);
    return bookDisplay();
}

function bookDisplay() {
    const displayDiv = document.querySelector('#books');
    displayDiv.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        displayBook(i);
        
    }
}
function displayBook(index) {
        const displayDiv = document.querySelector('#books')
        const book = myLibrary[index]

        const bookDisplayDiv = document.createElement('div')
        bookDisplayDiv.classList = 'bookCard'
        
        const dispAuthor = document.createElement('h3')
        dispAuthor.textContent = `${book.author}`

        const dispTitle = document.createElement('h3')
        dispTitle.textContent = `${book.title}`

        const dispPages = document.createElement('h3')
        dispPages.textContent = `${book.pages}`

        const dispRead = document.createElement('button')
        dispRead.textContent = `read`
        
        bookDisplayDiv.append(dispAuthor, dispTitle, dispPages, dispRead)
        displayDiv.appendChild(bookDisplayDiv)
}