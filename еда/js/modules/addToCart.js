let cartBody = document.querySelector('.modal-cart-div')
const priceAll = document.querySelector('.modal-pricetag')

import { getPrice } from "./getPrice.js"

export function addToCart (arr) {

    document.querySelectorAll('.food-row').forEach((el) => {el.remove()})

    for (let i = 0; i < arr.length; i++) {
        let divFood = document.createElement('div')
        divFood.classList.add('food-row')

        let foodName = document.createElement('span')
        foodName.classList.add('food-name')
        foodName.textContent = arr[i].name

        let price = document.createElement('strong')
        price.classList.add('food-price')
        price.textContent = arr[i].price + ' ' + '₽'

        let counter = document.createElement('div')
        counter.classList.add('food-counter')

        let btnMin = document.createElement('button')
        btnMin.classList.add('counter-button')
        btnMin.textContent = '-'
        btnMin.addEventListener('click', () => {
            if (arr[i].count > 1) {
                arr[i].count--
                arr[i].price = arr[i].price - (arr[i].price/(arr[i].count + 1))
                localStorage.setItem('cart', JSON.stringify(arr))
                addToCart(arr)
                priceAll.textContent = getPrice(arr) + ' ' + '₽'
                localStorage.setItem('sum', priceAll.textContent)
            } else {
                if (confirm('Удалить позицию?')) {
                    arr.splice(i, 1)
                    addToCart(arr)
                    priceAll.textContent = getPrice(arr) + ' ' + '₽'
                    localStorage.setItem('sum', priceAll.textContent)
                }
            }
        })

        let count = document.createElement('span')
        count.classList.add('counter')
        count.textContent = arr[i].count

        let btnPlus = document.createElement('button')
        btnPlus.classList.add('counter-button')
        btnPlus.textContent = '+'
        btnPlus.addEventListener('click', () => {
            arr[i].count++
            arr[i].price = arr[i].price + (arr[i].price/(arr[i].count - 1))
            localStorage.setItem('cart', JSON.stringify(arr))
            addToCart(arr)
            priceAll.textContent = getPrice(arr) + ' ' + '₽'
            localStorage.setItem('sum', priceAll.textContent)
        })

        counter.append(btnMin, count, btnPlus)
        divFood.append(foodName, price, counter)
        cartBody.append(divFood)
    }
}