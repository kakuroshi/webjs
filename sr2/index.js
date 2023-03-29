// // Задание 1
const userLogin = prompt("Введите логин");
const userPassword = prompt("Введите пароль");
let coincidences = 0

const users = [
	{ name: "Элина", login: "Elli323", password: "ShuklinFamily" },
	{ name: "Сергей", login: "323", password: "323" },
	{ name: "Данила", login: "Vilson1Love", password: "ClayBi13" },
];

for (let i = 0; i < users.length; i++) {
    if (users[i].login == userLogin && users[i].password == userPassword){
        alert(`Здравствуйте, ${users[i].name}.`)
        coincidences += 1
    }
}
coincidences === 0 ? alert('Ошибка авторизации.') : null;

// Задание 2
const num = Math.floor(Math.random() * (10 - 1) + 1)
console.log(num);

function guessNum() {
    for (let i = 1; i > 0; i++) {
        let numInp = prompt('Введите число:')
        if (numInp === null) {
            break;
        } else if (!parseInt(numInp)) {
            alert('Введи число!')
        } else if (numInp < num) {
            alert('Больше!')  
        } else if (numInp > num) {
            alert('Меньше!')
        } else if (numInp == num) {
            alert('Правильно!')
            break;
        }
    }
}

guessNum()