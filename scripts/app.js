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

/* PROGRAM SLIDERS */
AOS.init({
  offset: 250,
  duration: 800,
  once: true,
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
window.addEventListener("resize", function () {
  if (window.innerWidth > 414) {
    window.addEventListener("scroll", function () {
      const parallax = document.querySelector(".parallax");
      const foreground = document.querySelector(".hero-container");

      let scrollPosition = window.pageYOffset;
      parallax.style.transform = "translateY(" + scrollPosition * 0.4 + "px)";
      foreground.style.transform = "translateY(" + scrollPosition * 0.1 + "px)";
    });
  }
});

$(document).ready(function () {
  $(".news-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
// WHAT IS FRACKING ANIMATION */

// // using d3 for convenience
// const main = d3.select("main");
// const scrolly = main.select("#scrolly");
// const figure = scrolly.select("figure");
// const article = scrolly.select("article");
// const step = article.selectAll(".step");
// const graphic = document.querySelector(".infographic");

// // initialize the scrollama
// const scroller = scrollama();

// // generic window resize listener event
// function handleResize() {
//   // 1. update height of step elements
//   const stepH = Math.floor(window.innerHeight * 0.75);
//   step.style("height", stepH + "px");

//   const figureHeight = window.innerHeight / 2;
//   const figureMarginTop = (window.innerHeight - figureHeight) / 2;

//   figure
//     .style("height", figureHeight + "px")
//     .style("top", figureMarginTop + "px");

//   // 3. tell scrollama to update new element dimensions
//   scroller.resize();
// }

// // scrollama event handlers
// function handleStepEnter(response) {
//   console.log(response);
//   // response = { element, direction, index }

//   // add color to current step only
//   step.classed("is-active", function (d, i) {
//     return i === response.index;
//   });

//   // update graphic based on step
//   // figure.select("p").text(response.index + 1);

//   if (response.index === 0) {
//     graphic.classList.toggle(".active");
//     return (graphic.src = "/images/step_1.jpg");
//   } else if (response.index === 1) {
//     return (graphic.src = "/images/step_2.jpg");
//   } else if (response.index === 2) {
//     return (graphic.src = "/images/step_3.jpg");
//   } else if (response.index === 3) {
//     return (graphic.src = "/images/fracking-infographic.png");
//   }
// }

// function setupStickyfill() {
//   d3.selectAll(".sticky").each(function () {
//     Stickyfill.add(this);
//   });
// }

// function init() {
//   setupStickyfill();

//   // 1. force a resize on load to ensure proper dimensions are sent to scrollama
//   handleResize();

//   // 2. setup the scroller passing options
//   // 		this will also initialize trigger observations
//   // 3. bind scrollama event handlers (this can be chained like below)
//   scroller
//     .setup({
//       graphic: ".scroll__graphic",
//       container: "#scrolly",
//       text: ".scroll__text",
//       step: "#scrolly article .step",
//       offset: 0.5,
//       debug: false,
//     })
//     .onStepEnter(handleStepEnter);

//   // setup resize event
//   window.addEventListener("resize", handleResize);
// }

// // kick things off
// init();
