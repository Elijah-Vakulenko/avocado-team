// import getRefs from '../refecences/get-refs';
import throttle from 'lodash.throttle';
import getRefs from '../functions/getRefs';

const refs = getRefs();

const breakpoint = 500;

console.log(refs.backToTopButton);

window.addEventListener('scroll', throttle(onWindowScroll, 250));
refs.backToTopButton.addEventListener('click', onBackToTopBtnClick);

function onWindowScroll(evt) {
  const currentPageYOffset = window.pageYOffset;

  if (currentPageYOffset > breakpoint) {
    showBackToTopBtn();
  } else {
    hideBackToTopBtn();
  }
}

function onBackToTopBtnClick(evt) {
  window.scrollTo({
    top: -document.body.offsetHeight,
    behavior: 'smooth',
  });
}

function showBackToTopBtn() {
  refs.backToTopButton.classList.remove('is-hidden');
}

function hideBackToTopBtn() {
  refs.backToTopButton.classList.add('is-hidden');
}
