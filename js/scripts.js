function add(number1, number2) {
  return number1 + number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function celsiusToFarenheit(number1) {
  return add(divide(multiply(number1, 9),5),32)
}

const number1 = parseInt(prompt("Enter a degree in celsius: "));
//const number2 = parseInt(prompt("Enter another number: "));
const result = celsiusToFarenheit(number1);

alert(result);