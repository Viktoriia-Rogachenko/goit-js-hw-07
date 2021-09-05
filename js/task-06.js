const inputEl = document.querySelector('#validation-input');
const inputValid = document.querySelector('valid');
const inputInvalid = document.querySelector('invalid');

inputEl.addEventListener('blur', invalidArea);

function invalidArea(event) {

    const inputLength = this.dataset.length;

    event.currentTarget.value.length ==
        Number(inputLength) ?
        inputValid :
        inputInvalid;
}


