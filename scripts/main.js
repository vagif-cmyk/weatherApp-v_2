import { dataCard, details } from "./data.js";

document.querySelectorAll(".content__right-item").forEach((item, index) => {
  const data = dataCard[index];
  const hasBarometer = data.barometer;
  const descClass = data.desc.extraText
    ? "content__right-item-extra-desc"
    : "content__right-item-desc";

  item.innerHTML = `
    <div class="content__right-item-title">${data.title}</div>
    <img class="content__right-item-icon" src=${data.icon} alt="иконка">
    <div class="content__right-item-info">${data.mainInfo}</div>
    ${
      hasBarometer
        ? `<div class="content__right-item-barometer-wrap">
    <div class="content__right-item-ball"></div>
    <div class="content__right-item-barometer" style='background: var(${
      data.specialBarometer ? "--barometer-special-bg" : "--barometer-main-bg"
    })'></div>
  </div>`
        : ""
    }
    <div class=${descClass}><span>${data.desc.text}</span><span>${
    data.desc.extraText
  }</span></div>`;
});

document.querySelectorAll(".slider__tabs").forEach((item) => {
  item.addEventListener("click", (e) => {
    const tabs = document.querySelectorAll(".slider__active-tab");
    tabs.forEach((item) => {
      item.classList.remove("slider__active-tab");
    });
    e.currentTarget.classList.add("slider__active-tab");
    setSliderCards(details[e.currentTarget.dataset.id])
  });
});

const sliderList = document.querySelector(".slider__cards-list");
setSliderCards(details.hourly);

function setSliderCards(arr) {
  let result = ``;
  arr.forEach((item) => {
    result +=
      `  <div class="slider__card">
           <div class="slider__card-date">${item.time? item.time: item.date}</div>
           <img class="slider__card-img" src=${item.icon} alt="иконка">
           <div class="slider__card-temp">${item.temp}</div>
         </div>`;
  });
  sliderList.innerHTML = result;
}

document
  .querySelector(".header__input")
  .addEventListener("input", (e) => console.log(e.target.value));
