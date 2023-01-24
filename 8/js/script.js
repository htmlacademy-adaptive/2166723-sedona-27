let buttonOpen = document.querySelector('.main-navigation__open');
let buttonClose = document.querySelector('.main-navigation__close');
let mainNavigation = document.querySelector('.main-navigation__wrapper');

mainNavigation.classList.remove('main-navigation__wrapper--no-js');
buttonClose.classList.remove('main-navigation__close--no-js');

buttonOpen.addEventListener('click', function () {
  if(mainNavigation.classList.contains('main-navigation__wrapper--no-js')) {
  mainNavigation.classList.remove('main-navigation__wrapper--no-js');
  mainNavigation.classList.add('main-navigation__wrapper--opened');
  buttonClose.classList.remove('main-navigation__close--no-js');
  } else {
    mainNavigation.classList.add('main-navigation__wrapper--no-js');
    mainNavigation.classList.remove('main-navigation__wrapper--opened');
  }
});

buttonClose.addEventListener('click', function () {
  if(mainNavigation.classList.contains('main-navigation__wrapper--opened')) {
  mainNavigation.classList.remove('main-navigation__wrapper--opened');
  mainNavigation.classList.add('main-navigation__wrapper--no--js');
  } else {
    mainNavigation.classList.add('main-navigation__wrapper--opened');
    mainNavigation.classList.remove('main-navigation__wrapper--no-js');
  }
});
