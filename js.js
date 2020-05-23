$(document).ready(function () {

    // Аккордеон ВАРИАНТ - 1
    $(function () {
        $('.accordeon__head.option-1').click(function () { // Вешаем собыите "клик" на заголово аккордеона
            $(this).toggleClass('active'); // добавляем класс 'active' тому пункут по которому кликаем. В данном случае, меняем цвет плашки
            $(this).next().toggleClass('active'); // добавляем класс 'active'. В данном случае, заставляем показать контент пункта по каоторому кликаем.
        });
    });

    // Аккордеон ВАРИАНТ - 2
    $(function () {
        $('.accordeon__head.option-2').click(function () { // Вешаем собыите "клик" на заголово аккордеона
            $(this).toggleClass('active'); // добавляем класс 'active' тому пункут по которому кликаем. В данном случае, меняем цвет плашки
            $(this).next().toggleClass('active'); // добавляем класс 'active'. В данном случае, заставляем показать контент пункта по каоторому кликаем.

            $('.accordeon__head.option-2').not(this).removeClass('active'); // Удаляем цвет плашки у любого другого пункта, кроме того на который кликаем
            $('.accordeon__head.option-2').not(this).parent().find('.accordeon__body').removeClass('active'); // скрываем контент другого пункта 
        });
    });

    // Аккордеон ВАРИАНТ - 3
    $(function () {
        $('.accordeon__head.option-3').click(function () { // Вешаем собыите "клик" на заголово аккордеона
            var el = $(this);

            $(this).toggleClass('active'); // добавляем класс 'active' тому пункут по которому кликаем. В данном случае, меняем цвет плашки
            $(this).next().toggleClass('active'); // добавляем класс 'active'. В данном случае, заставляем показать контент пункта по каоторому кликаем.

            $('.accordeon__head.option-3').not(this).removeClass('active'); // Удаляем цвет плашки у любого другого пункта, кроме того на который кликаем
            $('.accordeon__head.option-3').not(this).parent().find('.accordeon__body').removeClass('active'); // скрываем контент другого пункта 

            setTimeout(function () {  // делаем сколл до открытого меню пункта.
                var top = el.offset().top;
                $('html, body').animate({ scrollTop: top + 'px' }, 500);
            }, 100);
        });
    });

});