import { addToCart } from "./addToCart.js"
import { getPrice } from "./getPrice.js"

const clearCart = document.querySelector('.clear-cart')
const priceAll = document.querySelector('.modal-pricetag')

export async function renderingFood (products) {

    let cartArr = []

    clearCart.addEventListener('click', () => {
        document.querySelectorAll('.food-row').forEach((el) => {el.remove()})

        localStorage.removeItem('cart')

        cartArr = []

        priceAll.textContent = '0 ₽'
        localStorage.setItem('sum', priceAll.textContent)
    })

    function addCart (card) { 
        if (cartArr.some((item) => item.id === card.id)){
            cartArr.map((item) => {
                if (item.id === card.id) {
                    item.count++
                    item.price = item.price + (item.price/(item.count - 1))
                    priceAll.textContent = getPrice(cartArr) + ' ' + '₽'
                    localStorage.setItem('sum', priceAll.textContent)
                }
                return item
            })
        } else {
            cartArr.push(card)
        }
        localStorage.setItem('cart', JSON.stringify(cartArr))
        addToCart(cartArr)
        console.log(getPrice(cartArr));
        priceAll.textContent = getPrice(cartArr) + ' ' + '₽'
        localStorage.setItem('sum', priceAll.textContent)
    }

    const renderFood = fetch(`./db/${products}`)
        .then((Response) => Response.json())
        .then((data) => {

        let lsRest = JSON.parse(localStorage.getItem('rest'))

        let headName = document.createElement('h2')
        headName.classList.add('section-title', 'restaurant-title')
        headName.textContent = lsRest.name

        let cardInf = document.createElement('div')
        cardInf.classList.add('card-info')

        let rating = document.createElement('div')
        rating.classList.add('rating')
        rating.textContent = lsRest.rating

        let price = document.createElement('div')
        price.classList.add('price')
        price.textContent = lsRest.price

        let categ = document.createElement('div')
        categ.classList.add('price')
        categ.textContent = lsRest.kitchen

        cardInf.append(rating, price, categ)
        document.querySelector('.section-heading').append(headName, cardInf)

        for (let i = 0; i < data.length; i++) {

            let div = document.createElement('div')
            div.classList.add('card')

            let img = document.createElement('img')
            img.classList.add('card-image')
            img.src = data[i].image

            let txtDiv = document.createElement('div')
            txtDiv.classList.add('card-text')

            let divHead = document.createElement('div')
            divHead.classList.add('card-heading')

            let headTxt = document.createElement('h3')
            headTxt.classList.add('card-title', 'card-title-reg')
            headTxt.textContent = data[i].name

            let divInfo = document.createElement('div')
            divInfo.classList.add('card-info')

            let divIngredients = document.createElement('div')
            divIngredients.classList.add('ingredients')
            divIngredients.textContent = data[i].description

            let divButtons = document.createElement('div')
            divButtons.classList.add('card-buttons')

            let button = document.createElement('button')
            button.classList.add('button', 'button-primary', 'button-add-cart')
            button.addEventListener('click', (e) => {
                if (JSON.parse(localStorage.getItem('login')) == true) {
                    let card = {
                        name: data[i].name,
                        price: data[i].price,
                        id: data[i].id,
                        count: 1
                    }

                    addCart(card)
                } else {
                    alert ('Вы не вошли в аккаунт')
                }
            })
            
            let span = document.createElement('span')
            span.classList.add('button-card-text')
            span.textContent = "В корзину"

            let svg = document.createElement('span')
            svg.classList.add('button-cart-svg')

            let price = document.createElement('strong')
            price.classList.add('card-price-bold')
            price.textContent = data[i].price + ' ' + '₽'

            divHead.append(headTxt)
            divInfo.append(divIngredients)
            button.append(span, svg)
            divButtons.append(button, price)
            txtDiv.append(divHead, divInfo, divButtons)
            div.append(img, txtDiv)

            document.querySelector('.cards').append(div)
        }
    })
}