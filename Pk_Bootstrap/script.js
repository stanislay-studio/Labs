// script.js

$(document).ready(function() {
    
    console.log("Bootstrap 3 — Лабораторная №12 (Вариант 8) загружена успешно");

    // Дополнительная интерактивность (по желанию)
    $(".block").hover(
        function() {
            $(this).css({
                "transform": "scale(1.03)",
                "transition": "all 0.3s ease"
            });
        },
        function() {
            $(this).css({
                "transform": "scale(1)"
            });
        }
    );

    // Показываем сообщение при изменении размера окна (для демонстрации адаптивности)
    $(window).resize(function() {
        console.log("Размер окна изменён. Текущая ширина: " + $(window).width() + "px");
    });

});