window.onload = function () {
  document.getElementById("loading").style.display = "none";
};

// Header
const mainHeader = document.querySelector("#main-header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (
    currentScroll > lastScroll &&
    !mainHeader.classList.contains("hide-header")
  ) {
    mainHeader.classList.add("hide-header");
  } else if (
    currentScroll < lastScroll &&
    mainHeader.classList.contains("hide-header")
  ) {
    mainHeader.classList.remove("hide-header");
  }
  lastScroll = currentScroll;
});

const menuIcon = document.querySelector("#menu-icon");
const sideNav = document.querySelector(".side-nav");

menuIcon.addEventListener("click", () => {
  if (sideNav.classList.contains("close-side-nav")) {
    sideNav.classList.remove("close-side-nav");
  } else {
    sideNav.classList.add("close-side-nav");
  }
});

const iconButton = document.querySelector(".close-icon");
iconButton.addEventListener("click", () => {
  if (sideNav.classList.contains("close-side-nav")) {
    sideNav.classList.remove("close-side-nav");
  } else {
    sideNav.classList.add("close-side-nav");
  }
});

const showcaseLeftArrow = document.querySelector("#prev");
const showcaseRightArrow = document.querySelector("#next");
const slides = document.querySelectorAll(".showcase-image");

const nextSlide = () => {
  const activeSlide = document.querySelector(".active-showcase-image");
  activeSlide.classList.remove("active-showcase-image");
  if (activeSlide.nextElementSibling) {
    activeSlide.nextElementSibling.classList.add("active-showcase-image");
  } else {
    slides[0].classList.add("active-showcase-image");
  }
};

const prevSlide = () => {
  const activeSlide = document.querySelector(".active-showcase-image");
  activeSlide.classList.remove("active-showcase-image");
  if (activeSlide.previousElementSibling) {
    activeSlide.previousElementSibling.classList.add("active-showcase-image");
  } else {
    slides[slides.length - 1].classList.add("active-showcase-image");
  }
};
showcaseLeftArrow.addEventListener("click", (e) => {
  prevSlide();
});
showcaseRightArrow.addEventListener("click", (e) => {
  nextSlide();
});

// GALLERY

const extendGalleryBtn = document.querySelector(".extend-gallery");
const collapseGalleryBtn = document.querySelector(".collapse-gallery");
const extendedGallery = document.querySelector(".extended-gallery-container");

extendGalleryBtn.addEventListener("click", () => {
  if (extendedGallery.classList.contains("display-none")) {
    extendedGallery.classList.remove("display-none");
    extendGalleryBtn.innerHTML = "See Less";
  } else if (!extendedGallery.classList.contains("display-none")) {
    extendedGallery.classList.add("display-none");
    extendGalleryBtn.innerHTML = "See More";
  }
});

collapseGalleryBtn.addEventListener("click", () => {
  if (!extendedGallery.classList.contains("display-none")) {
    extendedGallery.classList.add("display-none");
    extendGalleryBtn.innerHTML = "See More";
  }
});
