// const meatIndex = document.querySelector("#meat-s").dataset.index
// const bottomSauceIndex = document.querySelector("#bottom-sauce-s").dataset.index
// const topSauceIndex = document.querySelector("#top-sauce-s").dataset.index
// const cheeseIndex= document.querySelector("#cheese-s").dataset.index
// const toppingsIndex = document.querySelector("#toppings-s").dataset.index

const meatSelect = document.querySelector("#select-meat");
const bottomSelect = document.querySelector("#select-bottom-sauce");
const topSelect = document.querySelector("#select-top-sauce");
const cheeseSelect = document.querySelector("#select-chesse");
const toppingsSelect = document.querySelector("#select-toppings");

// const meatSelectAll = document.querySelectorAll("#select-meat");
// const bottomSelectAll = document.querySelectorAll("#select-bottom-sauce");
// const topSelectAll = document.querySelectorAll("#select-top-sauce");
// const cheeseSelectAll = document.querySelectorAll("#select-chesse");
// const toppingsSelectAll = document.querySelectorAll("#select-toppings");


const meatContainer = document.querySelector("#img-meat-container");
const bottomContainer = document.querySelector("#img-bottom-container");
const topContainer = document.querySelector("#img-top-container");
const cheeseContainer = document.querySelector("#img-cheese-container");
const toppingsContainer = document.querySelector("#img-toppings-container");


const addImage = (loc, option ) => {
   
loc.innerHTML = `
    <div class="img-ing">
        <img src="${option.dataset.url}" alt="" class="img-ingredients right">
        <div class="name-ing-right">
            <img src="/assets/arrow-right.png" alt="" class="right">
            <span class="right">${option.dataset.name}</span>
        </div>
    </div>
    `;
    

}
// const selectContainers = [meatContainer, bottomContainer, topContainer, cheeseContainer, toppingsContainer];
// const selectOptions = [meatSelect, bottomSelect, topSelect, cheeseSelect, toppingsSelect];

// selectOptions.forEach((select, index) => {
//   select.addEventListener("change", () => {
//     const option = select.querySelector("option:checked");
//     const options = document.querySelectorAll(`#${select.id} option:checked`);

//     addImage(selectContainers[index], option, options);
//   });
// });

meatSelect.addEventListener("change", () => {
    const meatOption = meatSelect.querySelector("option:checked");
    addImage(meatContainer, meatOption);
});

bottomSelect.addEventListener("change", () => {
    const bottomSauceOption = bottomSelect.querySelector("option:checked");
    addImage(bottomContainer, bottomSauceOption);
});

topSelect.addEventListener("change", () => {
    const topSauceOption = topSelect.querySelector("option:checked");
    addImage(topContainer, topSauceOption);
});

cheeseSelect.addEventListener("change", () => {
    const cheeseOption = cheeseSelect.querySelector("option:checked");
    addImage(cheeseContainer, cheeseOption);
});

toppingsSelect.addEventListener("change", () => {
    const toppingsOption = toppingsSelect.querySelector("option:checked");
    addImage(toppingsContainer, toppingsOption);
});