const gridOne = document.querySelector("#gallery .fa-square");
const gridTwo = document.querySelector("#gallery .fa-th-large");
const gridThree = document.querySelector("#gallery .fa-th");
const galleryContainer = document.querySelector("#gallery .gallery-container");

function btnReset() {
  gridOne.classList.remove("active");
  gridTwo.classList.remove("active");
  gridThree.classList.remove("active");
}

gridOne.addEventListener("click", () => {
  btnReset();
  gridOne.classList.add("active");
  galleryContainer.style.gridTemplateColumns = "1fr";
});
gridTwo.addEventListener("click", () => {
  btnReset();
  gridTwo.classList.add("active");
  galleryContainer.style.gridTemplateColumns = "1fr 1fr";
});
gridThree.addEventListener("click", () => {
  btnReset();
  gridThree.classList.add("active");
  galleryContainer.style.gridTemplateColumns = "1fr 1fr 1fr";
});
