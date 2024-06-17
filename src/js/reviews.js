const reviewsContainer = document.querySelector('.reviews-container');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const pagination = document.querySelector('.swiper-pagination');
const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');
const errorMessage = document.querySelector('.reviews-error-message');

const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';

export function fetchReviews() {
    fetch(BASE_URL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
            }
        })
        .then(response => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.length === 0) {
                errorMessage.style.display = 'block';
                return;
            } else {
                reviewsContainer.innerHTML = data.map(review => `
                    <li class="swiper-slide" id="${review._id}">
                        <div class="review-content">${review.review}</div>
                        <div class="review-author">
                            <img src="${review.avatar_url}" alt="${review.author}">
                            ${review.author}
                        </div>
                    </li>
                `).join('');
                initSwiper();
            }
        });
}

export function initSwiper() {
    const swiper = new Swiper(swiperContainer, {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: pagination,
        type: 'bullets'
      },
      navigation: {
        prevEl: prevButton,
        nextEl: nextButton
      },
      onSlideChange: function() {
        updateNavigationButtons();
      }
    });
  
    updateNavigationButtons();
}
  
function updateNavigationButtons() {
    prevButton.disabled = swiper.isBeginning;
    nextButton.disabled = swiper.isEnd;
}

