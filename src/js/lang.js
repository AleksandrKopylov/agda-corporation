/* const allLangs = ['ua','en'];
let currentLang = 'ua';

const langButtons = document.querySelectorAll('[data-btn]');

const headTexts = {
    'head_link-1': {
        ua: 'Наші товари',
        eu: 'Our products',
    },
}

function changeLang() {
    for (const key in currentTexts) {
        const elem = document.querySelector('[data-lang=${key}]');
        if (elem) {
            elem.textContent = currentText[key][currentLang];
        }
    }
}

changeLang();

langButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        currentLang = event.target.dataset.btn;
        btn.classList.add('head__btn_active');
        changeLang();
    });
}); */

let arrLang = {
    'en': {
        'products': 'Our products', 
        'about': 'About us',
        'gallery': 'Gallery',
        'contact': 'Contact us',
    },
    'ua': {
        'products': "Наші товари",
        'about': "Про компанію",
        'gallery': "Галерея",
        'contact': "Зв'язатися з нами",
    },
}

$(function() {
    $('.head__langbtn').click(function() {
        let lang = $(this).attr('id');

        $('.head_link').each(function(index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});