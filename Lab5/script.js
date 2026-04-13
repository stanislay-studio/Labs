// script.js

var workers = [];

function createBlocks() 
{
  var container = document.getElementById("forms");
  container.innerHTML = "";

  for (var i = 1; i <= 6; i++) 
    {
    var div = document.createElement("div");
    div.className = "block";
    div.innerHTML = 
    `
      <b>Сотрудник ${i}</b><br><br>
      Фамилия: <input type="text" class="fam" placeholder="Фамилия"><br><br>
      Начало: <input type="time" class="beg" value="09:00">
      Конец: <input type="time" class="fin" value="18:00"><br><br>
      Дни работы:<br>
      <input type="checkbox" value="ПН"> ПН 
      <input type="checkbox" value="ВТ"> ВТ 
      <input type="checkbox" value="СР"> СР 
      <input type="checkbox" value="ЧТ"> ЧТ 
      <input type="checkbox" value="ПТ"> ПТ 
      <input type="checkbox" value="СБ"> СБ 
      <input type="checkbox" value="ВС"> ВС
    `;
    container.appendChild(div);
  }
}

function saveAll() 
{
  workers = [];
  var blocks = document.querySelectorAll(".block");

  for (var i = 0; i < blocks.length; i++) {
    var b = blocks[i];
    var fam = b.querySelector(".fam").value.trim();
    var beg = b.querySelector(".beg").value;
    var fin = b.querySelector(".fin").value;

    var days = [];
    var checkboxes = b.querySelectorAll("input[type=checkbox]");
    for (var j = 0; j < checkboxes.length; j++) {
      if (checkboxes[j].checked) {
        days.push(checkboxes[j].value);
      }
    }

    if (fam === "") {
      alert("Введите фамилию у сотрудника " + (i + 1));
      return;
    }
    if (beg >= fin) {
      alert("Ошибка во времени у сотрудника " + (i + 1));
      return;
    }
    if (days.length === 0) {
      alert("Выберите хотя бы один день у сотрудника " + (i + 1));
      return;
    }

    workers.push({fam: fam, beg: beg, fin: fin, days: days});
  }

  fillSelects();
  alert("Данные сохранены!");
}



// Задача 1
function checkWorkDay() {
  var i = document.getElementById("person1").value;
  var day = document.getElementById("weekday").value;
  var res = document.getElementById("res1");

  if (i === "") {
    res.innerHTML = "Сначала выберите сотрудника";
    return;
  }

  var person = workers[i];
  var found = false;
  for (var j = 0; j < person.days.length; j++) {
    if (person.days[j] === day) {
      found = true;
      break;
    }
  }

  if (found) {
    res.innerHTML = person.fam + " работает в " + day;
  } else {
    res.innerHTML = person.fam + " НЕ работает в " + day;
  }
}

// Задача 2
function countHours() {
  var i = document.getElementById("person2").value;
  var res = document.getElementById("res2");

  if (i === "") {
    res.innerHTML = "Сначала выберите сотрудника";
    return;
  }

  var p = workers[i];
  var h1 = parseInt(p.beg.split(":")[0]);
  var m1 = parseInt(p.beg.split(":")[1]);
  var h2 = parseInt(p.fin.split(":")[0]);
  var m2 = parseInt(p.fin.split(":")[1]);

  var hoursPerDay = (h2 - h1) + (m2 - m1) / 60;
  var total = (hoursPerDay * p.days.length * 4).toFixed(1);

  res.innerHTML = p.fam + " — примерно " + total + " часов в месяц";
}

// Задача 3
function findOverlap() {
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var res = document.getElementById("res3");

  var list = [];
  for (var i = 0; i < workers.length; i++) {
    if (workers[i].beg < to && workers[i].fin > from) {
      list.push(workers[i].fam);
    }
  }

  if (list.length > 0) {
    res.innerHTML = "Перекрывается: " + list.join(", ");
  } else {
    res.innerHTML = "Никто не перекрывается с этим временем";
  }
}

// Задача 4
function showWeekendWorkers() {
  var res = document.getElementById("res4");
  var list = [];

  for (var i = 0; i < workers.length; i++) {
    var onlyWeekend = true;
    for (var j = 0; j < workers[i].days.length; j++) {
      var d = workers[i].days[j];
      if (d !== "СБ" && d !== "ВС") {
        onlyWeekend = false;
        break;
      }
    }
    if (onlyWeekend && workers[i].days.length > 0) {
      list.push(workers[i].fam);
    }
  }

  if (list.length > 0) {
    res.innerHTML = "Только по выходным: " + list.join(", ");
  } else {
    res.innerHTML = "Сотрудников с нестандартным графиком нет";
  }
}
function putExamples() {
  var blocks = document.querySelectorAll(".block");
  var fams = ["Иванов", "Петров", "Сидорова", "Козлов", "Смирнов", "Алексеева"];

  var data = [
    {beg:"09:00", fin:"18:00", days:["ПН","ВТ","СР","ЧТ","ПТ"]},
    {beg:"08:00", fin:"17:00", days:["ПН","ВТ","СР","ЧТ","ПТ"]},
    {beg:"10:00", fin:"19:00", days:["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"]},
    {beg:"09:00", fin:"18:00", days:["СБ","ВС"]},
    {beg:"08:30", fin:"20:00", days:["ПН","СР","ПТ","СБ"]},
    {beg:"09:00", fin:"17:30", days:["ВТ","ЧТ","ВС"]}
  ];

  for (var i = 0; i < blocks.length; i++) {
    var b = blocks[i];
    b.querySelector(".fam").value = fams[i];
    b.querySelector(".beg").value = data[i].beg;
    b.querySelector(".fin").value = data[i].fin;

    var chks = b.querySelectorAll("input[type=checkbox]");
    for (var j = 0; j < chks.length; j++) {
      chks[j].checked = data[i].days.indexOf(chks[j].value) !== -1;
    }
  }

  alert("Примеры вставлены. Теперь нажми «Сохранить данные»");
}

function fillSelects() {
  var s1 = document.getElementById("person1");
  var s2 = document.getElementById("person2");

  s1.innerHTML = "<option value=''>Выберите</option>";
  s2.innerHTML = "<option value=''>Выберите</option>";

  for (var i = 0; i < workers.length; i++) {
    var opt = document.createElement("option");
    opt.value = i;
    opt.text = workers[i].fam;
    s1.appendChild(opt.cloneNode(true));
    s2.appendChild(opt);
  }
}
// Запуск при загрузке страницы
window.onload = createBlocks;