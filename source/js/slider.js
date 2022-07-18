/* SWIPER */
/*
import Swiper from "swiper/swiper-bundle";

const swiper = new Swiper(".page-main__promo", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
*/

let btnPrev = document.querySelector('.page-main__promo .swiper-button-prev');
let btnNext = document.querySelector('.page-main__promo .swiper-button-next');
let images = document.querySelectorAll('.page-main__promo .swiper-slide');
let paginations = document.querySelectorAll('.page-main__promo .swiper-pagination-bullet');

let i = 0;

btnNext.onclick = function() {
  images[i].style.display = 'none';
  paginations[i].classList.remove('swiper-pagination-bullet-active');
  i++ ;
  if(i >= images.length){
    i = 0;
  }
  images[i].style.display = 'block';
  paginations[i].classList.add('swiper-pagination-bullet-active');
}

btnPrev.onclick = function() {
  images[i].style.display = 'none';
  paginations[i].classList.remove('swiper-pagination-bullet-active');
  i = i - 1;
  if(i < 0){
    i = images.length - 1;
  }
  images[i].style.display = 'block';
  paginations[i].classList.add('swiper-pagination-bullet-active');
}
