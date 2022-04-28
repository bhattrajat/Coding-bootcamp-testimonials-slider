//Custom slider - For index.html
const sliderContainer = document.querySelector(".slider-container");
const sliderItemsContainer = document.querySelector(".slider-items");
const totalSliderItems = document.querySelectorAll(
  ".slider-items .slider-item"
).length;
const prevButton = document.querySelector(".slider-container .prev");
const nextButton = document.querySelector(".slider-container .next");
if (sliderContainer) {
  let counter = 1;
  if (counter <= 1) {
    prevButton.disabled = true;
  }
  const sliderContainerWidth = sliderContainer.clientWidth;
  nextButton.addEventListener("click", () => {
    console.log("next clicked");
    console.log(counter);
    sliderItemsContainer.style.transform = `translateX(-${
      sliderContainerWidth * counter
    }px)`;
    counter++;
    if (counter >= totalSliderItems) {
      nextButton.disabled = true;
    }
    prevButton.disabled = false;
  });

  prevButton.addEventListener("click", () => {
    counter--;
    console.log("prev clicked");
    sliderItemsContainer.style.transform = `translateX(${
      sliderContainerWidth * (counter - 1)
    }px)`;
    if (counter <= 1) {
      prevButton.disabled = true;
    }
    nextButton.disabled = false;
  });
} else {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    // cubeEffect: {
    //   slideShadows: false,
    // },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    // },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
  });
}
