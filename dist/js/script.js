'use strict';

$(document).ready(function(){
//hamburder
  const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.head__menu'),
        closeElem = document.querySelector('.head__close');

  hamburger.addEventListener('click', () => {
    menu.classList.add('active');  
  });   

  closeElem.addEventListener('click', () => {
    menu.classList.remove('active');  
  });  
 
  //tabs

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });


  function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });
};

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

  //modalconnection
  $('[data-modal=connection]').on('click', function() {
    $('.overlay, #connection').fadeIn();
  });
  $('.modalgallery__close').on('click', function() {
    $('.overlay, #connection, #thanks').fadeOut('');
  });

  $('#connection-form').validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
      textarea: "required",
    },
    messages: {
      name: "Будь ласка, введіть своє ім'я",
      textarea: "Будь ласка, напишіть про що би ви хотіли дізнатися",
      email: {
        required: "Будь ласка, введіть адрус електронної пошти",
        email: "Невірно введено електронну пошту"
      }
    }
  });
  $('#connection form').validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
      phone: "required",
    },
    messages: {
      name: "Будь ласка, введіть своє ім'я",
      phone: "Будь ласка, введіть ваш номер телефона",
      email: {
        required: "Будь ласка, введіть адрус електронної пошти",
        email: "Невірно введено електронну пошту"
      }
    }
  });

  $('input[name=phone]').mask("+380 (99) 999-99-99");

});

  //slikslide
  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

      
