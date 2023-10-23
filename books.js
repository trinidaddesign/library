//where info wil be displayed
const text = document.querySelector('.text');



//dom elements for dialog modal
const dialog = document.querySelector("dialog");
const showBtn = document.querySelector(".addBook");
const closeBtn = document.querySelector(".cancel");
const confirmBtn = document.querySelector('.confirm');
const form = document.querySelector('.form');
const titleVal = document.querySelector('#title');
const authorVal = document.querySelector('#author');
const pageCount = document.querySelector('#pageCount')
const readVal = document.querySelectorAll('.read')

//array for book storage
const myLibrary = [];

function Books(title, author, pages, read) {
    this.title = title

    this.author = author

    this.pages = pages

    this.read = read
}

function addBook() {
  let title = titleVal.value;
  let author = authorVal.value;
  let pages = pageCount.value;
  let read = readVal.value;
  //adds new book
  let newBook = new Books(title, author, pages, read)
  myLibrary.push(newBook)
}

function clearForm() {
  titleVal.value = "";
  authorVal.value = "";
  pageCount.value = "";
  readVal.value = "";
}

//myLibrary.forEach((book)=> {
 // text.textContent = `${book.title} written by: ${book.author}`
//})

//show the dialog button button opens the dialog
showBtn.addEventListener("click", () => {
  dialog.showModal();
});

//close button closes the dialog
closeBtn.addEventListener("click", () => {
  dialog.close()
})

//prevents the confirm button from submitting the form
confirmBtn.addEventListener("click", () => {
  addBook();
  clearForm();
  dialog.close()
})