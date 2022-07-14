var navMain = document.querySelector('.page-header__wrapper-nav');
var navToggle = document.querySelector('.page-header__toggle');

//Скрытие меню, видимое по умолчанию
navMain.classList.add('page-header__wrapper-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page-header__wrapper-nav--closed')) {
  navMain.classList.remove('page-header__wrapper-nav--closed');
  navMain.classList.add('page-header__wrapper-nav--opened');
  } else {
    navMain.classList.add('page-header__wrapper-nav--closed');
    navMain.classList.remove('page-header__wrapper-nav--opened');
  }
});
