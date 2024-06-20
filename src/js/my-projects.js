import getRefs from './functions/getRefs';
import ProjectsAPI from './services/projectsAPI';
import LoadMoreBtn from './components/loadMoreBtn';
import projectCardTemplate from './templates/projectCard';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

let lazyImages = null;

const refs = getRefs();
const projectsAPI = new ProjectsAPI();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
});

projectsAPI.resetPage();

projectsAPI
  .fetchProjects()
  .then(projects => {
    projectsAPI.incrementPage();
    return projects;
  })
  .then(projects => {
    renderProjects(projects);
  })
  .then(() => {
    lazyImages = refs.projectsList.querySelectorAll('img[data-src]');

    lazyImages.forEach(image => {
      image.addEventListener('load', onLazyImageLoaded, { once: true });
    });
  })
  .finally(() => {
    setupImageLoad();
  });

refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onLoadMore() {
  loadMoreBtn.disable();

  projectsAPI
    .fetchProjects()
    .then(projects => {
      renderProjects(projects);

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
    .then(() => {
      lazyImages = refs.projectsList.querySelectorAll('img[data-src]');

      lazyImages.forEach(image => {
        image.addEventListener('load', onLazyImageLoaded, { once: true });
      });
    })
    .catch(error => console.log(error))
    .finally(() => {
      loadMoreBtn.enable();

      setupImageLoad();
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

function renderProjects(projects) {
  const markup = projects.map(projectCardTemplate).join('');
  refs.projectsList.insertAdjacentHTML('beforeend', markup);
  setupThemeForProjects();
}

export function setupThemeForProjects() {
  const projectButtons = document.querySelectorAll('.project-button');
  if (projectButtons.length === 0) {
    console.error('Project buttons not found');
    return;
  }
  return projectButtons;
}

function setupImageLoad() {
  const projectImages = document.querySelectorAll('.project-image');

  projectImages.forEach(image => {
    image.addEventListener('load', onImageLoaded, { once: true });
  });
}

function onImageLoaded(evt) {
  const loading = evt.target.nextElementSibling;

  loading.classList.add('hidden');
}

function onLazyImageLoaded(evt) {
  evt.target.classList.add('appear');
}
