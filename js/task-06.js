// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputRef = document.querySelector('#validation-input');
const numberOfSymbol = Number(inputRef.dataset.length);

function verifyValidation(event) {
    if (event.currentTarget.value.length === numberOfSymbol) {
        inputRef.classList.remove('invalid');
        return inputRef.classList.add('valid');
    }
        inputRef.classList.remove('valid');
        return inputRef.classList.add('invalid');
}

inputRef.addEventListener('blur', verifyValidation);

