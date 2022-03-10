const aboutMain = document.querySelector('.About-main-bg');
const mainNav = document.querySelector('.main-nav');
const hamburger = document.querySelector('.hamburger');
const divOne = document.querySelector('.one');
const divTwo = document.querySelector('.two');
const divThree = document.querySelector('.three');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  mainNav.classList.toggle('nav-active');
  divOne.classList.toggle('one-active');
  divTwo.classList.toggle('two-active');
  divThree.classList.toggle('three-active');
  hamburger.classList.toggle('hamburger-close');
  body.classList.toggle('body-overflow');
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= 68) {
    mainNav.classList.add('fixed-nav');
    aboutMain.classList.add('m-t');
  } else {
    mainNav.classList.remove('fixed-nav');
    aboutMain.classList.remove('m-t');
  }
});
