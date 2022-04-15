const demoBtn = document.getElementById('demo-user-btn')

demoBtn.addEventListener('click', () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const loginForm = document.getElementById('demoLoginForm');

    loginForm.style.visibility = 'hidden'
    email.value = 'demo@user.com'
    password.value = 'DemoU$er1'
})
