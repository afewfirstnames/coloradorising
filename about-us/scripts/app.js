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
