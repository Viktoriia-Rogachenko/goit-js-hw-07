const ingredientsEl = document.querySelector('#ingredients');


const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const addIngredient = ingredients => ingredients.map(ingredient => {
    const listElement = document.createElement('li')
    listElement.textContent = ingredient

    return listElement

});

ingredientsEl.append(...addIngredient(ingredients))


