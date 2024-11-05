// carousel.js
document.addEventListener("DOMContentLoaded", function() {
  let currentIndex = 0;

  function showSlide(index) {
    const slides = document.querySelectorAll('#image-carousel .carousel-slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }

    const carouselContainer = document.querySelector('#image-carousel .carousel-container');
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // Initialize the carousel by showing the first slide
  showSlide(currentIndex);
});