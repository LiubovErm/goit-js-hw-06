// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.


const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const changeFont = (event) => {
  textRef.style.fontSize = event.currentTarget.value + "px";
};

fontSizeControlRef.addEventListener("input", changeFont);



// Варіант 2

// const fontSizeControlRef = document.querySelector("#font-size-control");
// const textRef = document.querySelector("#text");

// const changeFont = (event) => {
//   textRef.setAttribute("style", `font-size: ${event.target.value}px`);
// };

// fontSizeControlRef.addEventListener("input", changeFont);




