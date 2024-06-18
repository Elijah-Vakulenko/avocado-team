export default function () {
  return {
    projectsList: document.querySelector('.js-project-list'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    backToTopButton: document.querySelector(
      'button[data-action="back-to-top"]'
    ),
    header: document.querySelector('.js-header'),
  };
}
