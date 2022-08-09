// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// Варіант 1
const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", function () {
    outputRef.textContent = inputRef.value || "Anonymous";
});

// Додатковий варіант

// const inputRef = document.querySelector("#name-input");
// const outputRef = document.querySelector("#name-output");

// const createInputName = (event) => {
//     event.currentTarget.value === ""
//       ? (outputRef.textContent = "Anonymous")
//       : (outputRef.textContent = event.currentTarget.value);
//   };
//   inputRef.addEventListener("input", createInputName);