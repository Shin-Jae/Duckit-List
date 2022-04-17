// container for modal
const modal = document.querySelector(".modal");
const prompt = document.querySelector('.user-prompt');
const editForm = document.querySelector('.container-edit-form');
const editListName = document.querySelector('.edit-listname');
// // "MODAL" button on viewlist.pug
// document.querySelector("#render-modal").addEventListener("click", e => {
//     modal.classList.toggle("show-modal");
// });

// "x" button to close modal
document.querySelector(".close-button").addEventListener("click", e => {
    modal.classList.toggle("show-modal");
    prompt.classList.add('hide');
    editForm.classList.remove('hide');
    editListName.classList.add('hide');
});

// click anywhere "outside the modal"
window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.classList.toggle("show-modal");
        prompt.classList.add('hide');
        editForm.classList.remove('hide');
        editListName.classList.add('hide');
    }
});
