/* PROGRAM SLIDERS */
AOS.init({
  offset: 250,
  duration: 800,
  once: true,
});

/* MOBILE MENU ANIMATION */
const menu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".navbar-menu");
const links = document.querySelectorAll(".nav-item");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menu.classList.toggle("is-active");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

/* SLICK CAROUSEL */
$(".news-wrapper").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: $(".next"),
  prevArrow: $(".prev"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

/* VIDEO PLAYER */
const videoPlayer = document.getElementById("videoPlayer");
const myVideo = document.getElementById("myVideo");

function stopVideo() {
  videoPlayer.style.display = "none";
}

function playVideo(file) {
  myVideo.src = file;
  videoPlayer.style.display = "block";
}

/* PARALLAX SCROLL */
// window.addEventListener("resize", function () {
//   if (window.innerWidth > 0) {
//     window.addEventListener("scroll", function () {
//       const parallax = document.querySelector(".parallax");
//       const foreground = document.querySelector(".hero");

//       let scrollPosition = window.pageYOffset;
//       parallax.style.transform = "translateY(" + scrollPosition * 0.4 + "px)";
//       foreground.style.transform = "translateY(" + scrollPosition * 0 + "px)";
//     });
//   }
// });

window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".parallax");
  const foreground = document.querySelector(".hero");

  let scrollPosition = window.pageYOffset;
  parallax.style.transform = "translateY(" + scrollPosition * 0.4 + "px)";
  foreground.style.transform = "translateY(" + scrollPosition * 0 + "px)";
});

/* ACCORDIAN */
const myAccordion = new gianniAccordion({
  elements: ".acc-card .acc-card__article",
  trigger: "[data-accordion-element-trigger]",
  content: "[data-accordion-element-content]",
});

myAccordion.on("elementSelected", (data) => {
  console.log("elementOpened", data);
});

/* TRUTH RISING SLIDER */
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".iframe-container");

// BUTTONS
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//COUNTER
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

//BUTTON LISTENERS

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.8s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.8s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
