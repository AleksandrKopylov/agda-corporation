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
        //catalog
        'catalog-title': "Our products",
        'catalog-subtitle': "Our baking is only made from natural ingredients",
        'catalog-tab1': "Brittle Sweets",
        'catalog-tab2': "Biscuits",
        'catalog-tab3': "Puff Pastry",
        //about
        'about-title': "About us",
        'about-subtitle': "Many years we bring gladness in a house",
        'about-text-title': "Advantages of collaboration with the company of Agda Corporation:",
        'about-li-1': "– High-quality products;",
        'about-li-2': "– Exclusive forms of production;",
        'about-li-3': "– Competitive prices;",
        'about-li-4': "– Efficient execution of orders;",
        'about-li-5': "– European packaging design;",
        'about-li-6': "– Patented in the EU brand and products;",
        'about-li-7': "– System-related export;",
        'about-li-8': "– Exclusive steady contracts;",
        'about-li-9': "– Flexibility and responsiveness in addressing issues;",
        'about-li-10': "– Advertising on the Internet resources and exhibitions;",
        'about-li-11': "– Colorful and informative catalogues and product presentations which sell the output;",
        'about-li-12': "– Honest relationships with partners;",
        'about-li-13': "– Experienced specialists.",
        //about-info
        'about-info-title-1': "Ingredients",
        'about-info-title-2': "Products",
        'about-info-title-3': "Staff",
        'about-info-text-1': "Natural raw materials, modern high-tech equipment and desire to create a tasty and healthy product contribute to make the sweets which are distinguished by their high quality, great taste and originality of execution.",
        'about-info-text-2': "Along with producing of popular assortment we constantly develop the new product’s production. We are listening to wishes of our clients. That is why the necessity of new product’s promotion or perfecting of existing design is defined by marketing researches and preliminary tasting by customers.",
        'about-info-text-3': "Any business is a business based on people. The business of Agda Corporation is based on talented people. The company is proud of its personnel – friendly team of professionals.",
    },  
    //language translation
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
        //catalog
        'catalog-title': "Наші товари",
        'catalog-subtitle': "Наша випічка лише з натуральних інгредієнтів",
        'catalog-tab1': "Грильяжне",
        'catalog-tab2': "Листкове",
        'catalog-tab3': "Здобне",
        //about
        'about-title': "Про компанію",
        'about-subtitle': "Багато років приносимо радість до будинку", 
        'about-text-title': "Переваги співпраці з компанією АГДА Корпорейшн:",
        //about-ul->li
        'about-li-1': "- Висока якість продукції",
        'about-li-2': "- Ексклюзивні форми продукції;",
        'about-li-3': "- Конкурентні ціни;",
        'about-li-4': "- Оперативне виконання замовлень;",
        'about-li-5': "- європейський дизайн упаковки;",
        'about-li-6': "- Запатентована в ЄС торгова марка та продукція;",
        'about-li-7': "- Системний експорт;",
        'about-li-8': "- Ексклюзивні стабільні контракти;",
        'about-li-9': "- Гнучкість та оперативність у вирішенні питань;",
        'about-li-10': "- Реклама на інтернет-ресурсах та виставках;",
        'about-li-11': "- Продають каталоги та презентації продукції;",
        'about-li-12': "- Порядні взаємини з партнерами;",
        'about-li-13': "- Досвідчені фахівці.",
        //about-info
        'about-info-title-1': "Інгредієнти",
        'about-info-title-2': "Продукція",
        'about-info-title-3': "Персонал",
        'about-info-text-1': "Натуральна сировина, сучасне високотехнологічне обладнання та бажання створити смачний та корисний продукт допомагають отримати ласощі, які вигідно відрізняють високу якість, чудовий смак та неординарність виконання.",
        'about-info-text-2': "Поряд із випуском марок, які вже завоювали популярність, ми постійно освоюємо виробництво нових продуктів. Ми прислухаємось до побажань наших клієнтів.",
        'about-info-text-3': "Будь-який бізнес - це справа, побудована на людях. Бізнес АГДА Корпорейшн збудований на талановитих людях. Компанія пишається своїми співробітниками – дружною командою професіоналів!",       
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