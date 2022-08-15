// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const decrementBtn = document.querySelector("[data-action=decrement]");
const incrementBtn = document.querySelector("[data-action=increment]");
const valueRef = document.querySelector("#value");
let counterValue = 0;

incrementBtn.addEventListener(`click`, ()=>{
    counterValue +=1;
    valueRef.textContent = counterValue;
})
decrementBtn.addEventListener(`click`, ()=>{
    counterValue -=1;
    valueRef.textContent = counterValue;
})

// Варіант 2

// const decrementBtn = document.querySelector("[data-action=decrement]");
// const incrementBtn = document.querySelector("[data-action=increment]");
// const valueRef = document.querySelector("#value");

// const counterValue = {
//     value: 0,
//     decrement() {
//         this.value -= 1;
//     },
//     increment() {
//         this.value += 1;
//     },
// };

// decrementBtn.addEventListener("click", function () {
//     counterValue.decrement();
//     valueRef.textContent = counterValue.value;
// });

// incrementBtn.addEventListener("click", function () {
//     counterValue.increment();
//     valueRef.textContent = counterValue.value;
// });