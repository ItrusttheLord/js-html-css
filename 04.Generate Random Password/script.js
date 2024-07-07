"use strict";

const passwordBox = document.getElementById("password");
const genBtn = document.querySelector(".genBtn");
const copyBtn = document.querySelector(".copyBtn");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_-+={[}]|:;'<,>.?";

const allChars = upperCase + lowerCase + number + symbol;

const generatePassword = function () {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += symbol[Math.floor(Math.random() * symbol.length)];
  }

  passwordBox.value = password;
};

genBtn.addEventListener("click", () => generatePassword());

const copyPassword = function () {
  passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value);
};

copyBtn.addEventListener("click", () => copyPassword());
