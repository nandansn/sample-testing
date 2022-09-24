import { products } from './data.js'



let result = document.querySelector("span#result");
let selectCategory = document.querySelector("#category");


let plusBtn
let minusBtn 



let cartMessage

let cartCount = 0;

// category selection
selectCategory.addEventListener("change", (e) => {
    e.preventDefault()
  cartCount = 0;
  let selectedValue = e.target.value;
  let cartContaner = document.getElementById("cart-container");
  cartContaner.style.display = "none";

  
    if (selectedValue !== "none") {
      result.textContent = `User selected the category : ${selectedValue}`;
      createProductContainer(selectedValue);
    }

  document.querySelector("#item-count").textContent = cartCount;
  console.log(cartCount);


});

function createProductContainer(name) {
    
    let item = {...products.find(product => product.type === name)};

    let prodContainer = document.getElementById("product");

    prodContainer.style.visibility = "visible"
    prodContainer.querySelector("img").src = item.img_src
    prodContainer.querySelector("#title").textContent = item.title
    prodContainer.querySelector("#price").textContent = item.price
    prodContainer.querySelector("#quantity").textContent = item.available_quantity;

    

        
}


let counter = document.getElementById("quantity-counter");

counter.style.display = "block";
document.getElementById("item-count").style.display = "block";

plusBtn = document.querySelector("#plus");
minusBtn = document.querySelector("#minus");
cartMessage = document.querySelector("span#cart-message");

plusBtn.addEventListener("click", () => {
  cartCount = parseInt(document.querySelector("#item-count").textContent);
  ++cartCount;
  document.querySelector("#item-count").textContent = cartCount;
});

minusBtn.addEventListener("click", () => {
  cartCount = parseInt(document.querySelector("#item-count").textContent);
  --cartCount;
  document.querySelector("#item-count").textContent = cartCount;
});

let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  cartCount = document.querySelector("#item-count").textContent;
  let cartContaner = document.getElementById("cart-container");
  cartContaner.style.display = "block";
  cartMessage.textContent = `Total ${
    document.querySelector("#category").value
  } added to the cart: ${cartCount}`;
});


// quantity update






// add product to cart





