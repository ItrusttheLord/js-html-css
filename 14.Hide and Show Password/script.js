"use strict";

const inputBox = document.querySelector(".input-box");
let password = document.getElementById("password");
let eyeIcon = document.getElementById("eyeIcon");

console.log(inputBox);
const showPassword = function () {
  if (password.type === "password") {
    password.type = "text";
    eyeIcon.src = "images/eye-open.png";
  } else {
    password.type = "password";
    eyeIcon.src = "images/eye-close.png";
  }
};
eyeIcon.addEventListener("click", () => showPassword());
