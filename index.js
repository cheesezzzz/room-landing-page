"use strict";

const header = document.querySelector("header");
const showMenuNavigation = document.getElementById("menu-nav");
const closeBtn = document.getElementById("close-btn");
const body = document.getElementById("body");
const loader = document.querySelector(".loader");
const loaderPanel = document.querySelector(".loader__panel");
const blur = document.getElementById("main");
const logo = document.getElementById("logo");
const menuButton = document.getElementById("menu-btn");

const openMenuFunction = function () {
  showMenuNavigation.classList.remove("opacity-0");
  showMenuNavigation.classList.add("opacity-100");
  showMenuNavigation.classList.remove("invisible");
  header.classList.remove("w-full");
  header.classList.add("w-30");
  body.classList.add("overflow-hidden");
  blur.classList.add("overlay");
  logo.classList.add("hidden");
};

const closeMenuFunction = function () {
  showMenuNavigation.classList.remove("opacity-100");
  showMenuNavigation.classList.add("opacity-0");
  showMenuNavigation.classList.remove("visible");
  header.classList.remove("w-30");
  header.classList.add("w-full");
  blur.classList.remove("overlay");
  body.classList.remove("overflow-hidden");
  logo.classList.remove("hidden");
};

// ! Preloader
window.onload = () => {
  loader.classList.add("is-hidden");
};

// ! Menu Button and Navigation
let isMenuOpen = false;

menuButton.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    menuButton.classList.add("open");
  } else {
    menuButton.classList.remove("open");
  }

  if (showMenuNavigation.classList.contains("opacity-0")) {
    openMenuFunction();
  } else if (showMenuNavigation.classList.contains("opacity-100")) {
    closeMenuFunction();
  }
});

//! Slider
const slider = document.querySelector(".slide");
const slides = document.querySelectorAll(".slide");

const btnLeft = document.querySelector(".btn__left");
const btnRight = document.querySelector(".btn__right");
let curSlide = 0;
const maxSlides = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${200  * (i - slide)}%)`)
  );
};

goToSlide(0);

const nextSlide = function () {
  if (maxSlides - 1 === curSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlides - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
