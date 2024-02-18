import { dataCards } from "./data.js";

document.querySelectorAll(".content__right-item").forEach((item, index) => {
  const data = dataCards[index];
  const hasBarometer = data.barometer;
  const hasSpecialBarometer = data.specialBarometer;
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

document
  .querySelector(".header__input")
  .addEventListener("input", (e) => console.log(e.target.value));
