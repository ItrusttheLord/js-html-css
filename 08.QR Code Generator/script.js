"use strict";
const api_url =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const btnQR = document.querySelector(".qr-btn");
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

const generateQR = function () {
  if (qrText.value.length > 0) {
    qrImage.src = api_url + qrText.value;
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");

    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
};

btnQR.addEventListener("click", () => generateQR());
