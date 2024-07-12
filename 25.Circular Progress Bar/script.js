"use strict";

const num = document.getElementById("number");
let counter = 0;

setInterval(() => {
  if (counter === 75) {
    clearInterval();
  } else {
    counter += 1;
    num.innerHTML = counter + "%";
  }
}, 40);
