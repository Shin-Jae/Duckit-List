// Delete buttons
const deleteButtons = document.querySelectorAll('.delete-btn');

for (let i = 0; i < deleteButtons.length; i++) {
  const btn = deleteButtons[i];
  btn.addEventListener('click', async(e) => {
    console.log(e.target.id);
    const listId = e.target.id.split('-')[2];
    const res = await fetch(`/lists/${listId}`, {
      method: 'DELETE',
      // headers: { 'Content-Type': 'application/json' },
    })
    console.log(res)

    const data = await res.json();
    console.log(data);
    if (data.message === 'Success') {
      const container = document.getElementById(`container-${listId}`);
      container.remove()
    }
  })
}


// Edit buttons
const editButtons = document.querySelectorAll('.edit-btn');

const submitBtn = document.querySelector(`.submit-btn`)
submitBtn.addEventListener('click', async(submitEvent) => {
  const listId = submitEvent.target.id.split('-')[2]
  submitEvent.preventDefault()
  const name = document.getElementById(`list-name-${listId}`).value

  const res = await fetch(`/lists/edit/${listId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      listId
    })
  })

  const data = await res.json()
  if (data.message === 'Success') {
    const nameEle = document.getElementById(`${listId}-name`)
    nameEle.innerHTML = data.list.name
    form.classList.add('hidden')
  } else {
    // create elements with error message
  }
})

// Checkbox (move to taskButtons.js when complete)
const checkbox = document.querySelectorAll('.checkbox');

checkbox.addEventListener('change', e => {
  const taskId = e.target.id.split('-')[1];
  const listId = e.target.id.split('-')[2];

  const res = await fetch(`/lists/${listId}/${taskId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      listId,
      taskId
    })
  })



})
