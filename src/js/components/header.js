import throttle from 'lodash.throttle';
import getRefs from '../functions/getRefs';

const refs = getRefs();

setBodyPadding();

window.addEventListener('scroll', throttle(onWindowScroll, 250));

let previousPageYOffset = window.pageYOffset;
const breakpoint = 500;

function onWindowScroll(evt) {
  const currentPageYOffset = window.pageYOffset;

  if (
    currentPageYOffset > previousPageYOffset &&
    currentPageYOffset > breakpoint
  ) {
    showHeader();
  } else if (currentPageYOffset < previousPageYOffset) {
    hideHeader();
  }

  previousPageYOffset = currentPageYOffset;
}

function hideHeader() {
  refs.header.classList.remove('is-fixed');
  refs.header.classList.remove('fadeInDown');
}

function showHeader() {
  refs.header.classList.add('is-fixed');
  refs.header.classList.add('fadeInDown');
}

function setBodyPadding() {
  const headerHeight = refs.header.clientHeight;
  document.body.style.paddingTop = headerHeight + 'px';
}
