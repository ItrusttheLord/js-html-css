"use strict";

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

const stopWatch = function () {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = h + ":" + m + ":" + s;
};

const watchStart = function () {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
};

const watchStop = function () {
  clearInterval(timer);
};

const watchReset = function () {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
};

startBtn.addEventListener("click", () => watchStart());
stopBtn.addEventListener("click", () => watchStop());
resetBtn.addEventListener("click", () => watchReset());
