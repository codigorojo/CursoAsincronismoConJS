/**
|--------------------------------------------------
| DEFINICION DE ESTRUCTURA
|--------------------------------------------------
*/

function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}
console.log("la suma de los numeros ingresados es ", calc(8, 1, sum));

function date(callback) {
  console.log(new Date());
  setTimeout(function () {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);
