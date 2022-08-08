var elForm = document.querySelector(".site-form");
var elSelectDay = document.querySelector(".select-day");
var elP = document.querySelector(".text");

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  
 var translateDay = elSelectDay.value;
 var resultTranslate = translateDay;

  elP.textContent = resultTranslate;
})