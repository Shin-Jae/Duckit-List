const demoBtn = document.getElementById('demo-user-btn')

demoBtn.addEventListener('click', () => {
    const email = document.getElementById('emailInput');
    const hashedPassword = document.getElementById('hashedPassword');
    const loginForm = document.getElementById('loginForm');

    loginForm.style.visibility = 'hidden'
    email.value = 'demo@user.com'
    hashedPassword.value = 'DemoU$er1'
})
