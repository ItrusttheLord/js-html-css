"use strict";

let hours = document.getElementById("hrs");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");

setInterval(() => {
  const now = new Date();

  hours.innerHTML = (now.getHours() < 10 ? "0" : "") + now.getHours();
  minutes.innerHTML = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
  seconds.innerHTML = (now.getSeconds() < 10 ? "0" : "") + now.getSeconds();
}, 1000);
