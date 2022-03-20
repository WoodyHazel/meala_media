// Header
const mainHeader = document.querySelector("#main-header");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (
    currentScroll > lastScroll &&
    !mainHeader.classList.contains("hide") &&
    !headerNav.classList.contains("open") &&
    currentScroll > 0
  ) {
    mainHeader.classList.add("hide");
  } else if (
    currentScroll < lastScroll &&
    mainHeader.classList.contains("hide")
  ) {
    mainHeader.classList.remove("hide");
    mainHeader.classList.remove("transparent");
  } else if (currentScroll == 0) {
    mainHeader.classList.add("transparent");
  }
  lastScroll = currentScroll;
});

// Header - Menu

const headerNav = document.querySelector(".header-nav");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  headerNav.classList.toggle("open");
  hamburger.classList.toggle("fa-bars");
  hamburger.classList.toggle("fa-times");
}
