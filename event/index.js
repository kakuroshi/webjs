// // Задание 1
// document.querySelector('.btn').addEventListener('click', () => {alert('Привет, Мир!')})

// // Задание 2
// document.querySelector('.fill').addEventListener('click', () => {document.getElementById('inp').value = 'test@email.ru'})

// // Задание 3
// document.querySelector('.alertInp').addEventListener('click', () => {
//     document.getElementById('inpAlert').value !== "" ? alert(`Вы ввели ${document.getElementById('inpAlert').value}.`) : alert('Вы ничего не ввели в поле.')
// })

// // Задание 4
// document.querySelector('.reverb').addEventListener('click', () => {
//     let rev1 = document.getElementById('reverb1').value
//     document.getElementById('reverb1').value = document.getElementById('reverb2').value
//     document.getElementById('reverb2').value = rev1
// })

// // Задание 5
// document.querySelector('.lock').addEventListener('click', () => {document.getElementById('lockInp').setAttribute('disabled', 'true')})
// document.querySelector('.unlock').addEventListener('click', ()=> {document.getElementById('lockInp').removeAttribute('disabled')})

// // Задание 6
// let button = document.querySelector('.hideSquare')
// let square = document.querySelector('.square')

// button.addEventListener('click', () => {
//     if (button.innerHTML == 'Скрыть квадрат') {
//         square.style.display = 'none'
//         button.innerHTML ='Показать квадрат'
//     } else {
//         square.style.display = 'block'
//         button.innerHTML = 'Скрыть квадрат'
//     }
// })

// // Задание 7
// document.querySelector('.redSq').addEventListener('mouseover', () => {document.querySelector('.redSq').style.backgroundColor = 'green'})
// document.querySelector('.redSq').addEventListener('mouseout', () => {document.querySelector('.redSq').style.backgroundColor = 'red'})

// // Задание 8
let square = document.querySelectorAll('.square')

for (let i =0; i < square.length; i++) {
    square[i].addEventListener("click", () => {
        for (let i = 0; i < square.length; i++) {
            square[i].addEventListener("click", () => {
                square[i].style.backgroundColor = "green"
            })    
        }
            
        for (let i = 0; i < square.length; i++) {
                square[i].style.backgroundColor = "red"
            }
        })
    }        

// Задание 9
let eqBtn = document.querySelector('.equals')
let operationBtn = document.querySelectorAll('.operation')
let numBtn = document.querySelectorAll('.num')
let calculations = document.querySelector('.calc')
let clearBtn = document.querySelector('.clear')

eqBtn.addEventListener('click', () => {
    let equals = eval(calculations.value)
    calculations.value = equals
})

clearBtn.addEventListener('click', () => {
    calculations.value = ""
})

for (let i = 0; i < operationBtn.length; i++) {
    operationBtn[i].addEventListener('click', () => {
        calculations.value += operationBtn[i].innerHTML
    })
}

for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener('click', () => {
        calculations.value += numBtn[i].innerHTML
    })
}