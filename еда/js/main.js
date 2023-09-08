import { log } from "./modules/log.js";
import { out } from "./modules/out.js";
import { renderingFood } from "./modules/renderingFood.js";
import { renderingPartner } from "./modules/renderingPartner.js";
import { addToCart } from "./modules/addToCart.js";


const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const buttonClosed = document.querySelector(".close-auth")
const logInform = document.getElementById("logInForm")
const buttonOut = document.querySelector('.button-out')
const buttonCart = document.querySelector('.button-cart')
const userName = document.querySelector('.user-name')
const modalCart = document.querySelector('.modal-cart')
const closeCart = document.querySelector('.close')
const order = document.querySelector('.button-order')
const priceAll = document.querySelector('.modal-pricetag')

if (JSON.parse(localStorage.getItem('login')) == true) {
    
    buttonAuth.style.display = 'none'
    buttonOut.style.display = 'flex'
    buttonCart.style.display = 'flex'
    userName.style.display = 'flex'

    userName.textContent = JSON.parse(localStorage.getItem('user')).login
}

buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = "flex"
})

buttonClosed.addEventListener('click', () => {
    modalAuth.style.display = "none"
})

logInform.addEventListener('submit', (e) => {
    log(e)
})

buttonOut.addEventListener('click', () => {
    out()
})

if (window.location.pathname == '/index.html') {
    renderingPartner()

    if (localStorage.getItem('cart')) {
        addToCart(JSON.parse(localStorage.getItem('cart')))
    }

    const input = document.querySelector('.input-search')

    input.addEventListener('input', () => {
        
        const search = input.value.toLowerCase()
        const titles = document.querySelectorAll('.card-title')

        console.log(search);

        titles.forEach((el) => {
            let txt = el.textContent.toLowerCase()

            if (search && txt.indexOf(search) === -1) {
                el.parentNode.parentNode.parentNode.style.display = "none"
            } else {
                el.parentNode.parentNode.parentNode.style.display = "block"
            }
        })
    })
} else if (window.location.pathname == '/restaurant.html') {
    renderingFood(JSON.parse(localStorage.getItem('rest')).products)

    if (localStorage.getItem('cart')) {
        addToCart(JSON.parse(localStorage.getItem('cart')))
    }
}

buttonCart.addEventListener('click', () => {
    modalCart.style.display = 'flex'  

    closeCart.addEventListener('click', () => {modalCart.style.display = 'none'})

    order.addEventListener('click', () => {
        if (confirm('Оформить заказ?')) {
            localStorage.removeItem('cart')
            document.querySelectorAll('.food-row').forEach((el) => {el.remove()})

            priceAll.textContent = 0 + ' ' + '₽'

            localStorage.setItem('sum', priceAll.textContent)
        } 
    })
})

window.addEventListener('DOMContentLoaded', () => {
    priceAll.textContent = localStorage.getItem('sum')
})