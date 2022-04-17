const listBtn = document.querySelector(".list-title");
const incompleteBtn = document.querySelector(".incomplete-title");
const completedBtn = document.querySelector(".completed-title");
const listSubContainer = document.querySelector(".list-sub-container");
const incompleteSubContainer = document.querySelector(
    ".incomplete-sub-container"
);
const completedSubContainer = document.querySelector(
    ".completed-sub-container"
);

document.querySelectorAll("h1.tab").forEach((ele) => {
    ele.addEventListener("click", (event) => {
        ele.classList.add("clicked");
        if (ele.classList.contains("list-title")) {
            incompleteBtn.classList.remove("clicked");
            completedBtn.classList.remove("clicked");
            listSubContainer.classList.remove("hide");
            incompleteSubContainer.classList.add("hide");
            completedSubContainer.classList.add("hide");
        }
        if (ele.classList.contains("incomplete-title")) {
            listBtn.classList.remove("clicked");
            completedBtn.classList.remove("clicked");
            listSubContainer.classList.add("hide");
            incompleteSubContainer.classList.remove("hide");
            completedSubContainer.classList.add("hide");
        }
        if (ele.classList.contains("completed-title")) {
            incompleteBtn.classList.remove("clicked");
            listBtn.classList.remove("clicked");
            listSubContainer.classList.add("hide");
            incompleteSubContainer.classList.add("hide");
            completedSubContainer.classList.remove("hide");
        }
    });
});


// listsBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     listsTable.style.display = "flex";
//     completeTable.style.display = "none";
//     incompleteTable.style.display = "none";
    //listsTable.classList.add("show");
    //completeTable.classList.add("show");
    //incompleteTable.classList.add("show");
    //listsTable.classList.remove("hidden");
    //completeTable.classList.remove("hidden");
    //incompleteTable.classList.remove("hidden");
// });

// incompleteBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     listsTable.style.display = "none";
//     completeTable.style.display = "none";
//     incompleteTable.style.display = "flex";
// });

// completeBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     listsTable.style.display = "none";
//     completeTable.style.display = "flex";
//     incompleteTable.style.display = "none";
// });

// const listNames = document.querySelectorAll(".list-names")

// listNames.forEach(list => {
//     const listId = list.id.split("-")[0];
    // select div to hide all other lists,
    // const listDiv = document.getElementById(`container-${listId}`)
    // event listener below will show current
    // listDiv.style.display = "none";

    // list.addEventListener("click", e => {
    //     const listId = e.target.id.split("-")[0];
    //     const listDiv = document.getElementById(`container-${listId}`)
    //     if (listDiv.clicked) {
    //         listDiv.style.display = 'none';
    //         listDiv.clicked = false;
    //     } else {
    //         listDiv.style.display = "flex";
    //         listDiv.clicked = true;
    //     }
        //clickedList.classList.remove("hidden");
        //clickedList.classList.add("show");
//         console.log(`Currently viewing List: ${listId}`)

//     });

// })
