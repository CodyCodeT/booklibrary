const submit = document.getElementById("submit");
const checkbox = document.querySelector('#read')
const form = document.querySelector('#bookForm')
const plusBook = document.querySelector('#addBook')

plusBook.addEventListener('click', bookDialogue)
submit.addEventListener("click", addBookToLibrary);


form.style.display = 'none'

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
    let read = document.getElementById("read").checked;
    const book = new newBook(author, title, pages, read)
    myLibrary.push(book);
    bookDialogue();
    return bookDisplay();
}

function bookDisplay() {
    const displayDiv = document.querySelector('#books');
    displayDiv.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        displayBook(i);
    }
}
function deleteItem(itemID) {
    myLibrary.splice(itemID, 1);
    bookDisplay();
}
function displayBook(index) {
        const displayDiv = document.querySelector('#books')
        const book = myLibrary[index]

        const bookDisplayDiv = document.createElement('div')
        bookDisplayDiv.dataset.index = `${index}`
        bookDisplayDiv.classList = 'bookCard'
        
        const dispAuthor = document.createElement('h3')
        dispAuthor.textContent = `Author: ${book.author}`

        const dispTitle = document.createElement('h3')
        dispTitle.textContent = `Title: ${book.title}`

        const dispPages = document.createElement('h3')
        dispPages.textContent = `Pages ${book.pages}`

        const buttonContainer = document.createElement('div')
        buttonContainer.classList = ('buttonContainer')
        const dispRead = document.createElement('button')
        
        dispRead.textContent = book.read ? 'Read' : 'Unread'
        dispRead.classList = book.read ? 'green' : 'red'
        dispRead.addEventListener('click', function () {
        book.read = !book.read;
        dispRead.textContent = book.read ? 'Read' : 'Unread';
        dispRead.classList = book.read ? 'green' : 'red';
    });

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.classList = 'delete'
        deleteButton.addEventListener('click', function() {
            deleteItem(`${index}`);
        });
        
        bookDisplayDiv.append(dispAuthor, dispTitle, dispPages, buttonContainer)
        buttonContainer.append(dispRead, deleteButton)
        displayDiv.appendChild(bookDisplayDiv)
}
function bookDialogue() {
    if(form.style.display === 'none'){
    form.style.display = 'flex'
    form.style.flexDirection = 'column'
    } else {
        return form.style.display = 'none'
    }
}
const footer = document.querySelector('footer')
const currentYear = new Date().getFullYear();
footer.textContent += `${currentYear}`
