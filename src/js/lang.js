'use strict';

let arrLang = {   //language translation
    'en': {  //menu
        'products': "Our products", 
        'about': "About us",
        'gallery': "Gallery",
        'contact': "Contact us",
        //sliders
        'slide1_1': "We have always delicious",
        'slide1_2': "Leadership and confidence through quality",
        'slide2_1': "Impeccable quality",
        'slide2_2': "which has become a tradition since 2004",  
        'slide3_1': "Openness to new ideas",
        'slide3_2': "We are constantly developing new products", 
    },  //language translation
    'ua': {  //menu
        'products': "Наші товари",
        'about': "Про компанію",
        'gallery': "Галерея",
        'contact': "Зв'язатися з нами",
        //sliders
        'slide1_1': "В нас завжди смачно",
        'slide1_2': "Лідерство і довіра через якість", 
        'slide2_1': "Бездоганная якість",
        'slide2_2': "Яка стала традицією з 2004 року", 
        'slide3_1': "Відкритість новим ідеям",
        'slide3_2': "Ми постійно освоюємо виробництво нових продуктів", 
    },
}




$(function() {
    $('.head__langbtn').click(function() {
        let lang = $(this).attr('id');

        $('.lang-text').each(function(index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});