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
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider-btn.left");
const btnRight = document.querySelector(".slider-btn.right");

let gap = 16;
let slideWidth = 0;
let currentSlide = 0;
let isMoving = false;

function calculateSlideWidth() {
  slideWidth = slides[0].offsetWidth + gap;

  // Reposiciona correctamente al cambiar tamaño
  slider.scrollTo({
    left: currentSlide * slideWidth,
    behavior: "auto",
  });
}

function moveSlider() {
  isMoving = true;

  slider.scrollTo({
    left: currentSlide * slideWidth,
    behavior: "smooth",
  });

  setTimeout(() => {
    isMoving = false;
  }, 400);
}

btnRight.addEventListener("click", () => {
  if (isMoving) return;

  if (currentSlide < slides.length - 1) {
    currentSlide++;
    moveSlider();
  }
});

btnLeft.addEventListener("click", () => {
  if (isMoving) return;

  if (currentSlide > 0) {
    currentSlide--;
    moveSlider();
  }
});

// Inicial + responsive
window.addEventListener("load", calculateSlideWidth);
window.addEventListener("resize", calculateSlideWidth);

function updateButtons() {
  btnLeft.disabled = currentSlide === 0;
  btnRight.disabled = currentSlide === slides.length - 1;
}

function moveSlider() {
  isMoving = true;

  slider.scrollTo({
    left: currentSlide * slideWidth,
    behavior: "smooth",
  });

  updateButtons();

  setTimeout(() => {
    isMoving = false;
  }, 400);
}

// Llamar al cargar
updateButtons();
