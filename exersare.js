// meatSelect.addEventListener("change", () => {
//     const meatOption = meatSelect.querySelector("option:checked");
//     addImage(meatContainer, meatOption);
// });

// bottomSelect.addEventListener("change", () => {
//     const bottomSauceOption = bottomSelect.querySelector("option:checked");
//     addImage(bottomContainer, bottomSauceOption);
// });

// topSelect.addEventListener("change", () => {
//     const topSauceOption = topSelect.querySelector("option:checked");
//     addImage(topContainer, topSauceOption);
// });

// cheeseSelect.addEventListener("change", () => {
//     const cheeseOption = cheeseSelect.querySelector("option:checked");
//     addImage(cheeseContainer, cheeseOption);
// });

// toppingsSelect.addEventListener("change", () => {
//     const toppingsOption = toppingsSelect.querySelector("option:checked");
//     addImage(toppingsContainer, toppingsOption);
// });


// const selectContainers = [meatContainer, bottomContainer, topContainer, cheeseContainer, toppingsContainer];
// const selectOptions = [meatSelect, bottomSelect, topSelect, cheeseSelect, toppingsSelect];

// selectOptions.forEach((select, index) => {
//   select.addEventListener("change", () => {
//     const option = select.querySelector("option:checked");
//     const options = document.querySelectorAll(`#${select.id} option:checked`);

//     addImage(selectContainers[index], option, options);
//   });
// });




//addItem 
// const meat = document.querySelector("#meat-s");
// const bottomSauce = document.querySelector("#bottom-sauce-s");
// const topSauce = document.querySelector("#top-sauce-s");
// const cheese = document.querySelector("#cheese-s");
// const toppings = document.querySelector("#toppings-s");

// const addMeatBtn = document.querySelector("#btn-add-meat");
// const addBottomSauceBtn = document.querySelector("#btn-add-bottom");
// const addTopSauceBtn = document.querySelector("#btn-add-top");
// const addCheeseBtn = document.querySelector("#btn-add-cheese");
// const addToppingsBtn = document.querySelector("#btn-add-toppings");

// const divMeat = document.querySelector("#meat-container");
// const divBottomSauce = document.querySelector("#bottom-sauce-container");
// const divTopSauce = document.querySelector("#top-sauce-container");
// const divCheese = document.querySelector("#cheese-container");
// const divToppings = document.querySelector("#toppings-containe");

// const divDelMeat =document.querySelector("#del-meat-div")
// const divDelBottom =document.querySelector("#delete-bottom")
// const divDelTop =document.querySelector("#delete-top")
// const divDelChese =document.querySelector("#delete-cheese")
// const divDelToppings =document.querySelector("#delete-toppings")

// //functia de a adauga inca un select
// const add = (loc, ig, deleteDiv) => {
   
//     const cloned = ig.cloneNode(true);
//     cloned.setAttribute('data-index', loc.childElementCount);
    
//     const btnClone = deleteDiv.cloneNode(true)
//     btnClone.setAttribute('data-index', loc.childElementCount)

//     loc.appendChild(cloned);
//     loc.appendChild(btnClone);

// //Conditia ca daca mai apare un select sa apara butonul care sa ne permita sa stergem unul din selecturi   
//  const all = loc.querySelectorAll(".img-delete")
//     if (all.length > 1) {  
        
//         all.forEach((item) => item.classList.remove("del"))
// }

// //Functia pentru a strge un slect
//     const deleteItem = (location) => {
//         const btnCloneIndex = btnClone.dataset.index
//         const itemToDelete = location.querySelectorAll(`[data-index="${btnCloneIndex}"]`);
    
//      itemToDelete.forEach(element => {
//          element.remove()
//         });
        
// //Conditia ca daca este numai un select sa dispara butonul de stergere
//         const all = loc.querySelectorAll(".img-delete")
//         if (all.length === 1) {
//             all[0].classList.add("del");
//         }
        
//         }

//         btnClone.addEventListener("click", () => deleteItem(loc))

// }

// addMeatBtn.addEventListener("click", () => add(divMeat,meat,divDelMeat) );
// addBottomSauceBtn.addEventListener("click", () => add(divBottomSauce, bottomSauce, divDelBottom));
// addTopSauceBtn.addEventListener("click", () => add(divTopSauce, topSauce ,divDelTop));
// addCheeseBtn.addEventListener("click", () => add(divCheese, cheese ,divDelChese));
// addToppingsBtn.addEventListener("click", () => add(divToppings, toppings ,divDelToppings));





//addItem versiunea 2
// document.addEventListener("DOMContentLoaded", function() {
//     const addMeatBtn = document.querySelector("#btn-add-meat");
//     const addBottomSauceBtn = document.querySelector("#btn-add-bottom");
//     const addTopSauceBtn = document.querySelector("#btn-add-top");
//     const addCheeseBtn = document.querySelector("#btn-add-cheese");
//     const addToppingsBtn = document.querySelector("#btn-add-toppings");

//     const divMeat = document.querySelector("#meat-container");
//     const divBottomSauce = document.querySelector("#bottom-sauce-container");
//     const divTopSauce = document.querySelector("#top-sauce-container");
//     const divCheese = document.querySelector("#cheese-container");
//     const divToppings = document.querySelector("#toppings-containe");

//     const divDelMeat = document.querySelector("#del-meat-div");
//     const divDelBottom = document.querySelector("#delete-bottom");
//     const divDelTop = document.querySelector("#delete-top");
//     const divDelCheese = document.querySelector("#delete-cheese");
//     const divDelToppings = document.querySelector("#delete-toppings");

//     const meat = document.querySelector("#meat-s")
//     const bottomSauce = document.querySelector("#bottom-sauce-s")
//     const topSauce = document.querySelector("#top-sauce-s")
//     const cheese= document.querySelector("#cheese-s")
//     const toppings = document.querySelector("#toppings-s")

//     const add = (loc, ig, deleteDiv) => {
//         const newIndex = loc.childElementCount;

//         const newHTML = `
//             <div data-index="${newIndex}">
//                 ${ig.innerHTML}
//             </div>
//             <div data-index="${newIndex}" class="img-delete">
//                 ${deleteDiv.innerHTML}
//             </div>
//         `;

//         loc.innerHTML += newHTML;

//         const all = loc.querySelectorAll(".img-delete");
//         if (all.length > 1) {
//             all.forEach((item) => item.classList.remove("del"));
//         }

//         const deleteItem = (location) => {
//             const itemToDelete = location.querySelectorAll(`[data-index="${newIndex}"]`);

//             itemToDelete.forEach(element => {
//                 element.remove();
//             });

//             const all = loc.querySelectorAll(".img-delete");
//             if (all.length === 1) {
//                 all[0].classList.add("del");
//             }
//         }
//         all[newIndex].addEventListener("click", () => deleteItem(loc));

//     }

//     addMeatBtn.addEventListener("click", () => add(divMeat, meat, divDelMeat));
//     addBottomSauceBtn.addEventListener("click", () => add(divBottomSauce, bottomSauce, divDelBottom));
//     addTopSauceBtn.addEventListener("click", () => add(divTopSauce, topSauce, divDelTop));
//     addCheeseBtn.addEventListener("click", () => add(divCheese, cheese, divDelCheese));
//     addToppingsBtn.addEventListener("click", () => add(divToppings, toppings, divDelToppings));
// });
