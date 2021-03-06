const editButtons = document.querySelectorAll('.task-edit-btn');
const formDescriptionTag = document.querySelector('#edit-task-description');
const formTag = document.querySelector('#edit-task-form');
const csrfTag = formTag.querySelector('.csrf-token');
const descriptionTag = formTag.querySelector('.task-description');
const timeframeTag = formTag.querySelector('.task-timeframe');
const costTag = formTag.querySelector('.task-cost');
const imageTag = formTag.querySelector('.task-image');
const prompt = document.querySelector('.user-prompt');
const taskDel = document.querySelector('.task-delete-modal')
const listDelete = document.querySelectorAll('.list-delete-btn');
const taskDelete = document.querySelectorAll('.task-delete-btn');
const completedTag = formTag.querySelector('.task-completed');
const taskIdTag = formTag.querySelector('.task-id');
const listEditBtns = document.querySelectorAll('button.list-edit-btn');
const editListForm = document.querySelector('.edit-listname');

//edit list name
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

//delete a list
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
        document.querySelectorAll(`.list-id-${listId}.listContainer`).forEach((e) => {
            e.remove()
        })
    }
})

prompt.querySelector('.user-prompt-no').addEventListener('click', async (e) => {
    document.querySelector('.container-edit-form').classList.remove('hide');
    prompt.classList.add('hide');
    document.querySelector('.modal').classList.toggle('show-modal');
})

//delete a task
taskDelete.forEach((delBtn) => {
    delBtn.addEventListener('click', (e) => {
        document.querySelector('.container-edit-form').classList.toggle('hide');
        taskDel.classList.toggle('hide');
        document.querySelector('.modal').classList.toggle('show-modal');
        const taskId = e.target.id.split('-')[3];
        taskDel.querySelector('.task-id-delete').value = taskId;
    });
});

taskDel.querySelector('.delete-task-yes').addEventListener('click', async (e) => {
    const taskId = taskDel.querySelector('.task-id-delete').value;

    const response = await fetch(`/tasks/${taskId}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        document.querySelector('.modal').classList.toggle('show-modal');
        document.querySelector('.container-edit-form').classList.toggle('hide');
        taskDel.classList.toggle('hide');
        document.querySelector(`#task-container-${taskId}`).remove();
    }
})

taskDel.querySelector('.delete-task-no').addEventListener('click', async (e) => {
    document.querySelector('.container-edit-form').classList.remove('hide');
    taskDel.classList.add('hide');
    document.querySelector('.modal').classList.toggle('show-modal');
})

//edit a task
const showEdit = async (e) => {
    document.querySelector('.errors-container').innerHTML = null;
    document.querySelector('.modal').classList.toggle('show-modal');
    const taskId = e.target.id.split('id:')[1]
    const response = await fetch(`/tasks/edit/${taskId}`);
    const data = await response.json();
    const taskTimeframe = new Date(data.task.timeframe);
    let stringDate = String(taskTimeframe.getDate());
    stringDate = stringDate.length === 1 ? '0' + stringDate : stringDate;
    let stringMonth = String(taskTimeframe.getMonth() + 1);
    stringMonth = stringMonth.length === 1 ? '0' + stringMonth : stringMonth;
    let stringYear = String(taskTimeframe.getFullYear());


    formDescriptionTag.innerText = data.task.description;
    csrfTag.value = data.csrfToken;
    taskIdTag.value = data.task.id;

    descriptionTag.value = data.task.description;
    timeframeTag.value = `${stringYear}-${stringMonth}-${stringDate}`;
    costTag.value = data.task.cost;
    imageTag.value = data.task.image;

    completedTag.checked = data.task.completed;

}

editButtons.forEach((editBtn) => {
    editBtn.addEventListener('click', showEdit)
});

formTag.addEventListener('submit', async (e) => {
    e.preventDefault();

    const _csrf = csrfTag.value;
    const description = descriptionTag.value;
    const timeframe = timeframeTag.value;
    const cost = costTag.value;
    const image = imageTag.value;
    const completed = completedTag.checked;

    const taskId = taskIdTag.value;
    const data = {
        _csrf,
        description,
        timeframe,
        cost,
        image,
        completed
    }

    const response = await fetch(`/tasks/edit/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const dataRes = await response.json()
    const taskContainer = document.querySelector(`#task-container-${taskId}`)
    if (!dataRes.errors) {
        formDescriptionTag.innerText = description;
        document.querySelector('.modal').classList.toggle('show-modal');
        taskContainer.querySelector(`.task-description-${taskId}`).innerText = description;

        const clone = taskContainer.parentElement.cloneNode(true);

        clone.querySelector('.task-edit-btn').addEventListener('click', showEdit);
        const listId = dataRes.task.listId;

        if (completedTag.checked && taskContainer.parentElement.classList.contains('currentIncompleteContainer')) {
            const completedSubContainer = document.querySelector(`.completed-sub-container > div.list-id-${listId}`);
            completedSubContainer.appendChild(clone);
            taskContainer.parentElement.remove();
        } else if (!completedTag.checked && taskContainer.parentElement.classList.contains('currentCompleteContainer')) {
            const incompleteSubContainer = document.querySelector(`.incomplete-sub-container > div.list-id-${listId}`);
            incompleteSubContainer.appendChild(clone);
            taskContainer.parentElement.remove();

        }
    } else {
        const errorDescription = document.createElement('p')
        const errorContainer = document.createElement('ul')
        dataRes.errors.forEach((error) => {
            const liError = document.createElement('li')
            liError.innerText = error;
            errorContainer.appendChild(liError);
        })

        document.querySelector('.errors-container').appendChild(errorDescription);
        document.querySelector('.errors-container').appendChild(errorContainer);
    }
});
