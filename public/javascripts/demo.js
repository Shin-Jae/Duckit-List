const demoBtn = document.getElementById('demo-user-btn')

demoBtn.addEventListener('click', async () => {
    console.log("=================")
    const res = await fetch('/users/login/demo', {
        method: 'POST',
    })
})
