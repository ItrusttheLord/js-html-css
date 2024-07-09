"use strict";

const successBtn = document.querySelector(".btn-success");
const errorBtn = document.querySelector(".btn-error");
const invalidBtn = document.querySelector(".btn-invalid");

let toastBox = document.getElementById("toast-box");
let successMsg =
  "<i class='fa-solid fa-circle-check'></i> Successfully submitted!";
let errorMsg = "<i class='fa-solid fa-circle-xmark'></i> Please fix the error!";
let invalidMsg =
  " <i class='fa-solid fa-circle-exclamation'></i> Invalid Input, Check again!";

const showToast = function (msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }

  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 5000);
};

successBtn.addEventListener("click", () => showToast(successMsg));

errorBtn.addEventListener("click", () => showToast(errorMsg));

invalidBtn.addEventListener("click", () => showToast(invalidMsg));
