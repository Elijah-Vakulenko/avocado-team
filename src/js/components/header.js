import throttle from 'lodash.throttle';
import getRefs from '../functions/getRefs';

const refs = getRefs();

window.addEventListener('scroll', throttle(onWindowScroll, 500));

function onWindowScroll(evt) {
  // console.log(pageYOffset + 'px');
}
