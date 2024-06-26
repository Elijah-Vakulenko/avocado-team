import spriteUrl from '../../img/icons.svg';
import getTheme from '../functions/getTheme';

export default function projectCardTemplate({ images, tags, name, url }) {
  return `
      <li class="project-item">
        <div class="project-thumb">
          <img
            loading="lazy"
            srcset="
              ${images.x1} 1x,
              ${images.x2} 2x
            "
            data-src="${images.x1}"
            alt="${name}"
            class="project-image lazyload"
          />
          <span class="image-loading js-image-loading">
            <span class="loader"></span>
          </span>
        </div>
        <div class="project-meta">
          <p class="project-tags">${tags}</p>
          <div class="row">
            <h3 class="project-heading">${name}</h3>

            <a href="https://github.com/Elijah-Vakulenko/avocado-team" target="_blank" class="project-button  ${
              getTheme() === 'dark' ? 'dark' : ''
            }">
              VISIT
              <svg class="project-button-icon" width="19" height="19">

                <use href="${spriteUrl}#icon-arrow-up-right"></use>

              </svg>
            </a>
          </div>
        </div>
      </li>
  `;
}
