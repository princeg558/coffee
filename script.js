const navLinks = document.querySelectorAll(".nav-link");
const menuopenoptions = document.querySelector("#menu-open-button");
const menucloseoptions = document.querySelector("#menu-close-button");

menuopenoptions.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menucloseoptions.addEventListener("click", () => menuopenoptions.click());

navLinks.forEach((link) => {
  link.addEventListener("click", () => menuopenoptions.click());
});

const swiper = new Swiper(".slider-wrapper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
