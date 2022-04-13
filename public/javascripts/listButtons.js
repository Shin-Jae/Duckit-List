// Delete buttons
const deleteButtons = document.querySelectorAll('.delete-btn');

for (let i = 0; i < deleteButtons.length; i++) {
  const btn = deleteButtons[i];
  btn.addEventListener('click', async(e) => {
    console.log(e.target.id);
    const listId = e.target.id.split('-')[2];
    const res = await fetch(`/lists/${listId}`, {
      method: 'DELETE'
    })

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

for (let i = 0; i < editButtons.length; i++) {
    const btn = editButtons[i];
    btn.addEventListener('click', (e) => {
        const listId = e.target.id.split('-')[2]
        console.log("**************", listId, "*******")
        const form = document.getElementById(`edit-list-${listId}`)
        /*
        if (form.classList.contains('hidden')) {
            form.classList.remove('hidden')
        } else {
            form.classList.add('hidden')
        }*/

        const submitBtn = document.getElementById(`edit-submit-${listId}`)
        submitBtn.addEventListener('click', async(submitEvent) => {
            submitEvent.preventDefault()
            const name = document.getElementById(`list-name-${listId}`).value

            const res = await fetch(`/lists/${listId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    listId
                })
            })

            const data = await res.json()
            if (data.message === 'Success') {
                // console.log(data)
                const nameEle = document.getElementById(`${listId}-name`)
                nameEle.innerHTML = data.list.name
                form.classList.add('hidden')
            } else {
                // create elements with error message
            }
        })

    })
}
