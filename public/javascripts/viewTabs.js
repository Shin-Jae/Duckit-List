
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
    //listsTable.classList.add("show");
    //completeTable.classList.add("show");
    //incompleteTable.classList.add("show");
    //listsTable.classList.remove("hidden");
    //completeTable.classList.remove("hidden");
    //incompleteTable.classList.remove("hidden");
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

const listNames = document.querySelectorAll(".list-names")

listNames.forEach(list => {
    const listId = list.id.split("-")[0];
    // select div to hide all other lists,
    const listDiv = document.getElementById(`container-${listId}`)
    // event listener below will show current
    listDiv.style.display = "none";

    list.addEventListener("click", e => {
        const listId = e.target.id.split("-")[0];
        const listDiv = document.getElementById(`container-${listId}`)
        if (listDiv.clicked) {
            listDiv.style.display = 'none';
            listDiv.clicked = false;
        } else {
            listDiv.style.display = "flex";
            listDiv.clicked = true;
        }
        //clickedList.classList.remove("hidden");
        //clickedList.classList.add("show");
        console.log(`Currently viewing List: ${listId}`)

    });

})
