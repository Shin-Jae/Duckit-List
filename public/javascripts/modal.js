// container for modal
const modal = document.querySelector(".modal");

// "MODAL" button on viewlist.pug
document.querySelector("#render-modal").addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});

// "x" button to close modal
document.querySelector(".close-button").addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});

// click anywhere "outside the modal"
window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.classList.toggle("show-modal");
    }
});
