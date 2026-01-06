"use strict";

let lastScroll = 0;
const header = document.querySelector(".header");
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");
const navLinks = document.querySelectorAll(".main-nav-link");

// ==========================
// ALTURA DEL HEADER
// ==========================
function updateHeroHeight() {
  const headerHeight = header.offsetHeight;
  document.documentElement.style.setProperty(
    "--header-height",
    `${headerHeight}px`
  );
}

window.addEventListener("load", updateHeroHeight);
window.addEventListener("resize", updateHeroHeight);

// ==========================
// MENÚ HAMBURGUESA
// ==========================
mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
  });
});

// ==========================
// HEADER SCROLL: APARECER/DESAPARECER
// ==========================
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // Scroll hacia abajo → ocultar
    header.style.transform = "translateY(-100%)";
    header.style.opacity = "0";
  } else {
    // Scroll hacia arriba → mostrar
    header.style.transform = "translateY(0)";
    header.style.opacity = "1";
  }

  lastScroll = currentScroll;
});

const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider-btn.left");
const btnRight = document.querySelector(".slider-btn.right");

const slideWidth = slider.querySelector(".slide").offsetWidth + 16;
// 16 es el gap, ajusta según tu CSS

btnLeft.addEventListener("click", () => {
  slider.scrollBy({ left: -slideWidth, behavior: "smooth" });
});

btnRight.addEventListener("click", () => {
  slider.scrollBy({ left: slideWidth, behavior: "smooth" });
});
