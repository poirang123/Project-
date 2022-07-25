const nav_menu_btn_menu = document.querySelector(".hamburger");
const nav_menu_btn_close = document.querySelector(".close-btn");

const nav_section = document.querySelector(".header");

nav_menu_btn_menu.addEventListener("click", function () {
  nav_section.classList.add("active");
});

nav_menu_btn_close.addEventListener("click", function () {
  nav_section.classList.remove("active");
});
