const clearButton = document.getElementById("clearButton");
const textInput = document.getElementById("textInput");
const popup = document.querySelector(".popup2");
const openPopupButton = document.querySelector(".open-popup");
const closePopupButton = document.querySelector(".close2");

clearButton.addEventListener("click", function () {
  textInput.value = "";
});

openPopupButton.addEventListener("click", function () {
  popup.style.display = "block";
});

closePopupButton.addEventListener("click", function () {
  popup.style.display = "none";
});
