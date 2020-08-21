var mySwiper = new Swiper(".swiper-container", {
  pagination: {
    el: " .projects-pagination",
    bulletClass: "projects-bullet",
    bulletActiveClass: "projects-bullet_active",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
