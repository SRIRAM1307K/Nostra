let crossBtn = document.getElementById("crossBtn");
let offerBar = document.getElementById("top");
crossBtn.addEventListener("click", function () {
  offerBar.style.display = "none";
});

// Image Slider
let leftBtn = document.getElementById("sliderLeftActivate");
let images = document.getElementById("imageContainer");

leftBtn.addEventListener("click", function () {
  images.style.marginLeft = "-100vw";
});

let rightBtn = document.getElementById("sliderRightActivate");
let image1 = document.getElementById("imageContainer");

rightBtn.addEventListener("click", function () {
  image1.style.marginRight = "-100vw";
});

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
