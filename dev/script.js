const services = document.querySelector('.services'); // Блок услуг
const titleH1 = document.querySelector('.h1');
const iconLocation = document.querySelector('.header__nav--icon-location');
const iconLogo = document.querySelector('.header__nav--icon-logo');
const iconTel = document.querySelector('.header__nav--icon-tel');
const titleSvg = document.querySelector('.header__title-svg');
const header = document.querySelector('.header__nav-menu');
const headerRight = document.querySelector('.header__nav-menu-right');
const btnBig = document.querySelector('.button');

// 1 Блок (Красный)
const servicesRed = document.querySelector('.services__red');
const titleColorRed = document.querySelector('.services__title--red');
const txtColorRed = document.querySelector('.services__text--red');
const btnRed = document.querySelector('.services__btn-item--red');

// 2 Блок (Зеленый)
const servicesGreen = document.querySelector('.services__green');
const titleColorGreen = document.querySelector('.services__title--green');
const txtColorGreen = document.querySelector('.services__text--green');
const btnGreen = document.querySelector('.services__btn-item--green');

// 3 Блок (Голубой)
const servicesBlue= document.querySelector('.services__blue');
const titleColorBlue = document.querySelector('.services__title--blue');
const txtColorBlue = document.querySelector('.services__text--blue');
const btnBlue = document.querySelector('.services__btn-item--blue');

// 4 Блок (Фиолетовый)
const servicesPurple = document.querySelector('.services__purple');
const titleColorPurple = document.querySelector('.services__title--purple');
const txtColorPurple = document.querySelector('.services__text--purple');
const btnPurple = document.querySelector('.services__btn-item--purple');

const portfolio = document.getElementById('portfolio');

const servicesItem = [servicesRed, servicesGreen, servicesBlue, servicesPurple];
servicesItem.forEach(item => {
  if (item == servicesRed) {
    item.addEventListener('click', function (event) {
      services.classList.add('services__bg--red');
      servicesRed.classList.add('services__list-item--red');
      txtColorRed.classList.remove('visually-hidden');
      btnRed.classList.remove('visually-hidden');
      titleColorRed.classList.remove('visually-hidden');

      //Удаление стилей Green
      services.classList.remove('services__bg--green', 'services__bg--blue', 'services__bg--purple');
      servicesGreen.classList.remove('services__list-item--green');
      titleColorGreen.classList.add('visually-hidden');
      txtColorGreen.classList.add('visually-hidden');
      btnGreen.classList.add('visually-hidden');
      //Удаление стилей Blue
      servicesBlue.classList.remove('services__list-item--blue');
      titleColorBlue.classList.add('visually-hidden');
      txtColorBlue.classList.add('visually-hidden');
      btnBlue.classList.add('visually-hidden');
      //Удаление стилей Purple
      servicesPurple.classList.remove('services__list-item--purple');
      titleColorPurple.classList.add('visually-hidden');
      txtColorPurple.classList.add('visually-hidden');
      btnPurple.classList.add('visually-hidden');
    });
  } else if (item == servicesGreen) {
    item.addEventListener('click', function(event) {
      services.classList.add('services__bg--green');
      servicesGreen.classList.add('services__list-item--green');
      txtColorGreen.classList.remove('visually-hidden');
      btnGreen.classList.remove('visually-hidden');
      titleColorGreen.classList.remove('visually-hidden');

      //Удаление стилей Red
      services.classList.remove('services__bg--red', 'services__bg--blue', 'services__bg--purple');
      servicesRed.classList.remove('services__list-item--red');
      titleColorRed.classList.add('visually-hidden');
      txtColorRed.classList.add('visually-hidden');
      btnRed.classList.add('visually-hidden');
      //Удаление стилей Blue
      servicesBlue.classList.remove('services__list-item--blue');
      titleColorBlue.classList.add('visually-hidden');
      txtColorBlue.classList.add('visually-hidden');
      btnBlue.classList.add('visually-hidden');
      //Удаление стилей Purple
      servicesPurple.classList.remove('services__list-item--purple');
      titleColorPurple.classList.add('visually-hidden');
      txtColorPurple.classList.add('visually-hidden');
      btnPurple.classList.add('visually-hidden');
    });
  } else if (item == servicesBlue) {
    item.addEventListener('click', function(event) {
      services.classList.add('services__bg--blue');
      servicesBlue.classList.add('services__list-item--blue');
      txtColorBlue.classList.remove('visually-hidden');
      btnBlue.classList.remove('visually-hidden');
      titleColorBlue.classList.remove('visually-hidden');

      //Удаление стилей Green
      services.classList.remove('services__bg--green', 'services__bg--red', 'services__bg--purple');
      servicesGreen.classList.remove('services__list-item--green');
      titleColorGreen.classList.add('visually-hidden');
      txtColorGreen.classList.add('visually-hidden');
      btnGreen.classList.add('visually-hidden');
      //Удаление стилей Red
      servicesRed.classList.remove('services__list-item--red');
      titleColorRed.classList.add('visually-hidden');
      txtColorRed.classList.add('visually-hidden');
      btnRed.classList.add('visually-hidden');
      //Удаление стилей Purple
      servicesPurple.classList.remove('services__list-item--purple');
      titleColorPurple.classList.add('visually-hidden');
      txtColorPurple.classList.add('visually-hidden');
      btnPurple.classList.add('visually-hidden');
    });
  } else if (item == servicesPurple) {
    item.addEventListener('click', function(event) {
      services.classList.add('services__bg--purple');
      servicesPurple.classList.add('services__list-item--purple');
      txtColorPurple.classList.remove('visually-hidden');
      btnPurple.classList.remove('visually-hidden');
      titleColorPurple.classList.remove('visually-hidden');

      //Удаление стилей Red
      services.classList.remove('services__bg--red', 'services__bg--green', 'services__bg--blue');
      servicesRed.classList.remove('services__list-item--red');
      titleColorRed.classList.add('visually-hidden');
      txtColorRed.classList.add('visually-hidden');
      btnRed.classList.add('visually-hidden');
      //Удаление стилей Green
      servicesGreen.classList.remove('services__list-item--green');
      titleColorGreen.classList.add('visually-hidden');
      txtColorGreen.classList.add('visually-hidden');
      btnGreen.classList.add('visually-hidden');
      //Удаление стилей Blue
      servicesBlue.classList.remove('services__list-item--blue');
      titleColorBlue.classList.add('visually-hidden');
      txtColorBlue.classList.add('visually-hidden');
      btnBlue.classList.add('visually-hidden');
    });
  }
});

