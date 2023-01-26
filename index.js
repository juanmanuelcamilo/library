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
let myLibrary = [];

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
function addBookToLibrary(Title, Author, Pages, Read) {
  let book = new Book(Title, Author, Pages, Read);
  myLibrary.push(book);
  displayBooksOnPage();
}

//Displaying the books on the Page
function displayBooksOnPage() {
  //Remove all previously displayed cards before I loop over array again
  const cards = document.querySelectorAll(".card");

  for (let i = 0; i < cards.length; i++) {
    cards[i].remove();
  }

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");
    booksGrid.appendChild(card);

    //Create remove Button
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-book-button");
    removeButton.textContent = "Remove From Library";

    //Link the data of the button to the array
    let arrayIndex = 0;
    removeButton.dataset.linkedArray = arrayIndex;
    card.appendChild(removeButton);

    //Make the remove button work
    removeButton.addEventListener("click", function () {
      let retrieveBookToRemove = removeButton.dataset.linkedArray;

      myLibrary.splice(parseInt(retrieveBookToRemove), 1);
      card.remove();
      displayBooksOnPage();
    });

    for (let key in book) {
      const para = document.createElement("p");
      para.textContent = `${key}: ${book[key]}`;
      card.appendChild(para);
    }

    //Create change read status Button
    const readButton = document.createElement("button");
    readButton.classList.add("read-button");

    if (book.Read === "yes") {
      readButton.textContent = "Read";
      readButton.style.background = "#9fff9c";
    }

    if (book.Read === "no") {
      readButton.textContent = "Not Read";
      readButton.style.background = "#ff9c9c";
    }

    card.appendChild(readButton);

    //Make the remove button work
    readButton.addEventListener("click", function () {
      if (readButton.textContent === "Read") {
        readButton.textContent = "Not Read";
        readButton.style.background = "#ff9c9c";
      } else {
        readButton.textContent = "Read";
        readButton.style.background = "#9fff9c";
      }
    });
  });
}

//Submit book handler
const formBtn = document.querySelector(".modal-button");
formBtn.addEventListener("click", modalInfo);

//Taking the data from the MODAL
function modalInfo() {
  let Title = document.getElementById("title").value;
  let Author = document.getElementById("author").value;
  let Pages = document.getElementById("pages").value;
  let Read = document.getElementById("read").value;

  //Break if form is incompleted or invalid
  if (Title == "" || Author == "" || Pages == "" || Read == "") {
    return;
  }

  //Call function to input the book data to array
  addBookToLibrary(Title, Author, Pages, Read);

  //Reset the form
  document.querySelector(".modal-form").reset();

  //Close the modal
  modal.style.display = "none";
}
