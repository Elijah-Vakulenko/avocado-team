// import getRefs from '../refecences/get-refs';
import throttle from 'lodash.throttle';
import getRefs from '../functions/getRefs';

const refs = getRefs();

let previousPageYOffset = window.pageYOffset;
const breakpoint = 500;

window.addEventListener('scroll', throttle(onWindowScroll, 250));
refs.backToTopButton.addEventListener('click', onBackToTopBtnClick);

function onWindowScroll(evt) {
  const currentPageYOffset = window.pageYOffset;

  if (
    currentPageYOffset > previousPageYOffset &&
    currentPageYOffset > breakpoint
  ) {
    showBackToTopBtn();
  } else if (currentPageYOffset < previousPageYOffset) {
    hideBackToTopBtn();
  }

  previousPageYOffset = currentPageYOffset;
}

function onBackToTopBtnClick(evt) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function showBackToTopBtn() {
  refs.backToTopButton.classList.remove('is-hidden');
  refs.backToTopButton.classList.add('fadeInUp');
}

function hideBackToTopBtn() {
  refs.backToTopButton.classList.add('is-hidden');
  refs.backToTopButton.classList.remove('fadeInUp');
}
