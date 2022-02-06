const card1Details = document.querySelector(".card1 .details");
const card1DetailsBtn = document.querySelector(".card1 .details-btn");
const card1Pricing = document.querySelector(".card1 .pricing");
const card1PricingBtn = document.querySelector(".card1 .pricing-btn");

const card2Details = document.querySelector(".card2 .details");
const card2DetailsBtn = document.querySelector(".card2 .details-btn");
const card2Pricing = document.querySelector(".card2 .pricing");
const card2PricingBtn = document.querySelector(".card2 .pricing-btn");

const card3Details = document.querySelector(".card3 .details");
const card3DetailsBtn = document.querySelector(".card3 .details-btn");
const card3Pricing = document.querySelector(".card3 .pricing");
const card3PricingBtn = document.querySelector(".card3 .pricing-btn");

card1DetailsBtn.addEventListener("click", () => {
  if (card1Details.classList.contains("slide-down")) {
    if (!card1Pricing.classList.contains("slide-down")) {
      card1Pricing.classList.add("slide-down");
    }
    card1Details.classList.remove("slide-down");
  } else {
    card1Details.classList.add("slide-down");
  }
});
card1PricingBtn.addEventListener("click", () => {
  if (card1Pricing.classList.contains("slide-down")) {
    if (!card1Details.classList.contains("slide-down")) {
      card1Details.classList.add("slide-down");
    }
    card1Pricing.classList.remove("slide-down");
  } else {
    card1Pricing.classList.add("slide-down");
  }
});

card2DetailsBtn.addEventListener("click", () => {
  if (card2Details.classList.contains("slide-down")) {
    if (!card2Pricing.classList.contains("slide-down")) {
      card2Pricing.classList.add("slide-down");
    }
    card2Details.classList.remove("slide-down");
  } else {
    card2Details.classList.add("slide-down");
  }
});
card2PricingBtn.addEventListener("click", () => {
  if (card2Pricing.classList.contains("slide-down")) {
    if (!card2Details.classList.contains("slide-down")) {
      card2Details.classList.add("slide-down");
    }
    card2Pricing.classList.remove("slide-down");
  } else {
    card2Pricing.classList.add("slide-down");
  }
});
card3DetailsBtn.addEventListener("click", () => {
  if (card3Details.classList.contains("slide-down")) {
    if (!card3Pricing.classList.contains("slide-down")) {
      card3Pricing.classList.add("slide-down");
    }
    card3Details.classList.remove("slide-down");
  } else {
    card3Details.classList.add("slide-down");
  }
});
card3PricingBtn.addEventListener("click", () => {
  if (card3Pricing.classList.contains("slide-down")) {
    if (!card3Details.classList.contains("slide-down")) {
      card3Details.classList.add("slide-down");
    }
    card3Pricing.classList.remove("slide-down");
  } else {
    card3Pricing.classList.add("slide-down");
  }
});
