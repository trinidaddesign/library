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
const pageCount = document.querySelector('#pageCount');
//const removeBook = document.querySelector('.removeBook');

//dom element for displaying books
const tableBody = document.querySelector('.tbody');

//array for book storage
const myLibrary = [];

function Books(title, author, pages) {
    this.title = title

    this.author = author

    this.pages = pages
}

function addBook() {
  let title = titleVal.value;
  let author = authorVal.value;
  let pages = pageCount.value;
  //adds new book
  let newBook = new Books(title, author, pages)
  myLibrary.push(newBook)
}

function displayBook() {
  tableBody.innerHtml = "";
  myLibrary.forEach((book) => {
    const lastBook = myLibrary[myLibrary.length - 1]
    const bookHtml = 
    `<tr>
      <td data-index-number="${myLibrary.indexOf(book)}" >${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>
      <label><input type="checkbox"></label>
      </td>
      <td><button onClick="removeBook()">Delete</button></td>
    </tr>`;
    if (book === lastBook) {
      tableBody.insertAdjacentHTML("beforebegin",bookHtml)
    }
  })
}

function clearForm() {
  titleVal.value = "";
  authorVal.value = "";
  pageCount.value = "";
}

function removeBook() {
  return alert('pushed')
}

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
  displayBook();
  dialog.close();
  clearForm();
})