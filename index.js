const addBookButton = document.querySelector(".add-book-btn");
const modal = document.querySelector(".modal-container");

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
