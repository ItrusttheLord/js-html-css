"use strict";

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; //thiisis for the cross X icon
    li.appendChild(span);
  }
  inputBox.value = ""; //this is how we clear input field
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    }
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = function () {
  localStorage.setItem("data", listContainer.innerHTML);
};

const displayData = function () {
  listContainer.innerHTML = localStorage.getItem("data");
};
displayData();
