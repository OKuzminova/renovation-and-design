var headerSection1 = document.querySelector('.header__section-1');
var headerBackground = document.querySelector('.header__nav-detail');

headerSection1.addEventListener('mouseover', function(event) {
  headerSection1.classList.add('header__section');
  headerBackground.classList.add('header__section-bg');
});
