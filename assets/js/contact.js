// Menu Bar Slider

let menuBar = document.getElementById("side-navbar-activate");
let closeBtn = document.getElementById("rows");
let sideContent = document.getElementById("sideContent");

menuBar.addEventListener("click", function () {
  sideContent.style.left = "0%";
});
closeBtn.addEventListener("click", function () {
  sideContent.style.left = "-50%";
});

let crossBtn = document.getElementById("crossBtn");
let offerBar = document.getElementById("top");
crossBtn.addEventListener("click", function () {
  offerBar.style.display = "none";
});
