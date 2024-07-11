"use strict";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxz-NAubjqMnFP0Zsv6zQuQuTWwQQsRNYiM9rv4_tT9iEwhaLEON5fcx5hjWjeCwDwUbQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank You For Subscribing!";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
