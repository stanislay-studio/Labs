function calculateCategory() {
    const form = document.forms.testForm;
    const resultDiv = document.getElementById('result');

    const surname = form.surname.value.trim();
    const school  = form.school.value.trim();

    if (!surname || !school) 
        {
        resultDiv.innerHTML = "<strong style='color:red'>Заполните фамилию и номер школы!</strong>";
        return;
    }

    let total = 0;
    let maxCount = 0;       
    let hasOne = false;
    let allTwoThirds = true;

    for (let i = 1; i <= 6; i++) {
        const radios = form["task" + i];
        let val = 0;

        for (let radio of radios) {
            if (radio.checked) {
                val = Number(radio.value);
                break;
            }
        }

        total += val;

        if (val === 1) {
            maxCount++;
            hasOne = true;
        }
        if (val !== 0.666) {
            allTwoThirds = false;
        }
    }

    let categoryText = "";

    if (maxCount === 6) {
        categoryText = "I категория (все задания — максимальный балл 1)";
    }
    else if (hasOne && total >= 4) {   // 6 × 2/3 = 4
        categoryText = "II категория (все ≥ 2/3, но есть хотя бы одно на 1)";
    }
    else if (allTwoThirds) {
        categoryText = "III категория (все задания ровно на 2/3)";
    }
    else {
        categoryText = "IV категория (остальные случаи)";
    }

    let text = `<strong>Участник:</strong> ${surname}<br>`;
    text += `<strong>Школа:</strong> №${school}<br><br>`;
    text += `<strong>Набрано баллов:</strong> ${total.toFixed(3)} из 6<br><br>`;
    text += `<strong>Категория:</strong> ${categoryText}`;

    resultDiv.innerHTML = text;
}