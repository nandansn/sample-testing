let btn = document.querySelector("#btn");
let result = document.querySelector("span#result");
let cart = document.querySelector("span#cart-message");

let select = document.querySelector("#category");


let plusBtn = document.querySelector("#plus");
let minusBtn = document.querySelector("#minus");

let cartCount = 0

select.addEventListener("change", () => {
    
  cartCount = 0;
  let selectedValue = document.querySelector("#category").value

  if (selectedValue !== 'none') {
    result.textContent = `User selected the category : ${selectedValue}`;
  }
  
  document.querySelector("#item-count").textContent = cartCount
});



btn.addEventListener("click", () => {
    cartCount = document.querySelector("#item-count").textContent;
    cart.textContent = `Total ${
      document.querySelector("#category").value
    } added to the cart: ${cartCount}`;
})


plusBtn.addEventListener("click", () => {
  ++cartCount;
  document.querySelector("#item-count").textContent = cartCount;
});


minusBtn.addEventListener("click", () => {
  --cartCount;
  document.querySelector("#item-count").textContent = cartCount;
});