const servicesArray = [servicesRed, servicesGreen, servicesBlue, servicesPurple];
// Добавление базовых классов для слайдов
servicesArray.forEach(services => {
  services.addEventListener('click', function (event) {
    titleH1.classList.add('visually-hidden');
    titleSvg.classList.add('header__title-svg--white');
    iconLocation.classList.add('header__nav--icon-location-white');
    iconLogo.classList.add('header__nav--icon-logo-white');
    iconTel.classList.add('header__nav--icon-tel-white');
    header.classList.add('header__nav-white');
    headerRight.classList.add('header__nav-white');
    btnBig.classList.add('button__white');
  });
});


const colorArray = [
  txtColorRed, titleColorRed, btnRed,
  txtColorGreen, titleColorGreen, btnGreen,
  txtColorBlue, titleColorBlue, btnBlue,
  txtColorPurple, titleColorPurple, btnPurple
];
// Скрытие декоративных стилей
colorArray.forEach(color => {
  portfolio.addEventListener('mouseover', function (event) {
    txtColorRed.classList.add('visually-hidden');
    titleColorRed.classList.add('visually-hidden');
    btnRed.classList.add('visually-hidden');

    txtColorGreen.classList.add('visually-hidden');
    titleColorGreen.classList.add('visually-hidden');
    btnGreen.classList.add('visually-hidden');

    txtColorBlue.classList.add('visually-hidden');
    titleColorBlue.classList.add('visually-hidden');
    btnBlue.classList.add('visually-hidden');

    txtColorPurple.classList.add('visually-hidden');
    titleColorPurple.classList.add('visually-hidden');
    btnPurple.classList.add('visually-hidden');
  });
});

// Сброс стилей
portfolio.addEventListener('mouseover', function(event) {
  services.classList.remove('services__bg--red', 'services__bg--green', 'services__bg--blue', 'services__bg--purple');

  servicesRed.classList.remove('services__list-item--red');
  servicesGreen.classList.remove('services__list-item--green');
  servicesBlue.classList.remove('services__list-item--blue');
  servicesPurple.classList.remove('services__list-item--purple');

  titleH1.classList.remove('visually-hidden');
  titleSvg.classList.remove('header__title-svg--white');
  iconLocation.classList.remove('header__nav--icon-location-white');
  iconLogo.classList.remove('header__nav--icon-logo-white');
  iconTel.classList.remove('header__nav--icon-tel-white');
  header.classList.remove('header__nav-white');
  headerRight.classList.remove('header__nav-white');
  btnBig.classList.remove('button__white');
});
