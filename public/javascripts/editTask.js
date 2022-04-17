const editButtons = document.querySelectorAll('.task-edit-btn');
const formDescriptionTag = document.querySelector('#edit-task-description');
const formTag = document.querySelector('#edit-task-form');
const csrfTag = formTag.querySelector('.csrf-token');
const descriptionTag = formTag.querySelector('.task-description');
const timeframeTag = formTag.querySelector('.task-timeframe');
const costTag = formTag.querySelector('.task-cost');
const imageTag = formTag.querySelector('.task-image');
const completedTag = formTag.querySelector('.task-completed');
const taskIdTag = formTag.querySelector('.task-id');

const showEdit = async (e) => {
    document.querySelector('.errors-container').innerHTML = null;
    document.querySelector('.modal').classList.add('show-modal');
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
    console.log('---------', completedTag, completedTag.checked)
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
        document.querySelector('.modal').classList.remove('show-modal');


        taskContainer.querySelector(`.task-description-${taskId}`).innerText = description;

        const clone = taskContainer.cloneNode(true);

        clone.querySelector('.task-edit-btn').addEventListener('click', showEdit);
        if (completedTag.checked && taskContainer.parentElement.classList.contains('currentIncompleteContainer')) {
            document.querySelector('div.currentCompleteContainer').appendChild(clone);
            taskContainer.remove();
        } else if (!completedTag.checked && taskContainer.parentElement.classList.contains('currentCompleteContainer')) {
            document.querySelector('div.currentIncompleteContainer').appendChild(clone);
            taskContainer.remove();
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
