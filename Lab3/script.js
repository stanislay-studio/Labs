
let a = Math.floor(Math.random() * 10) + 1;
let b = Math.floor(Math.random() * 10) + 1;

let userAnswer = prompt(`Сколько будет ${a} × ${b}?`);

let task1Div = document.getElementById("task1");


if (userAnswer === null || userAnswer.trim() === "" || isNaN(userAnswer)) {
    task1Div.innerHTML = "<p>Вы не знаете цифры.</p>";
} else {
    userAnswer = Number(userAnswer);

    if (userAnswer === a * b) {
        task1Div.innerHTML = "<p>Вы знаете арифметику.</p>";
    } else {
        task1Div.innerHTML = "<p>Вы не знаете арифметику.</p>";
    }
}



let count = prompt("Введите количество учащихся:");

let task2Div = document.getElementById("task2");

if (count === null || count.trim() === "" || isNaN(count)) {
    task2Div.innerHTML = "<p>Ошибка: введено не число.</p>";
} else {
    count = Number(count);
    let students = [];
    for (let i = 0; i < count; i++) {
        let name = prompt(`Введите фамилию и имя учащегося №${i + 1}:`);
        students.push(name);
    }

    task2Div.innerHTML = "<h3>Список учащихся:</h3>";

    for (let student of students) {
        task2Div.innerHTML += student + "<br>";
    }
}