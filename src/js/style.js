//menu hamburger

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.head__menu'),
      closeElem = document.querySelector('.head__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');  
});   

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');  
});  

//lightbox

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

//Tabs
function cookieCategory(cookieName) {
  let i;
  let x = document.getElementsByClassName("catalog__contant");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cookieName).style.display = "block";  
}

