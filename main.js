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
    saveArray.push('(');
});

closeBracket.addEventListener('click', () => {
    input.value += ')';
    saveVariable += ')';
    saveArray.push(')');
});

power.addEventListener('click', () => {
    input.value += '^';
    saveVariable += '**';
    saveArray.push('^');
});

cancel.addEventListener('click', () => {
    input.value = '';
    saveVariable = '';
    saveArray = [];
});

seven.addEventListener('click', () => {
    input.value += '7';
    saveVariable += 7;
    saveArray.push('7');
});

eigth.addEventListener('click', () => {
    input.value += '8';
    saveVariable += 8;
    saveArray.push('8');
});

nine.addEventListener('click', () => {
    input.value += '9';
    saveVariable += 9;
    saveArray.push('9');
});

plus.addEventListener('click', () => {
    input.value += '+';
    saveVariable += '+';
    saveArray.push('+');
});

four.addEventListener('click', () => {
    input.value += '4';
    saveVariable += 4;
    saveArray.push('4');
});

five.addEventListener('click', () => {
    input.value += '5';
    saveVariable += 5;
    saveArray.push('5');
});

six.addEventListener('click', () => {
    input.value += '6';
    saveVariable += 6;
    saveArray.push('6')
});

minus.addEventListener('click', () => {
    input.value += '-';
    saveVariable += '-';
    saveArray.push('-')
});

one.addEventListener('click', () => {
    input.value += '1';
    saveVariable += 1;
    saveArray.push('1');
});

two.addEventListener('click', () => {
    input.value += '2';
    saveVariable += 2;
    saveArray.push('2');
});

three.addEventListener('click', () => {
    input.value += '3';
    saveVariable += 3;
    saveArray.push('3');
});

product.addEventListener('click', () => {
    input.value += '×'
    saveVariable += '*';
    saveArray.push('×')
});

zero.addEventListener('click', () => {
    input.value += '0';
    saveVariable += 0;
    saveArray.push('.');
});

dot.addEventListener('click', () => {
    input.value += '.';
    saveVariable += '.';

    // saveArray.pop();
    // saveVariable = saveArray.join('');
    // input.value = saveVariable.toString();
});

divide.addEventListener('click', () => {
    input.value += '÷';
    saveVariable += '/';
    saveArray.push('÷');
});

equal.addEventListener('click', () => {
    input.value = eval(saveVariable);
});