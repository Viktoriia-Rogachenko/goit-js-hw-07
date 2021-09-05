const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', inputArea);

function inputArea(event) {
    let value = inputEl.value;
    if (value === "") {
        nameEl.textContent = "незнакомец";
    }
    else {
        nameEl.textContent = value
    };
};

