const deleteButtons = document.querySelectorAll('.task-delete-btn')
const editButtons = document.querySelectorAll('.task-edit-btn')


for (let i = 0; i < deleteButtons.length; i++) {
    const button = deleteButtons[i]
    button.addEventListener('click', async (e) => {
        const taskId = e.target.id.split('-')[3];
        console.log("********************************")
        const res = await fetch(`/tasks/${taskId}`, {
            method: 'DELETE',
        })

        const data = await res.json();
        if (data.message === 'Task successfully deleted') {
            const container = document.getElementById(`task-container-${taskId}`);
            container.remove()
            location.reload();
        }
    })
}

editButtons.forEach(editBtn => {
    editBtn.addEventListener('click', async (e) => {
        document.querySelector('.modal').classList.toggle('show-modal')
        const taskId = e.target.id.split('id:')[1]
        const response = await fetch(`/tasks/edit/${taskId}`)
        const data = await response.json()
        console.log(data)
        document.querySelector('#edit-task-form').setAttribute('action', `/tasks/edit/${taskId}`)
        document.querySelector('#edit-task-description').innerText = `taskId ${taskId}`
        document.querySelector('#edit-task-form > .csrf-token').value = data.csrfToken
        document.querySelector('#edit-task-form > .task-description').value = data.task.description
        document.querySelector('#edit-task-form > .tasksubmit-btn').value = data.task.description

    })
})

const submitBtn = document.querySelector('.tasksubmit-btn')
submitBtn.addEventListener('click', async (submitEvent) => {
    const taskId = submitEvent.target.id.split('-')[2];
    submitEvent.preventDefault()
    const description = document.getElementById(`task-description-${taskId}`).value;
    const timeframe = document.getElementById(`task-timeframe-${taskId}`).value;
    const cost = document.getElementById(`task-cost-${taskId}`).value;
    const image = document.getElementById(`task-image-${taskId}`).value;
    // const category = document.getElementById(`task-category-${taskId}`).value;
    const _csrf = document.getElementById('csrf-token').value;
    const completed = document.getElementById(`task-completed-${taskId}`).value;
    const res = await fetch(`/tasks/edit/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            description,
            taskId,
            timeframe,
            cost,
            image,
            completed,
            _csrf,
            // category
        })
    })

    const data = await res.json()
    console.log('------data from fetch----', data);
    if (data.message === 'Task successfully updated') {
        const descEle = document.getElementById(`${taskId}-desc`)
        descEle.innerHTML = data.task.description
        // form.classList.add('hidden')
    } else {
        // create elements with error message
        const mesErr = document.getElementById('task-errors')
        mesErr.innerHTML = data.errors[0];
        console.log(data.errors);
    }
})

//Checkbox(move to taskButtons.js when complete)
// const checkbox = document.querySelectorAll('.checkbox');

// checkbox.addEventListener('change', e => {
//     const taskId = e.target.id.split('-')[1];
//     const listId = e.target.id.split('-')[2];

//     const res = await fetch(`/lists/${listId}/${taskId}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             listId,
//             taskId
//         })
//     })



// })

const deleteButtons = document.querySelectorAll('.task-delete-btn')

for (let i = 0; i < deleteButtons.length; i++) {
    const button = deleteButtons[i]
    button.addEventListener('click', async (e) => {
        const taskId = e.target.id.split('-')[3];
        console.log("********************************")
        const res = await fetch(`/tasks/${taskId}`, {
            method: 'DELETE',
        })

        const data = await res.json();
        if (data.message === 'Task successfully deleted') {
            const container = document.getElementById(`task-container-${taskId}`);
            container.remove()
            location.reload();
        }
    })
}

// const submitBtn = document.querySelector('.tasksubmit-btn')
// submitBtn.addEventListener('click', async (submitEvent) => {
//     const taskId = submitEvent.target.id.split('-')[2];
//     submitEvent.preventDefault()
//     const description = document.getElementById(`task-description-${taskId}`).value;
//     const timeframe = document.getElementById(`task-timeframe-${taskId}`).value;
//     const cost = document.getElementById(`task-cost-${taskId}`).value;
//     const image = document.getElementById(`task-image-${taskId}`).value;
//     // const category = document.getElementById(`task-category-${taskId}`).value;
//     const _csrf = document.getElementById('csrf-token').value;
//     const completed = document.getElementById(`task-completed-${taskId}`).value;
//     const res = await fetch(`/tasks/edit/${taskId}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             description,
//             taskId,
//             timeframe,
//             cost,
//             image,
//             completed,
//             _csrf,
//             // category
//         })
//     })

//     const data = await res.json()
//     console.log('------data from fetch----', data);
//     if (data.message === 'Task successfully updated') {
//         const descEle = document.getElementById(`${taskId}-desc`)
//         descEle.innerHTML = data.task.description
//         // form.classList.add('hidden')
//     } else {
//         // create elements with error message
//         const mesErr = document.getElementById('task-errors')
//         mesErr.innerHTML = data.errors[0];
//         console.log(data.errors);
//     }
// })

//Checkbox(move to taskButtons.js when complete)
// const checkbox = document.querySelectorAll('.checkbox');

// checkbox.addEventListener('change', e => {
//     const taskId = e.target.id.split('-')[1];
//     const listId = e.target.id.split('-')[2];

//     const res = await fetch(`/lists/${listId}/${taskId}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             listId,
//             taskId
//         })
//     })



// })
