"use strict";

let icon = document.getElementById("icon");

let localData = localStorage.getItem("theme");

const changeMode = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "images/moon.png";
    localStorage.setItem("theme", "light");
  }
};

icon.addEventListener("click", () => changeMode());

const localSto = function () {
  if (localData === "light") {
    icon.src = "images/moon.png";
    document.body.classList.remove("dark-theme");
  } else if (localData === "dark") {
    icon.src = "images/sun.png";
    document.body.classList.add("dark-theme");
  }
};
localSto();
