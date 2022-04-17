const formTag = document.querySelector('#edit-task-form');
const csrfTag = formTag.querySelector('.csrf-token')
const listEditBtns = document.querySelectorAll('button.list-edit-btn');
const editListForm = document.querySelector('.edit-listname');
const prompt = document.querySelector('.user-prompt');
const listDelete = document.querySelectorAll('.list-delete-btn');

listEditBtns.forEach((listEditBtn) => {
    listEditBtn.addEventListener('click', (e) => {
        document.querySelector('.container-edit-form').classList.toggle('hide');
        editListForm.classList.toggle('hide');
        document.querySelector('.modal').classList.toggle('show-modal');
        const listId = e.target.id.split('-')[0];
        editListForm.querySelector('.list-id-edit').value = listId;

    })
})

editListForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const listId = e.target.querySelector('.list-id-edit').value;
    const newListName = editListForm.querySelector('.list-edit-name');

    const response = await fetch(`/lists/edit/${listId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newListName.value }),
    });
    const data = await response.json()
    if (!data.errors) {
        document.getElementById(`${listId}-name`).innerText = data.list.name;
        document.querySelector('.modal').classList.toggle('show-modal');
        document.querySelector('.container-edit-form').classList.toggle('hide');
        editListForm.classList.toggle('hide');
        newListName.value = '';

    } else {
        const eleErrors = document.createElement('ul');
        eleErrors.innerText = 'The following errors have occurred';
        data.errors.forEach((err) => {
            const elError = document.createElement('li');
            elError.innerText = err;
            eleErrors.appendChild(elError);
        });
        editListForm.querySelector('.errors-container').appendChild(eleErrors);
    }
})

listDelete.forEach((listDeleteBtn) => {
    listDeleteBtn.addEventListener('click', (e) => {
        document.querySelector('.container-edit-form').classList.toggle('hide');
        prompt.classList.toggle('hide');
        document.querySelector('.modal').classList.toggle('show-modal');
        const listId = e.target.id.split('-')[0];
        prompt.querySelector('.list-id-delete').value = listId;
    });
});

prompt.querySelector('.user-prompt-yes').addEventListener('click', async (e) => {
    const listId = prompt.querySelector('.list-id-delete').value

    const response = await fetch(`/lists/${listId}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        document.querySelector('.modal').classList.toggle('show-modal');
        document.querySelector('.container-edit-form').classList.toggle('hide');
        prompt.classList.toggle('hide');
        document.querySelector(`#label-container-${listId}`).remove();
        document.querySelector('.listContainer').remove();
    }
})

prompt.querySelector('.user-prompt-no').addEventListener('click', async (e) => {
    document.querySelector('.container-edit-form').classList.remove('hide');
    prompt.classList.add('hide');
    document.querySelector('.modal').classList.toggle('show-modal');
})
