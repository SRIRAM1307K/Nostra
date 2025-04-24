// Menu Bar Slider 

let menuBar = document.getElementById("side-navbar-activate")
let closeBtn = document.getElementById("rows")
let sideContent = document.getElementById("sideContent")

menuBar.addEventListener("click", function(){
    sideContent.style.left="0%"
})
closeBtn.addEventListener("click", function(){
    sideContent.style.left="-50%"
})

let crossBtn = document.getElementById("crossBtn")
let offerBar = document.getElementById("top")
crossBtn.addEventListener("click",function(){
    offerBar.style.display="none"
})

// Search Function 

let productSection = document.getElementById("productSection")

let search  = document.getElementById("search")

let lists = productSection.querySelectorAll("div")

search.addEventListener("keyup",function(){
    let enteredText = event.target.value.toUpperCase()
    for(count=0; count<lists.length; count=count+1){
        if(lists[count].textContent.toUpperCase().indexOf(enteredText)<0){
            lists[count].style.display="none"
        }else{
            lists[count].style.display="block"

        }
    }
})

// CheckBox Function 


// var checkBox = document.getElementsByName("tags")

// for(i=0; i<checkBox.length; i=i+1){
//     checkBox[i].addEventListener("click",function(){
//         if (event.target.checked){
//            checkBox[i].display="none"
//         }else{
            
//         }
//     })
// }

  document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox'][name='tags']");
    const products = document.querySelectorAll(".product");

    // Attach change listener to all checkboxes
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", () => {
        const selectedTags = Array.from(checkboxes)
          .filter(cb => cb.checked)
          .map(cb => cb.value);

        products.forEach(product => {
          const tagText = product.querySelector("tags").textContent;
          const productTags = tagText.split(",").map(tag => tag.trim());

          // If no tags selected, show all products
          if (selectedTags.length === 0) {
            product.style.display = "block";
          } else {
            // Show if any tag matches
            const match = selectedTags.some(tag => productTags.includes(tag));
            product.style.display = match ? "block" : "none";
          }
        });
      });
    });
  });


