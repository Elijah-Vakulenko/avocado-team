const reviewsContainer = document.querySelector('.reviews-container');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const pagination = document.querySelector('.swiper-pagination');
const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');
const errorMessage = document.querySelector('.reviews-error-message');

import axios from 'axios';
import Swiper from 'swiper/bundle';
import 'swiper/css';


async function fetchAndRender() {
  const reviewsUrl = 'https://portfolio-js.b.goit.study/api/reviews';

  try {
    const response = await axios.get(reviewsUrl);
    const reviews = response.data;

    if (reviews.length === 0) {
      throw new Error('No reviews found');
    }

      const render = reviews.map(review => `
      <li class="swiper-slide review-item">
        <p class="review-content">${review.review}</p>
        <div class="review-author">
          <img class="review-avatar" src="${review.avatar_url}" alt="Avatar">
          <p class="review-name">${review.author}</p>
        </div>
      </li>
    `);

    document.getElementById('reviews').innerHTML = render;

      
    new Swiper('.reviews-container', {
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        1280: {
            slidesPerView: 2,
            spaceBetween: 32,
            slidesPerGroup: 2,
          },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: 'swiper-pagination',
        },
        simulateTouch: true,
        touchRatio: 1,
        grabCursor: true,
        slideToClickedSlide: true,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        mousewheel: {
            sensitivity: 1,
        },
        on: {
          reachEnd: function () {
              document.querySelector('.swiper-button-next').classList.add('swiper-button-disabled');
          },
          reachBeginning: function () {
              document.querySelector('.swiper-button-prev').classList.add('swiper-button-disabled');
          },
          fromEdge: function () {
              document.querySelector('.swiper-button-next').classList.remove('swiper-button-disabled');
              document.querySelector('.swiper-button-prev').classList.remove('swiper-button-disabled');
          }
        }
    });

  } catch (error) {
    console.error('Error fetching reviews:', error);
    const errorMessage = document.querySelector('.reviews-error-message');
    errorMessage.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchAndRender();
});
