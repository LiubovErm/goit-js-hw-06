// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const listRef = document.querySelector ("#categories");
const numberOfItems = listRef.children.length;
console.log ("Number of categories:", numberOfItems);

// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const itemsRef = document.querySelectorAll (".item");
itemsRef.forEach ((element) => {
    const titleRef = element.querySelector("h2").textContent;
    const itemsLength = element.querySelectorAll ("li").length;
    console.log ("Category:", titleRef);
    console.log ("Elements:", itemsLength);
});