var feedback_link = document.querySelector(".feedback-btn");
var overlay = document.querySelector(".overlay");
var feedback = document.querySelector(".feedback-form");
var feedback_form_close = document.querySelector(".feedback-form-close");


feedback_link.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("feedback-form-show");
  feedback.classList.add("feedback-form-show");
});

feedback_form_close.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("feedback-form-show");
  feedback.classList.remove("feedback-form-show");
});
