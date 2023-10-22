//where info wil be displayed
const text = document.querySelector('.text');
const confirmBtn = document.querySelector('.confirm');


//dom elements for dialog modal
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

//array for book storage
const myLibrary = [];

function Books(title, author, pages) {
    this.title = title

    this.author = author

    this.pages = pages
}

function addBook() {
  //ask user for book

  //adds new book
  //let newBook = new Books(title, author, pages)
  //myLibrary.push(newBook)
}

//myLibrary.forEach((book)=> {
 // text.textContent = `${book.title} written by: ${book.author}`
//})

//show the dialog button button opens the dialog
showButton.addEventListener("click", () => {
  dialog.showModal();
});

//close button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close()
})

//prevents the confirm button from submitting the form
confirmBtn.addEventListener("click", () => {
  e.preventDefault()
})