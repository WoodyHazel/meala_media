// Loading Screen
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
    (currentScroll < lastScroll || currentScroll == 0) &&
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

// Showcase
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

// Offerings
const card1Details = document.querySelector(".card1-details");
const card1DetailsBtn = document.querySelector(".card1-details-btn");
const card1Pricing = document.querySelector(".card1-pricing");
const card1PricingBtn = document.querySelector(".card1-pricing-btn");

const card2Details = document.querySelector(".card2-details");
const card2DetailsBtn = document.querySelector(".card2-details-btn");
const card2Pricing = document.querySelector(".card2-pricing");
const card2PricingBtn = document.querySelector(".card2-pricing-btn");

const card3Details = document.querySelector(".card3-details");
const card3DetailsBtn = document.querySelector(".card3-details-btn");
const card3Pricing = document.querySelector(".card3-pricing");
const card3PricingBtn = document.querySelector(".card3-pricing-btn");

card1DetailsBtn.addEventListener("click", () => {
  if (card1Details.classList.contains("hidden-down")) {
    if (!card1Pricing.classList.contains("hidden-down")) {
      card1Pricing.classList.add("hidden-down");
    }
    card1Details.classList.remove("hidden-down");
  } else {
    card1Details.classList.add("hidden-down");
  }
});
card1PricingBtn.addEventListener("click", () => {
  if (card1Pricing.classList.contains("hidden-down")) {
    if (!card1Details.classList.contains("hidden-down")) {
      card1Details.classList.add("hidden-down");
    }
    card1Pricing.classList.remove("hidden-down");
  } else {
    card1Pricing.classList.add("hidden-down");
  }
});

card2DetailsBtn.addEventListener("click", () => {
  if (card2Details.classList.contains("hidden-down")) {
    if (!card2Pricing.classList.contains("hidden-down")) {
      card2Pricing.classList.add("hidden-down");
    }
    card2Details.classList.remove("hidden-down");
  } else {
    card2Details.classList.add("hidden-down");
  }
});
card2PricingBtn.addEventListener("click", () => {
  if (card2Pricing.classList.contains("hidden-down")) {
    if (!card2Details.classList.contains("hidden-down")) {
      card2Details.classList.add("hidden-down");
    }
    card2Pricing.classList.remove("hidden-down");
  } else {
    card2Pricing.classList.add("hidden-down");
  }
});
card3DetailsBtn.addEventListener("click", () => {
  if (card3Details.classList.contains("hidden-down")) {
    if (!card3Pricing.classList.contains("hidden-down")) {
      card3Pricing.classList.add("hidden-down");
    }
    card3Details.classList.remove("hidden-down");
  } else {
    card3Details.classList.add("hidden-down");
  }
});
card3PricingBtn.addEventListener("click", () => {
  if (card3Pricing.classList.contains("hidden-down")) {
    if (!card3Details.classList.contains("hidden-down")) {
      card3Details.classList.add("hidden-down");
    }
    card3Pricing.classList.remove("hidden-down");
  } else {
    card3Pricing.classList.add("hidden-down");
  }
});
// Gallery
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
