const input = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

const onInputChange = () => {
    inputText.style.fontSize = `${input.value}px`;
};

input.addEventListener("input", onInputChange);