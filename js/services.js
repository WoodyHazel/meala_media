const detailsBtns = document.querySelectorAll(".details-btn");
const pricingBtns = document.querySelectorAll(".pricing-btn");

detailsBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (
      e.target.parentElement.previousElementSibling.children[0].classList.contains(
        "slide-down"
      )
    ) {
      openDetails(e);
    } else {
      closeDetails(e);
    }
  })
);
pricingBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (
      e.target.parentElement.previousElementSibling.children[1].classList.contains(
        "slide-down"
      )
    ) {
      openPricing(e);
    } else {
      closePricing(e);
    }
  })
);

function openDetails(e) {
  if (
    !e.target.parentElement.previousElementSibling.children[1].classList.contains(
      "slide-down"
    )
  ) {
    closePricing(e);
    e.target.parentElement.previousElementSibling.children[0].classList.remove(
      "slide-down"
    );
  } else {
    e.target.parentElement.previousElementSibling.children[0].classList.remove(
      "slide-down"
    );
  }
}
function closeDetails(e) {
  e.target.parentElement.previousElementSibling.children[0].classList.add(
    "slide-down"
  );
}
function openPricing(e) {
  if (
    !e.target.parentElement.previousElementSibling.children[0].classList.contains(
      "slide-down"
    )
  ) {
    closeDetails(e);
    e.target.parentElement.previousElementSibling.children[1].classList.remove(
      "slide-down"
    );
  } else {
    e.target.parentElement.previousElementSibling.children[1].classList.remove(
      "slide-down"
    );
  }
}
function closePricing(e) {
  e.target.parentElement.previousElementSibling.children[1].classList.add(
    "slide-down"
  );
}
