"use strict";

const calcBtn = document.querySelector(".btn-calc");
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

const calcAge = function () {
  let birthDate = new Date(userInput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let month, day, year;

  year = y2 - y1;

  if (m2 >= m1) {
    month = m2 - m1;
  } else {
    year--;
    month = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    day = d2 - d1;
  } else {
    month--;
    day = getDaysInMonth(y1, m1) + d2 - d1;
  }

  if (month < 0) {
    month = 11;
    year--;
  }

  result.innerHTML = `Your Are <span>${year}</span> years, <span>${month}</span> months and <span>${day}</span> days old.`;

  if (!userInput.value) return (result.innerHTML = "You must enter Birthdate!");
};

const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();

calcBtn.addEventListener("click", () => calcAge());
