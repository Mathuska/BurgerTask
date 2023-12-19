const meatSelect = document.querySelector("#select-meat");
const bottomSelect = document.querySelector("#select-bottom-sauce");
const topSelect = document.querySelector("#select-top-sauce");
const cheeseSelect = document.querySelector("#select-chesse");
const toppingsSelect = document.querySelector("#select-toppings");

const meatContainer = document.querySelector("#meat-container");
const bottomContainer = document.querySelector("#bottom-sauce-container");
const topContainer = document.querySelector("#top-sauce-container");
const cheeseContainer = document.querySelector("#cheese-container");
const toppingsContainer = document.querySelector("#toppings-container");

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

const allSelectContainer = document.querySelector("#create-burger");
const list = document.querySelector("#ingredients-list");
const totalPrice = document.querySelector("#total-price");

let imageCounter = 1;
const addImage = (loc, option) => {
  const imgIng = document.createElement("div");
  imgIng.classList.add("img-ing");

  imageCounter++;
  imgIng.setAttribute("data-number", imageCounter);

  const img = document.createElement("img");
  img.src = option.dataset.url;
  img.classList.add("img-ingredients", "right");
  imgIng.appendChild(img);

  const nameIngRight = document.createElement("div");
  nameIngRight.classList.add("name-ing-right");

  const arrowImg = document.createElement("img");
  arrowImg.src = "/assets/arrow-right.png";
  arrowImg.classList.add("right");
  nameIngRight.appendChild(arrowImg);

  const span = document.createElement("span");
  span.classList.add("right");
  span.textContent = option.dataset.name;
  nameIngRight.appendChild(span);

  imgIng.appendChild(nameIngRight);

  loc.appendChild(imgIng);
};

const setImage = (loc, setUrl, allLoc) => {
  const child = allLoc.querySelector(".img-ing");
  if (setUrl === undefined) {
    child.remove();
  } else {
    loc.src = setUrl;
  }
};

const selectAllOptions = (childrensContainer, allSelects) => {
  let arr = [];

  const childrens = childrensContainer.children;
  for (let i = 0; i < childrens.length; i++) {
    if (i % 2 === 0) {
      allSelects = childrens[i];
      let opt = allSelects.querySelector("select");
      arr.push(opt);
    }
  }
  return arr;
};
const selectAllDeleteBtn = (childrensContainer, allBtn) => {
  let arrBtn = [];

  const childrens = childrensContainer.children;
  for (let i = 0; i < childrens.length; i++) {
    if (i % 2 === 1) {
      allBtn = childrens[i];
      let opt = allBtn.querySelector("img");
      arrBtn.push(opt);
    }
  }
  return arrBtn;
};

const removeRestImg = (loc) => {
  if (loc.childElementCount > 1) {
    let lastChild = loc.lastElementChild;
    loc.removeChild(lastChild);
  } else {
    console.log("nam ce stere");
  }
};

const addImageOnChange = (select, imgContainer) => {
  let addImageCalled = false;
  select.addEventListener("change", () => {
    viewTotalPrice();
    if (!addImageCalled) {
      const option = select.querySelector("option:checked");
      addImage(imgContainer, option);
      addImageCalled = true;
    }
    const optionUrl = select.querySelector("option:checked").dataset.url;
    const firstImage = imgContainer.querySelector(".img-ingredients");
    if (firstImage === null) {
      const option = select.querySelector("option:checked");
      addImage(imgContainer, option);
    } else {
      setImage(firstImage, optionUrl, imgContainer);
    }
  });
};

const addImagesOnChanges = (select, imgContainer) => {
  let status = select.parentNode.dataset.tr;
  if (status === "false") {
    const option = select.querySelector("option:checked");
    addImage(imgContainer, option);
    select.parentNode.dataset.tr = true;
  }
  const option = select.querySelector("option:checked").dataset.url;
  const ind = select.parentNode.dataset.index / 2;
  const lImg = imgContainer
    .querySelector(`[data-number="${ind + 2}"]`)
    .querySelector("img");
  if (imgContainer === null) {
    const option = select.querySelector("option:checked");
    addImage(imgContainer, option);

    console.log("hello");
  } else {
    setImage(lImg, option, imgContainer);
  }
};
const deleteImg = (container, imgContainer, divDelete) => {
  let arrIngDel = selectAllDeleteBtn(container, divDelete);
  arrIngDel.forEach((element) => {
    element.addEventListener("click", () => {
      removeRestImg(imgContainer);
    });
  });
};

const viewTotalPrice = () => {
  const childsTotal = list.querySelectorAll(".total");
  childsTotal.forEach((x) => {
    x.remove();
  });

  let total = 0;
  const allSelects = allSelectContainer.querySelectorAll("select");

  allSelects.forEach((item) => {
    const allOptions = item.querySelectorAll("option:checked");
    for (let i = 0; i < allOptions.length; i++) {
      const element = allOptions[i];
      if (element.value !== "-") {
        total += parseInt(element.dataset.price, 10);

        const h3 = document.createElement("h3");
        h3.classList.add("total");
        h3.textContent = `${element.value} : ( ${parseInt(
          element.dataset.price,
          10
        )} lei )`;
        list.append(h3);
      }
    }
  });
  totalPrice.textContent = `Total: ${total} lei`;
};

const addIngredientEventListener = (
  btn,
  selectIng,
  container,
  selectAll,
  imgContainer,
  divDelete
) => {
  btn.addEventListener("click", () => {
    viewTotalPrice();
    deleteImg(container, imgContainer, divDelete);
    let arrIngredients = selectAllOptions(container, selectAll);
    arrIngredients.forEach((element) => {
      element.addEventListener("change", () => {
        viewTotalPrice();
        addImagesOnChanges(element, imgContainer);
      });
    });
  });
};

addIngredientEventListener(
  addMeatBtn,
  meatSelect,
  meatContainer,
  meatSelectAll,
  meatImgContainer,
  divDelMeat
);
addIngredientEventListener(
  addBottomSauceBtn,
  bottomSelect,
  bottomContainer,
  bottomSelectAll,
  bottomImgContainer,
  divDelBottom
);
addIngredientEventListener(
  addTopSauceBtn,
  topSelect,
  topContainer,
  topSelectAll,
  topImgContainer,
  divDelTop
);
addIngredientEventListener(
  addCheeseBtn,
  cheeseSelect,
  cheeseContainer,
  cheeseSelectAll,
  cheeseImgContainer,
  divDelChese
);
addIngredientEventListener(
  addToppingsBtn,
  toppingsSelect,
  toppingsContainer,
  toppingsSelectAll,
  toppingsImgContainer,
  divDelToppings
);

meatSelect.addEventListener("change", () => {
  viewTotalPrice();
  const Option = meatSelect.querySelector("option:checked").dataset.url;
  const firstS = meatImgContainer.querySelector(".img-ingredients");
  setImage(firstS, Option, meatImgContainer);
});

addImageOnChange(bottomSelect, bottomImgContainer);
addImageOnChange(topSelect, topImgContainer);
addImageOnChange(cheeseSelect, cheeseImgContainer);
addImageOnChange(toppingsSelect, toppingsImgContainer);

window.addEventListener("load", () => {
  viewTotalPrice();
});
