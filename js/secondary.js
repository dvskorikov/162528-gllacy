var login_form = document.querySelector(".top-menu-login-form");
var login_btn = document.querySelector(".login-btn");
var login = login_form.querySelector("[name=login-form-email]");
var passwd = login_form.querySelector("[name=login-form-passwd]");

var bg_color = document.querySelector(".body-slider-wrapper-secondary");
var slider = localStorage.getItem("slider");

switch (slider) {
  case "slider1": {
    bg_color.classList.remove("slider2-color")
    bg_color.classList.remove("slider3-color")
    bg_color.classList.add("slider1-color")
    break;
    }
  case "slider2": {
    bg_color.classList.remove("slider1-color")
    bg_color.classList.remove("slider3-color")
    bg_color.classList.add("slider2-color")
    break;
    }
  case "slider3": {
    bg_color.classList.remove("slider1-color")
    bg_color.classList.remove("slider2-color")
    bg_color.classList.add("slider3-color")
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
