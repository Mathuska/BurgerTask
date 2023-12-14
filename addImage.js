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

const meatContainer  = document.querySelector("#meat-container");
const bottomContainer = document.querySelector("#bottom-sauce-container");
const topContainer  = document.querySelector("#top-sauce-container");
const cheeseContainer = document.querySelector("#cheese-container");
const toppingsContainer = document.querySelector("#toppings-container")
 
let meatSelectAll = document.querySelectorAll(".m-s");
let bottomSelectAll = document.querySelectorAll(".b-s-s");
let topSelectAll = document.querySelectorAll(".t-s-s");
let cheeseSelectAll = document.querySelectorAll(".c-s");
let toppingsSelectAll = document.querySelectorAll(".t-s");
    


const meatImgContainer = document.querySelector("#img-meat-container");
const bottomImgContainer = document.querySelector("#img-bottom-container");
const topImgContainer = document.querySelector("#img-top-container");
const cheeseImgContainer = document.querySelector("#img-cheese-container");
const toppingsImgContainer = document.querySelector("#img-toppings-container");


const addImage = (loc, option, childrensContainer , allSelects ) => {

loc.innerHTML = `
    <div class="img-ing">
        <img src="${option.dataset.url}" alt="" class="img-ingredients right">
        <div class="name-ing-right">
            <img src="/assets/arrow-right.png" alt="" class="right">
            <span class="right">${option.dataset.name}</span>
        </div>
    </div>
    `;
    
    
     const childrens = childrensContainer.children
    for (let i = 0; i < childrens.length ; i++) {
        if (i % 2 === 0 || i === 0 ) {
            allSelects = childrens[i]
        let opt = allSelects.querySelector("option:checked");
        console.log(opt);
        }  
}


}

   

meatSelect.addEventListener("change", () => {
    const meatOption = meatSelect.querySelector("option:checked");
    addImage(meatImgContainer, meatOption , meatContainer, meatSelectAll);
}); 

bottomSelect.addEventListener("change", () => {
    const bottomSauceOption = bottomSelect.querySelector("option:checked");
    addImage(bottomImgContainer, bottomSauceOption , bottomContainer , bottomSelectAll);
});

topSelect.addEventListener("change", () => {
    const topSauceOption = topSelect.querySelector("option:checked");
    addImage(topImgContainer, topSauceOption , topContainer , topSelectAll);
});

cheeseSelect.addEventListener("change", () => {
    const cheeseOption = cheeseSelect.querySelector("option:checked");
    addImage(cheeseImgContainer, cheeseOption , cheeseContainer , cheeseSelectAll);
});

toppingsSelect.addEventListener("change", () => {
    const toppingsOption = toppingsSelect.querySelector("option:checked");
    addImage(toppingsImgContainer, toppingsOption, toppingsContainer , toppingsSelectAll);
});