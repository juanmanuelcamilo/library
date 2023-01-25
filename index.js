const addBookButton = document.querySelector(".add-book-btn");
const modal = document.querySelector(".modal-container");
const booksGrid = document.querySelector(".books-grid");

//Open the Modal
addBookButton.addEventListener("click", function () {
  modal.style.display = "block";
});

//Close the modal when clicking outside of it
window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

//Array to store my books
let myLibrary = [
  { Title: "hasjkfas", Author: "fjhasjfkhjask", Pages: 20, Read: "Yes" },
  { Title: "hasjkfas", Author: "fjhasjfkhjask", Pages: 20, Read: "Yes" },
];

//Object constructor
class Book {
  constructor(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
  }
}

//Add a book to the Array
function addBookToLibrary() {
  let book = new Book(Title, Author, Pages, Read);
  myLibrary.push(book);
}

//Displaying the books on the Page
function displayBooksOnPage() {
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");
    booksGrid.appendChild(card);

    for (let key in book) {
      console.log(`${key}: ${book[key]}`);
      const para = document.createElement("p");
      para.textContent = `${key}: ${book[key]}`;
      card.appendChild(para);
    }
  });
}

displayBooksOnPage();
console.log(myLibrary);
