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
        }
    })
}


const editButtons = document.querySelectorAll('.task-edit-btn')
const submitBtn = document.querySelector('.tasksubmit-btn')
submitBtn.addEventListener('click', async (submitEvent) => {
    const taskId = submitEvent.target.id.split('-')[2];
    console.log('+++++this is the taskId ++++', taskId)
    submitEvent.preventDefault()
    const description = document.getElementById(`task-description-${taskId}`).value;
    const timeframe = document.getElementById(`task-timeframe-${taskId}`).value;
    const cost = document.getElementById(`task-cost-${taskId}`).value;
    const image = document.getElementById(`task-image-${taskId}`).value;
    // const category = document.getElementById(`task-category-${taskId}`).value;
    const _csrf = document.getElementById('csrf-token').value;
    const res = await fetch(`/tasks/edit/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            description,
            taskId,
            timeframe,
            cost,
            image,
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
