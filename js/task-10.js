// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");

let divSize = 30;

function createBoxes() {
  const numberOfBoxes = inputEl.value;
  const divArray = [];
  for (let i = 1; i <= numberOfBoxes; i += 1) {
    const newDivEl = document.createElement("div");

    newDivEl.style.width = `${divSize}px`;
    newDivEl.style.height = `${divSize}px`;
    newDivEl.style.backgroundColor = getRandomHexColor();

    divArray.push(newDivEl);
    divSize += i * 10;
  }
  boxesEl.append(...divArray);
  inputEl.value = "";
};

function destroyBoxes () {
  boxesEl.innerHTML = "";
  divSize = 30;
};

buttonCreateEl.addEventListener("click", createBoxes);
buttonDestroyEl.addEventListener("click", destroyBoxes);