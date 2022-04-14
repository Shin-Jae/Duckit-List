const deleteButtons = document.querySelectorAll('.task-delete-btn')

for (let i = 0; i < deleteButtons.length; i++) {
    const button = deleteButtons[i]
    button.addEventListener('click', async(e) => {
    const taskId = e.target.id.split('-')[3];
    console.log("********************************")
    const res = await fetch(`/tasks/test/${taskId}`, {
        method: 'DELETE',
     })

     const data = await res.json();
     if (data.message === 'Task successfully deleted') {
         const container = document.getElementById(`task-container-${taskId}`);
         container.remove()
     }
    })
}
