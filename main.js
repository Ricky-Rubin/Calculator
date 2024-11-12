const input = document.querySelector('#input');
const openBracket = document.querySelector('#open');
const closeBracket = document.querySelector('#close');
const power = document.querySelector('#power');
const cancel = document.querySelector('#cancel');
const seven = document.querySelector('#seven');
const eigth = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const plus = document.querySelector('#plus');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const minus = document.querySelector('#minus');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const product = document.querySelector('#product');
const zero = document.querySelector('#zero');
const dot = document.querySelector('#dot');
const divide = document.querySelector('#divide');
const equal = document.querySelector('#equal');

let saveVariable = '';
let saveArray = [];

openBracket.addEventListener('click', () => {
    input.value += '(';
    saveVariable += '('
});

closeBracket.addEventListener('click', () => {
    input.value += ')';
    saveVariable += ')';
});

power.addEventListener('click', () => {
    input.value += '^';
    saveVariable += '**';
});

cancel.addEventListener('click', () => {
    input.value = '';
    saveVariable = '';
    saveArray = [];
});

seven.addEventListener('click', () => {
    input.value += '7';
    saveVariable += Number(7);
});

eigth.addEventListener('click', () => {
    input.value += '8';
    saveVariable += Number(8);
});

nine.addEventListener('click', () => {
    input.value += '9';
    saveVariable += Number(9);
});

plus.addEventListener('click', () => {
    input.value += '+';
    saveVariable += '+';
});

four.addEventListener('click', () => {
    input.value += '4';
    saveVariable += Number(4);
});

five.addEventListener('click', () => {
    input.value += '5';
    saveVariable += Number(5);
    saveArray.push('5');
});

six.addEventListener('click', () => {
    input.value += '6';
    saveVariable += Number(6);
    saveArray.push('6')
});

minus.addEventListener('click', () => {
    input.value += '-';
    saveVariable += '-';
    saveArray.push('-')
});

one.addEventListener('click', () => {
    input.value += '1';
    saveVariable += Number(1);
});

two.addEventListener('click', () => {
    input.value += '2';
    saveVariable += Number(2);
});

three.addEventListener('click', () => {
    input.value += '3';
    saveVariable += Number(3);
});

product.addEventListener('click', () => {
    input.value += '×'
    saveVariable += '*';
});

zero.addEventListener('click', () => {
    input.value += '0';
    saveVariable += Number(0);
});

dot.addEventListener('click', () => {
    // input.value += '.';
    // saveVariable += '.';

    // let check = saveVariable.slice(0, -1);
    // console.log(check);
    // input.value = check;
    saveArray.pop();
    let check = saveArray.join('');
    input.value = check;
});

divide.addEventListener('click', () => {
    input.value += '÷';
    saveVariable += '/';
});

equal.addEventListener('click', () => {
    let solution = eval(saveVariable);
    console.log(saveVariable);
    input.value = '';
    input.value = solution;
    
})