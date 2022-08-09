// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const fontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const newFont = (event) => {
  textRef.setAttribute("style", `font-size: ${event.target.value}px`);
};

fontSizeControlRef.addEventListener("input", newFont);

// додатковий варіант

// const fontSizeControlRef = document.querySelector('#font-size-control');
// const textRef = document.querySelector('#text');

// fontSizeControlRef.addEventListener("input", function (event) {
//     textRef.style.fontSize = event.currentTarget.value + "px";
// });

