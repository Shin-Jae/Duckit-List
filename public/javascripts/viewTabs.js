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
