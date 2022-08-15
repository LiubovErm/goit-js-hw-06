// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

function createName() {
    outputRef.textContent = inputRef.value || "Anonymous"; 
}

inputRef.addEventListener("input", createName);

//Варіант 2

// const inputRef = document.querySelector("#name-input");
// const outputRef = document.querySelector("#name-output");

// const createInputName = (event) => {
//     event.currentTarget.value === ""
//       ? (outputRef.textContent = "Anonymous")
//       : (outputRef.textContent = event.currentTarget.value);
//   };
//   inputRef.addEventListener("input", createInputName);

//Варіант 3

// const inputRef = document.querySelector("#name-input");
// const outputRef = document.querySelector("#name-output");

// function createName(event) {
//         if (event.currentTarget.value === "") {
//             outputRef.textContent = "Anonymous";
//         } else {
//             outputRef.textContent = event.currentTarget.value;
//         }
//     }
    
//     inputRef.addEventListener("input", createName);