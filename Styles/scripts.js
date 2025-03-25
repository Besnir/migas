// Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loaderSpinner");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  })
})

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelector(".slides");
  slideIndex++;
  slides.style.transform = `translateX(-${(slideIndex % slides.children.length) * 100}%)`;
  setTimeout(showSlides, 2000);
}

function plusSlides(n) {
  const slides = document.querySelector(".slides");
  slideIndex += n;
  slides.style.transform = `translateX(-${(slideIndex % slides.children.length) * 100}%)`;
}
