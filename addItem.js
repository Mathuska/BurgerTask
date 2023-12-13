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

const divDelMeat =document.querySelector("#del-meat-div")
const divDelBottom =document.querySelector("#delete-bottom")
const divDelTop =document.querySelector("#delete-top")
const divDelChese =document.querySelector("#delete-cheese")
const divDelToppings =document.querySelector("#delete-toppings")

//functia de a adauga inca un select
const add = (loc, ig, deleteDiv) => {
   
    const cloned = ig.cloneNode(true);
    cloned.setAttribute('data-index', loc.childElementCount);
    
    const btnClone = deleteDiv.cloneNode(true)
    btnClone.setAttribute('data-index', loc.childElementCount)

    loc.appendChild(cloned);
    loc.appendChild(btnClone);

//Conditia ca daca mai apare un select sa apara butonul care sa ne permita sa stergem unul din selecturi   
 const all = loc.querySelectorAll(".img-delete")
    if (all.length > 1) {  
        console.log(all);
        all.forEach((item) => item.classList.remove("del"))
}

//Functia pentru a strge un slect
    const deleteItem = (location) => {
        const btnCloneIndex = btnClone.dataset.index
        const itemToDelete = location.querySelectorAll(`[data-index="${btnCloneIndex}"]`);
    
     itemToDelete.forEach(element => {
         element.remove()
        });
        
//Conditia ca daca este numai un select sa dispara butonul de stergere
        const all = loc.querySelectorAll(".img-delete")
        if (all.length === 1) {
            all[0].classList.add("del");
        }
        
        }

        btnClone.addEventListener("click", () => deleteItem(loc))

}

addMeatBtn.addEventListener("click", () => add(divMeat,meat,divDelMeat) );
addBottomSauceBtn.addEventListener("click", () => add(divBottomSauce, bottomSauce, divDelBottom));
addTopSauceBtn.addEventListener("click", () => add(divTopSauce, topSauce ,divDelTop));
addCheeseBtn.addEventListener("click", () => add(divCheese, cheese ,divDelChese));
addToppingsBtn.addEventListener("click", () => add(divToppings, toppings ,divDelToppings));



