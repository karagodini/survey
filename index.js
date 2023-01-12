const CURRENT_YEAR = 2023;
const CORRECT_ANSWER = 'правильно';
const ERROR_ANSWER = 'неправильно'

const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
const outputNode = document.querySelector('.js-output');

buttonNode.addEventListener('click', function() {
    const ansver = Number(inputNode.value);

    if (!inputNode) {
        return;
    }

    let output = CORRECT_ANSWER;

    if (ansver !== CURRENT_YEAR) {
        output = ERROR_ANSWER;
    }

    outputNode.innerHTML = output;
})