"use strict";

const submitBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".okBtn");
let popupContainer = document.getElementById("popup");

const openPopup = function () {
  popup.classList.add("open-popup");
};

const closePopup = function () {
  popup.classList.remove("open-popup");
};

submitBtn.addEventListener("click", () => openPopup());
closeBtn.addEventListener("click", () => closePopup());
