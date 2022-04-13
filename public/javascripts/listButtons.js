const deleteButtons = document.querySelectorAll('.delete-btn');

deleteButtons.forEach(button => {
  button.addEventListener('click', async(e) => {
    console.log(e.target.id);
    const listId = e.target.id.split('-')[2];
    console.log(listId)
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
})
