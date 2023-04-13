const carousel = document.querySelector('.carousel');
const carouselContainer = carousel.querySelector('.carousel-container');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const carouselPrevButton = carousel.querySelector('.carousel-button-prev');
const carouselNextButton = carousel.querySelector('.carousel-button-next');
const carouselItemCount = carouselItems.length;
const carouselItemWidth = carouselItems[0].offsetWidth + parseFloat(getComputedStyle(carouselItems[0]).marginLeft) + parseFloat(getComputedStyle(carouselItems[0]).marginRight);
const carouselVisibleItemCount = 4;
let carouselCurrentIndex = 0;

function updateCarouselPosition() {
  carouselContainer.style.transform = `translateX(-${carouselCurrentIndex * carouselItemWidth}px)`;
}

function handlePrevButtonClick() {
  if (carouselCurrentIndex > 0) {
    carouselCurrentIndex--;
    updateCarouselPosition();
  }
}

function handleNextButtonClick() {
  if (carouselCurrentIndex < carouselItemCount - carouselVisibleItemCount) {
    carouselCurrentIndex++;
    updateCarouselPosition();
    
  }
}

carouselPrevButton.addEventListener('click', handlePrevButtonClick);
carouselNextButton.addEventListener('click', handleNextButtonClick);
