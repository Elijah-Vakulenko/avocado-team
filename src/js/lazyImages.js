import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const lazyImages = document.querySelectorAll('img[data-src]');
console.log('🚀 -> lazyImages:', lazyImages);

lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  console.log('Картинка загрузилась');
  evt.target.classList.add('appear');
}
