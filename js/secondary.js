var login_form = document.querySelector(".top-menu-login-form");
var login_btn = document.querySelector(".login-btn");
var login = login_form.querySelector("[name=login-form-email]");
var passwd = login_form.querySelector("[name=login-form-passwd]");

var slider1 = document.getElementById("slider-btn1");
var slider2 = document.getElementById("slider-btn2");
var slider3 = document.getElementById("slider-btn3");
var slider = localStorage.getItem("slider");

switch (slider) {
  case "slider1": {
    slider1.checked = true
    break;
    }
  case "slider2": {
    slider2.checked = true
    break;
    }
  case "slider3": {
    slider3.checked = true
    break;
    }
};

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
      console.log("Нужно заполнить оба поля логин/пароль");
      login_form.classList.remove("login-form-error");
      login_form.offsetWidth = login_form.offsetWidth;
      login_form.classList.add("login-form-error");
    } else {
        localStorage.setItem("login", login.value);
        login_form.classList.remove("login-form-error");
      }
});
