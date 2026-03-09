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
function calcTriangleArea() {
    const x1 = Number(document.querySelector('#x1').value) || 0;
    const y1 = Number(document.querySelector('#y1').value) || 0;
    const x2 = Number(document.querySelector('#x2').value) || 0;
    const y2 = Number(document.querySelector('#y2').value) || 0;
    const x3 = Number(document.querySelector('#x3').value) || 0;
    const y3 = Number(document.querySelector('#y3').value) || 0;

    const area = Math.abs(
        (x1*(y2 - y3) + x2*(y3 - y1) + x3*(y1 - y2)) / 2
    );

    const resultEl = document.querySelector('#area-result');
    resultEl.textContent = `Площадь треугольника = ${area.toFixed(3)}`;
}

function showDistance() {
    const x = Number(document.querySelector('#px').value) || 0;
    const y = Number(document.querySelector('#py').value) || 0;

    const distance = Math.sqrt(x*x + y*y);

    document.querySelector('#dist-result').textContent =`Расстояние от точки до начала координат = ${distance.toFixed(3)}`;
}


function swapValues(force = false) {
    const a = document.querySelector('#valA');
    const b = document.querySelector('#valB');
    const result = document.querySelector('#swap-result');

    if (force || document.activeElement !== a && document.activeElement !== b) {
        const temp = a.value;
        a.value = b.value;
        b.value = temp;
        result.textContent = `A = ${a.value}, B = ${b.value}`;
    }
}