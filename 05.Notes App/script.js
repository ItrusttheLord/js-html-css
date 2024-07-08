const notesContainer = document.querySelector(".notes-container");
const createNoteBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

const displayStorage = function () {
  notesContainer.innerHTML = localStorage.getItem("notes");
};
displayStorage();

const updateStorage = function () {
  localStorage.setItem("notes", notesContainer.innerHTML);
};

createNoteBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "assets/images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
  updateStorage();
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((n) => {
      n.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
