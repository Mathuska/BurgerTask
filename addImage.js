
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


const addImage = (loc, option,) => {

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


const selectAllOptions = (childrensContainer, allSelects) =>{
    let arr = []
 
    const childrens = childrensContainer.children
   for (let i = 0; i < childrens.length ; i++) {
       if (i % 2 === 0) {
           allSelects = childrens[i]
       let opt = allSelects.querySelector("select");

        arr.push(opt)
        
       }  
    }
    console.log(arr);
    return arr;
};


meatSelect.addEventListener("change", () => {
    const Option = meatSelect.querySelector("option:checked");
  let arrMeat =  selectAllOptions(meatContainer, meatSelectAll);
  arrMeat.forEach(element =>{
    element.addEventListener("change" , () => {
        let Option = element.querySelector("option:checked");
 addImage(meatImgContainer, Option );
        
    })
  })

 addImage(meatImgContainer, Option );
}); 


bottomSelect.addEventListener("change", () => {
    const Option = bottomSelect.querySelector("option:checked");
  let arrBottom =  selectAllOptions(bottomContainer, bottomSelectAll);
  arrBottom.forEach(element =>{
    element.addEventListener("change" , () => {
        let Option = element.querySelector("option:checked");
 addImage(bottomImgContainer, Option );
        
    })
  })

 addImage(bottomImgContainer, Option );
}); 

topSelect.addEventListener("change", () => {
    const Option = topSelect.querySelector("option:checked");
  let arrTop =  selectAllOptions(topContainer, topSelectAll);
  arrTop.forEach(element =>{
    element.addEventListener("change" , () => {
        let Option = element.querySelector("option:checked");
 addImage(topImgContainer, Option );
        
    })
  })

 addImage(topImgContainer, Option );
}); 

cheeseSelect.addEventListener("change", () => {
    const Option = cheeseSelect.querySelector("option:checked");
  let arrCheese =  selectAllOptions(cheeseContainer, cheeseSelectAll);
  arrCheese.forEach(element =>{
    element.addEventListener("change" , () => {
        let Option = element.querySelector("option:checked");
 addImage(cheeseImgContainer, Option );
        
    })
  })

 addImage(cheeseImgContainer, Option );
}); 

toppingsSelect.addEventListener("change", () => {
    const Option = toppingsSelect.querySelector("option:checked");
  let arrToppings =  selectAllOptions(toppingsContainer, toppingsSelectAll);
  arrToppings.forEach(element =>{
    element.addEventListener("change" , () => {
        let Option = element.querySelector("option:checked");
 addImage(toppingsImgContainer, Option );
        
    })
  })

 addImage(toppingsImgContainer, Option );
}); 
