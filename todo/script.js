let userInput = document.querySelector('.event')
let addButton = document.querySelector('.add')
let eventList = document.querySelector('.events')

addButton.addEventListener('click', () => {
    //Создание элементов
    let addCont = document.createElement('div')
    let addBtnCont = document.createElement('div')
    let addText = document.createElement('p')
    let addBtnRdy = document.createElement('button')
    let addBtnDel = document.createElement('button')

    //Пустая строка ввода
    if (userInput.value.length == 0) {
        alert("Вы ничего не ввели.")
        return
    }

    //Добавление задачи
    eventList.append(addCont)
    addCont.append(addText.innerHTML = userInput.value)
    userInput.value = ""
    addCont.append(addBtnCont)
    addBtnCont.append(addBtnRdy)
    addBtnCont.append(addBtnDel)
    addCont.append(document.createElement('hr'))

    //Стиль
    //Кнопки
    addBtnRdy.style.backgroundColor = 'lightgreen'
    addBtnRdy.style.height = '3vh'
    addBtnRdy.style.width = '10%'
    addBtnRdy.style.borderRadius = '10px'
    addBtnRdy.style.fontSize = '15px'
    
    addBtnDel.style.backgroundColor = 'rgb(212, 83, 83)'
    addBtnDel.style.height = '3vh'
    addBtnDel.style.width = '15%'
    addBtnDel.style.borderRadius = '10px'
    addBtnDel.style.fontSize = '15px'
    
    //Контейнеры
    addCont.style.textAlign = 'center'
    addCont.style.backgroundColor = 'aqua'
    addCont.style.fontSize = "30px"
    addCont.style.wordBreak = "break-all"
    
    //Кнопка готово
    addBtnRdy.addEventListener('click', () => {
        if (addBtnRdy.textContent == "Готово") {
            addCont.style.backgroundColor = 'lightgreen'
            addBtnCont.style.backgroundColor = 'lightgreen'
            addBtnRdy.style.backgroundColor = 'grey'
            addBtnRdy.textContent = 'Не готово'
        } else {
            addCont.style.backgroundColor = 'aqua'
            addBtnCont.style.backgroundColor = 'aqua'
            addBtnRdy.style.backgroundColor = 'lightgreen'
            addBtnRdy.textContent = 'Готово'  
        }
    })

    //Удалить задачу
    addBtnDel.addEventListener('click', () => {
        let del = confirm('Вы действительно хотите удалить задачу?')
        del ? addCont.remove() : null
    })

    //Текст кнопок
    addBtnRdy.textContent = "Готово"
    addBtnDel.textContent = "Удалить задачу"
})

//Добавление задачи кнопкой "Enter"
userInput.addEventListener('keyup', (event) => {
    event.keyCode === 13 ? addButton.click() : null
})