let menuBar = document.getElementById("side-navbar-activate");
let closeBtn = document.getElementById("x-btn");
let sideContent = document.getElementById("sideContent");

menuBar.addEventListener("click", function () {
  sideContent.style.left = "0";
});

closeBtn.addEventListener("click", function () {
  sideContent.style.left = "-300px";
});

let crossBtn = document.getElementById("crossBtn");
let offerBar = document.getElementById("top");
crossBtn.addEventListener("click", function () {
  offerBar.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const checkboxes = document.querySelectorAll(
    "input[type='checkbox'][name='tags']"
  );
  const products = document.querySelectorAll(".product");

  function filterProducts() {
    console.log("Filtering products...");
    const searchedValue = searchInput.value.trim().toLowerCase();

    const selectedTags = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value.trim());

    console.log("Selected Tags:", selectedTags);

    products.forEach((product) => {
      const textContent = product.textContent.toLowerCase();
      const textMatch = textContent.includes(searchedValue);

      const tagElements = product.querySelector("tags");
      const productTags = tagElements
        ? Array.from(
            tagElements.textContent
              .toLowerCase()
              .split(",")
              .map((tag) => tag.trim())
          )
        : [];

      const tagMatch =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => productTags.includes(tag));

      product.style.display = textMatch && tagMatch ? "block" : "none";
    });
  }

  searchInput.addEventListener("input", filterProducts);
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", filterProducts);
  });
});
