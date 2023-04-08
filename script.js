
let select1 = document.querySelector("#select1");
let select2 = document.querySelector("#select2");
let leftImg = document.querySelector(".left-img");
let rightImg = document.querySelector(".right-img");
let leftInput = document.querySelector("#left-input");
let rightInput = document.querySelector("#right-input");
let button = document.querySelector("button");
select1.addEventListener("change", () => {
    if (select1.value === "USD") leftImg.src = "https://img.icons8.com/color/48/null/usa.png";
    if (select1.value === "RUB") leftImg.src = "https://img.icons8.com/color/48/null/russian-federation.png";
    rightInput.value = "";
    leftInput.value = "";
});
leftInput.addEventListener("change", () => {
    rightInput.value = "";
})
rightInput.addEventListener("change", () => {
    leftInput.value = "";
})
button.addEventListener("click", (e) => {
    e.preventDefault();
    if (select1.value === "USD" && leftInput.value.trim() === "") {
        leftInput.value = (rightInput.value / 1.7).toFixed(2);
    }
    if (select1.value === "USD" && rightInput.value.trim() === "") {
        rightInput.value = leftInput.value * 1.7;
    }
    if (select1.value === "RUB" && rightInput.value.trim() === "") {
        rightInput.value = leftInput.value * 0.02;
    }
    if (select1.value === "RUB" && leftInput.value.trim() === "") {
        leftInput.value = (rightInput.value / 0.02).toFixed(2);
    }
})
