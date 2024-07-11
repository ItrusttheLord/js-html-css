"use strict";
let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

const validateName = function () {
  let name = document.getElementById("contact-name").value;

  if (name.length === 0) {
    nameError.innerHTML = "Name Required";
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Full Name Required";
    return false;
  }
  nameError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
  return true;
};

const validatePhone = function () {
  let phone = document.getElementById("contact-phone").value;

  if (phone.length === 0) {
    phoneError.innerHTML = "Phone Number Required";
    return false;
  }

  if (phone.length !== 10) {
    phoneError.innerHTML = "Number should 10 digits";
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits";
    return false;
  }
  phoneError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
  return true;
};

const validateEmail = function () {
  let email = document.getElementById("contact-email").value;

  if (email.length === 0) {
    emailError.innerHTML = "email Required";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Invalid Email";
    return false;
  }
  emailError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
  return true;
};

const validateMessage = function () {
  let message = document.getElementById("contact-message").value;
  let required = 30;
  let left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " more characters required";
    return false;
  }

  messageError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
  return true;
};

const validateForm = function () {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Fill the Required fields to Submit";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
};
