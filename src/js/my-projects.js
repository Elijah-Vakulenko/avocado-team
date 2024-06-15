import getRefs from './functions/getRefs';
import ProjectsAPI from './services/projectsAPI';
import LoadMoreBtn from './components/loadMoreBtn';
import projectCardTemplate from './templates/projectCard';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = getRefs();
const projectsAPI = new ProjectsAPI();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

projectsAPI.resetPage();

projectsAPI
  .fetchProjects()
  .then(projects => {
    projectsAPI.incrementPage();
    return projects;
  })
  .then(projects => {
    const markup = projects.map(projectCardTemplate).join('');
    refs.projectsList.insertAdjacentHTML('beforeend', markup);
  })
  .finally(() => {
    loadMoreBtn.show();

    const projectImages = document.querySelectorAll('.project-image');

    projectImages.forEach(image => {
      image.addEventListener('load', onImageLoaded, { once: true });
    });

    function onImageLoaded(evt) {
      const thumb = evt.target.closest('.project-thumb');
      const loading = thumb.querySelector('.js-image-loading');

      loading.classList.add('hidden');
    }
  });

refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onLoadMore() {
  loadMoreBtn.disable();

  projectsAPI
    .fetchProjects()
    .then(projects => {
      const markup = projects.map(projectCardTemplate).join('');
      refs.projectsList.insertAdjacentHTML('beforeend', markup);

      if (projectsAPI.page === projectsAPI.lastPage) {
        iziToast.info({
          position: 'topRight',
          message: "We're sorry, but you've reached the end of search results.",
        });
        loadMoreBtn.hide();
        return;
      }
    })
    .then(() => {
      projectsAPI.incrementPage();
      smoothScroll();
    })
    .catch(error => console.log(error))
    .finally(() => {
      loadMoreBtn.enable();

      const projectImages = document.querySelectorAll('.project-image');

      projectImages.forEach(image => {
        image.addEventListener('load', onImageLoaded, { once: true });
      });

      function onImageLoaded(evt) {
        const thumb = evt.target.closest('.project-thumb');
        const loading = thumb.querySelector('.js-image-loading');

        loading.classList.add('hidden');
      }
    });
}

function smoothScroll() {
  const card = document.querySelector('.js-project-list .project-item');
  const cardHeight = card.getBoundingClientRect().height;
  window.scrollBy({
    left: 0,
    top: cardHeight,
    behavior: 'smooth',
  });
}
