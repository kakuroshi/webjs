const modalAuth = document.querySelector(".modal-auth");
const buttonAuth = document.querySelector(".button-auth");
const buttonOut = document.querySelector('.button-out')
const buttonCart = document.querySelector('.button-cart')
const userName = document.querySelector('.user-name')

export function out () {
    modalAuth.style.display = "none"

    localStorage.removeItem('user')
    localStorage.setItem('login', false)

    buttonAuth.style.display = 'flex'
    buttonOut.style.display = 'none'
    buttonCart.style.display = 'none'
    userName.style.display = 'none'

    userName.textContent = ''
}