// Home

const showcasePrev = document.querySelector(".showcase .left-arrow");
const showcaseNext = document.querySelector(".showcase .right-arrow");
const showcaseImgs = document.querySelectorAll(".showcase .showcase-img");
const autoSlide = true;
const intervalTime = 5000;
let slideInterval;

function prevShowcaseImg() {
  const activeSlide = document.querySelector(".active");
  activeSlide.classList.remove("active");
  if (activeSlide.previousElementSibling) {
    activeSlide.previousElementSibling.classList.add("active");
  } else {
    showcaseImgs[showcaseImgs.length - 1].classList.add("active");
  }
}
function nextShowcaseImg() {
  const activeSlide = document.querySelector(".active");
  activeSlide.classList.remove("active");
  if (activeSlide.nextElementSibling) {
    activeSlide.nextElementSibling.classList.add("active");
  } else {
    showcaseImgs[0].classList.add("active");
  }
  setTimeout(() => activeSlide.classList.remove("active"));
}

showcasePrev.addEventListener("click", () => {
  prevShowcaseImg();
  if (autoSlide) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextShowcaseImg, intervalTime);
  }
});
showcaseNext.addEventListener("click", () => {
  nextShowcaseImg();
  if (autoSlide) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextShowcaseImg, intervalTime);
  }
});

if (autoSlide) {
  slideInterval = setInterval(nextShowcaseImg, intervalTime);
}
