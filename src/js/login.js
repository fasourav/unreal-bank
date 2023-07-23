document.getElementById('btnSubmit').addEventListener('click', () => {
    const getEmail = document.getElementById('loginEmail')
    const email = getEmail.value

    const getPass = document.getElementById('loginPass')
    const pass = getPass.value

    if (email === 'admin@admin.com' && pass === 'adminpass') {
        window.location.href = 'dashboard.html'
    } else {
        window.alert('Invalid Credentials')
    }
})
