// const bunOption = document.querySelector("#select-bun option:checked");
// const meatOptions = document.querySelectorAll("#select-meat option:checked");
// const bottomSauceOptions = document.querySelectorAll("#select-bottom-sauce option:checked");
// const topSauceOptions = document.querySelectorAll("#select-top-sauce option:checked");
// const cheeseOptions = document.querySelectorAll("#select-chesse option:checked");
// const toppingsOptions = document.querySelectorAll("#select-toppings option:checked");

// console.log(bunOption.dataset.price);

// class Ingredient {
//     constructor(options) {
//         this.name = options.name;
//         this.price = options.price;
//         this.url = options.url;
//     }
// }

// class Burger {
//     constructor(options) {
//         this.bun = new Ingredient(options.bun);
//         this.meats = options.meats.map(meat => new Ingredient(meat));
//         this.bottomSauces = options.bottomSauces.map(sauce => new Ingredient(sauce));
//         this.topSauces = options.topSauces.map(sauce => new Ingredient(sauce));
//         this.cheeses = options.cheeses.map(cheese => new Ingredient(cheese));
//         this.toppings = options.toppings.map(topping => new Ingredient(topping));
//     }
// }

// const createIngredient = (option) => {
//     return new Ingredient({
//         name: option.value,
//         price: option.dataset.price,
//         url: option.dataset.url,
//     });
// };

// const bun = createIngredient(bunOption);
// const meatIngredients = Array.from(meatOptions).map(createIngredient);
// const bottomSauceIngredients = Array.from(bottomSauceOptions).map(createIngredient);
// const topSauceIngredients = Array.from(topSauceOptions).map(createIngredient);
// const cheeseIngredients = Array.from(cheeseOptions).map(createIngredient);
// const toppingsIngredients = Array.from(toppingsOptions).map(createIngredient);

// const burger1 = new Burger({
//     bun: bun,
//     meats: meatIngredients,
//     bottomSauces: bottomSauceIngredients,
//     topSauces: topSauceIngredients,
//     cheeses: cheeseIngredients,
//     toppings: toppingsIngredients,
// });

// console.log(burger1);
