const meat = document.querySelector("#meat-s");
const bottomSauce = document.querySelector("#bottom-sauce-s");
const topSauce = document.querySelector("#top-sauce-s");
const cheese = document.querySelector("#cheese-s");
const toppings = document.querySelector("#toppings-s");

const addMeatBtn = document.querySelector("#btn-add-meat");
const addBottomSauceBtn = document.querySelector("#btn-add-bottom");
const addTopSauceBtn = document.querySelector("#btn-add-top");
const addCheeseBtn = document.querySelector("#btn-add-cheese");
const addToppingsBtn = document.querySelector("#btn-add-toppings");

const divMeat = document.querySelector("#meat-container");
const divBottomSauce = document.querySelector("#bottom-sauce-container");
const divTopSauce = document.querySelector("#top-sauce-container");
const divCheese = document.querySelector("#cheese-container");
const divToppings = document.querySelector("#toppings-containe");


const deleteMeat = document.querySelectorAll("#delete-meat");
const deleteBottom = document.querySelectorAll("#delete-bottom");
const deleteTop = document.querySelectorAll("#delete-top");
const deleteCheese = document.querySelectorAll("#delete-cheese");
const deleteToppings = document.querySelectorAll("#delete-toppings");

const add = (loc,ig) => {
    loc.appendChild(ig.cloneNode(true));
    
}

addMeatBtn.addEventListener("click", () =>add(divMeat,meat) );
addBottomSauceBtn.addEventListener("click", () => add(divBottomSauce, bottomSauce));
addTopSauceBtn.addEventListener("click", () => add(divTopSauce, topSauce));
addCheeseBtn.addEventListener("click", () => add(divCheese, cheese));
addToppingsBtn.addEventListener("click", () => add(divToppings, toppings));


