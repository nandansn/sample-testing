let btn = document.querySelector("#btn");
let result = document.querySelector("span#result");

btn.addEventListener("click", () => {
    result.textContent = `User selected the category : ${document.querySelector("#category").value}`;
})