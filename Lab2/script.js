function startTask2() {
    let radiusStr = prompt("Введите радиус круга (см):", "10");

    if (radiusStr === null) 
        {
        alert("Ввод отменён");
        return;
    }

    let radius = Number(radiusStr);
    if (isNaN(radius) || radius <= 0) {
        alert("Нужно ввести положительное число!");
        return;
    }

    let area = Math.PI * radius * radius;
    alert(`Радиус: ${radius} см\nПлощадь круга: ${area} см²`);
}