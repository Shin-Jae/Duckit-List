
const listsBtn = document.querySelector(".currentList");
const incompleteBtn = document.querySelector(".incomplete");
const completeBtn = document.querySelector(".complete");
const listsTable = document.querySelector(".listsTable");
const completeTable = document.querySelector(".completeTable");
const incompleteTable = document.querySelector(".incompleteTable");

listsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    listsTable.style.display = "flex";
    completeTable.style.display = "none";
    incompleteTable.style.display = "none";
});

incompleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    listsTable.style.display = "none";
    completeTable.style.display = "none";
    incompleteTable.style.display = "flex";
});

completeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    listsTable.style.display = "none";
    completeTable.style.display = "flex";
    incompleteTable.style.display = "none";
});
