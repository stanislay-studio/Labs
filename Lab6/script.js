// Элементы
const navItems = document.querySelectorAll("nav ul li");
const holidayImage = document.getElementById("holiday-image");
const holidayTitle = document.getElementById("holiday-title");

// Обработчики для меню (стрелка)
navItems.forEach(item => {
    item.onmouseover = itemMouseoverHandler;
    item.onmouseout = itemMouseoutHandler;
    
    // При клике показываем соответствующее изображение
    item.addEventListener("click", () => {
        const imageName = item.getAttribute("data-image");
        
        // Меняем заголовок
        holidayTitle.textContent = item.querySelector("a").textContent;
        
        // Меняем изображение
        holidayImage.src = `images/${imageName}.jpg`;
        
        // Сбрасываем размер изображения при смене
        holidayImage.style.height = "auto";
    });
});

function itemMouseoverHandler() {
    this.firstElementChild.classList.remove('hide');
}

function itemMouseoutHandler() {
    this.firstElementChild.classList.add('hide');
}

function startImageReduction() {
    const currentHeight = holidayImage.height;
    
    if (currentHeight > 150) {
        holidayImage.style.height = (currentHeight - 15) + "px";  
        setTimeout(startImageReduction, 20);
    }
}