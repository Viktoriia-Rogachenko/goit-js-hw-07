const ulCategories = document.querySelectorAll(".item h2").forEach(elem => console.log(`Категория: ${elem.textContent}, Количество элементов: ${elem.nextElementSibling.children.length}`))
// const ulCategories = document.querySelectorAll(".item h2")


// xxx.forEach(elem => {
//     const xxx = ulCategories;
//     `Категория: ${elem.textContent}, Количество элементов: ${elem.nextElementSibling.children.length}`
// });
// console.log(xxx)
