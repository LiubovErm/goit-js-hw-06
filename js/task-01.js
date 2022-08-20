// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).



const listRef = document.querySelector("#categories");
const itemsRef = document.querySelectorAll (".item");
const numberOfItems = listRef.children.length;

console.log("Number of categories:", numberOfItems);
// console.log("Number of categories:", itemsRef.length); - ще варіант

itemsRef.forEach ((element) => {
    const titleRef = element.querySelector("h2").textContent;
    const itemsLength = element.querySelectorAll ("li").length;
   
    console.log ("Category:", titleRef);
    console.log ("Elements:", itemsLength);
});



// варіант 2
// for (let i = 0; i < numberOfItems; i += 1){
//     console.log('Category:', listRef.children[i].querySelector('h2').textContent);
//     console.log('Elements:', listRef.children[i].querySelectorAll('li').length);
// }