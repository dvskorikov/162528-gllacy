"use strict";

var feedback_link = document.querySelector(".feedback-btn");
var overlay = document.querySelector(".overlay");
var login_btn = document.querySelector(".login-btn");
var feedback_form = document.querySelector(".feedback-form");

var slider = localStorage.getItem("slider");
var bg_color = document.querySelector(".body-slider-wrapper-secondary");

if (document.querySelector(".top-menu-login-form")) {
  var login_form = document.querySelector(".top-menu-login-form");
  var login = login_form.querySelector("[name=login-form-email]");
  var passwd = login_form.querySelector("[name=login-form-passwd]");
}

if (document.querySelector(".feedback-form")) {
  var feedback_form_close = feedback_form.querySelector(".feedback-form-close");
}

if (document.getElementById("slider-btn1")) {
  var slider1 = document.getElementById("slider-btn1");
  var slider2 = document.getElementById("slider-btn2");
  var slider3 = document.getElementById("slider-btn3");
}

if (slider1 || slider2 || slider3) {
  slider1.addEventListener("click", function () {
    localStorage.setItem("slider", "slider1");
  });

  slider2.addEventListener("click", function () {
    localStorage.setItem("slider", "slider2");
  });

  slider3.addEventListener("click", function () {
    localStorage.setItem("slider", "slider3");
  });

  switch (slider) {
  case "slider1":
    {
    slider1.checked = true;
    break;
      }
  case "slider2":
    {
    slider2.checked = true;
    break;
      }
  case "slider3":
    {
    slider3.checked = true;
    break;
      }
  }
}

if (bg_color) {
  switch (slider) {
  case "slider1":
    {
    bg_color.classList.remove("slider2-color");
    bg_color.classList.remove("slider3-color");
    bg_color.classList.add("slider1-color");
    break;
      }
  case "slider2":
    {
    bg_color.classList.remove("slider1-color");
    bg_color.classList.remove("slider3-color");
    bg_color.classList.add("slider2-color");
    break;
      }
  case "slider3":
    {
    bg_color.classList.remove("slider1-color");
    bg_color.classList.remove("slider2-color");
    bg_color.classList.add("slider3-color");
    break;
      }
  }
}

if (feedback_link) {
  overlay.addEventListener("click", function () {
    overlay.classList.remove("feedback-form-show");
    feedback_form.classList.remove("feedback-form-show");
  });

  feedback_link.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.classList.add("feedback-form-show");
    feedback_form.classList.add("feedback-form-show");
  });

  feedback_form_close.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.classList.remove("feedback-form-show");
    feedback_form.classList.remove("feedback-form-show");
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27 && feedback_form.classList.contains("feedback-form-show")) {
      overlay.classList.remove("feedback-form-show");
      feedback_form.classList.remove("feedback-form-show");
    }
  });
}

if (login_btn) {
  login_btn.addEventListener("mouseout", function (event) {
    event.preventDefault();
    login_form.classList.remove("login-form-error");
    login.value = localStorage.getItem("login");
    if (!login.value) {
      login.focus();
    } else {
      passwd.focus();
    }
  });

  login_form.addEventListener("submit", function (event) {
    if (!login.value || !passwd.value) {
      event.preventDefault();
      login_form.classList.remove("login-form-error");
      login_form.offsetWidth = login_form.offsetWidth;
      login_form.classList.add("login-form-error");
    } else {
      localStorage.setItem("login", login.value);
      login_form.classList.remove("login-form-error");
    }
  });
}

