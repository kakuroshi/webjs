const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const inputLogin = document.getElementById("login")
const inputPassword = document.getElementById("password")
const buttonOut = document.querySelector('.button-out')
const buttonCart = document.querySelector('.button-cart')
const userName = document.querySelector('.user-name')

export function log (e) {
    e.preventDefault()

    if (inputLogin.value.trim() == '' || inputPassword.value.trim() == '') {
        alert('Пустое поле!!!')
        inputLogin.value = ''
        inputPassword.value = ''
    } else if (inputLogin.value.length > 16 || inputLogin.value.length < 4) {
        alert('Неверная длина логина')
        inputLogin.value = ''
        inputPassword.value = ''
    } else {
        let user = {
        login: inputLogin.value,
        password: inputPassword.value
        }

        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('login', true)

        modalAuth.style.display = "none"
        
        inputLogin.value = ''
        inputPassword.value = ''

        buttonAuth.style.display = 'none'
        buttonOut.style.display = 'flex'
        buttonCart.style.display = 'flex'
        userName.style.display = 'flex'

        userName.textContent = user.login
    }
}
