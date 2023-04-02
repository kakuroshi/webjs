// Задание 1
// let btn = document.querySelector('.btn')
// let inp = document.querySelector('.input')
// let timer = document.querySelector('.time')
// let time = 0;

// btn.addEventListener('click', () => {
//     if (inp.value > 0) {
//         function startTimer() {
//             timer.textContent -= 1
//             timer.textContent <= 0 ? time = clearInterval(time) : null
//         }
//         timer.textContent = inp.value
//         time = setInterval(startTimer, 1000);
//     } else {
//         time = clearInterval(time)
//         alert('Введите число больше 0!')
//     }
// })

// Задание 2
// let timer = 0

// function fillH2() {
//     document.querySelector('.text').textContent = document.querySelector('.input').value
// }

// document.querySelector('.input').addEventListener('keyup', () => {
//     clearTimeout(timer)

//     timer = setTimeout(fillH2, 300)
// })