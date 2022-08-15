// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");
let startDivSize = 30;

inputEl.value = 0;

function createBoxes() {
  const numberOfBoxes = inputEl.value;
  const divArray = [];

  for (let i = 1; i <= numberOfBoxes; i += 1) {
    const newDivEl = document.createElement("div");
    newDivEl.style.width = `${startDivSize}px`;
    newDivEl.style.height = `${startDivSize}px`;
    newDivEl.style.backgroundColor = getRandomHexColor();

    divArray.push(newDivEl);
    startDivSize += 10;
  }
  boxesEl.append(...divArray);
  inputEl.value = "";
};

function destroyBoxes () {
  boxesEl.replaceChildren();   // boxesEl.innerHTML = "";
  startDivSize = 30;        
  // кастиль?
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonCreateEl.addEventListener("click", createBoxes);
buttonDestroyEl.addEventListener("click", destroyBoxes)

