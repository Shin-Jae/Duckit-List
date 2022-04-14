const deleteButtons = document.querySelectorAll('.task-delete-btn')

for (let i = 0; i < deleteButtons.length; i++) {
    const button = deleteButtons[i]
    button.addEventListener('click', async(e) => {
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
submitBtn.addEventListener('click', async(submitEvent) => {
    const taskId = submitEvent.target.id.split('-')[2];
    console.log(taskId)
    submitEvent.preventDefault()
    const description = document.getElementById(`task-description-${taskId}`).value;

    const res = await fetch(`/tasks/edit/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            description,
            taskId
        })
    })

    const data = await res.json()
    if (data.message === 'Task successfully updated') {
        const descEle = document.getElementById(`${taskId}-desc`)
        descEle.innerHTML = data.task.description
        // form.classList.add('hidden')
      } else {
        // create elements with error message
      }
})
