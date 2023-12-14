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